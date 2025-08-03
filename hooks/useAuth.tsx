
'use client';
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  userProfile: any | null;
  emailCaptured: string | null;
  loading: boolean;
  hasAccess: (feature: string) => boolean;
  captureEmail: (email: string, source: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, fullName: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [emailCaptured, setEmailCaptured] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      }
      
      const capturedEmail = localStorage.getItem('captured_email');
      if (capturedEmail) {
        setEmailCaptured(capturedEmail);
      }
      
      setLoading(false);
    };

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchUserProfile(session.user.id);
        } else {
          setUserProfile(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const hasAccess = (feature: string): boolean => {
    if (user) return true;
    
    if (emailCaptured) {
      return ['strategy-playground', 'collab-lab', 'spark-session'].includes(feature);
    }
    
    return ['ai-survey', 'basic-insights', 'hidden-gems'].includes(feature);
  };

  const captureEmail = async (email: string, source: string): Promise<boolean> => {
    try {
      const response = await fetch(`${supabase.supabaseUrl}/functions/v1/auth-handler`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`
        },
        body: JSON.stringify({
          action: 'capture_email',
          email,
          source
        })
      });

      if (response.ok) {
        setEmailCaptured(email);
        localStorage.setItem('captured_email', email);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Email capture error:', error);
      return false;
    }
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      return !error;
    } catch (error) {
      console.error('Sign in error:', error);
      return false;
    }
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<boolean> => {
    try {
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      });

      if (!error && data.user) {
        await fetch(`${supabase.supabaseUrl}/functions/v1/auth-handler`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabase.supabaseKey}`
          },
          body: JSON.stringify({
            action: 'create_profile',
            user_id: data.user.id,
            profile_data: {
              email: data.user.email,
              full_name: fullName
            }
          })
        });
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Sign up error:', error);
      return false;
    }
  };

  const signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    setEmailCaptured(null);
    localStorage.removeItem('captured_email');
  };

  const contextValue: AuthContextType = {
    user,
    userProfile,
    emailCaptured,
    loading,
    hasAccess,
    captureEmail,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
