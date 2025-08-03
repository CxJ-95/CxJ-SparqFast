
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpbbpowaxvimnrqhiqzw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmJwb3dheHZpbW5ycWhpcXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwOTQ2MTIsImV4cCI6MjA2OTY3MDYxMn0.kj0VKIKbzSQLZ_djKpgZLF7G2RVvB_-pSEvSjt-AkHk'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type UserProfile = {
  id: string
  email?: string
  full_name?: string
  avatar_url?: string
  business_type?: string
  company_name?: string
  industry?: string
  experience_level?: string
  marketing_goals?: string[]
  ai_survey_completed?: boolean
  ai_survey_data?: any
}

export type EmailCapture = {
  id: string
  email: string
  capture_source?: string
  converted_to_user: boolean
  created_at: string
}

export type UserProgress = {
  id: string
  user_id: string
  progress_type: string
  content_data: any
  created_at: string
}
