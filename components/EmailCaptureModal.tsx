
'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  onUpgrade?: () => void;
  source: string;
  title?: string;
  description?: string;
}

export default function EmailCaptureModal({ 
  isOpen, 
  onClose, 
  onSuccess,
  onUpgrade,
  source,
  title = "Save Your Marketing Strategy",
  description = "You've created an amazing strategy! Enter your email to save it and unlock advanced features."
}: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

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
        onSuccess(email);
        setEmail('');
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto relative my-8 max-h-none overflow-y-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-save-line text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              disabled={loading}
            >
              Maybe Later
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-colors whitespace-nowrap"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Strategy'}
            </button>
          </div>
        </form>

        {onUpgrade && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-3">
              Want to save your progress and collaborate with others?
            </p>
            <button
              onClick={onUpgrade}
              className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
            >
              Create Full Account
            </button>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-4">
          We'll never spam you. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
