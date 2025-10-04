import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { Loader2 } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Loader2 size={48} className="animate-spin text-blue-500" />
      </div>
    );
  }

  return isAuthenticated ? (
    <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
  );
}
