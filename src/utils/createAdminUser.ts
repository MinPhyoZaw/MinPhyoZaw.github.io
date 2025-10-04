import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function createAdminUser() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'minphyothaw88@gmail.com',
      password: 'minthaw@capricon99',
    });

    if (error) {
      console.error('Error creating admin user:', error.message);
      return { success: false, error: error.message };
    }

    console.log('Admin user created successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, error: 'Unexpected error occurred' };
  }
}
