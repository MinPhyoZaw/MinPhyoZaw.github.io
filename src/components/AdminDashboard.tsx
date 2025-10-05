// src/components/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { User, Mail, Calendar, LogOut, Trash2, Loader2 } from 'lucide-react';
import { db, messagesCollection, auth } from '../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: any;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const q = query(messagesCollection, orderBy('created_at', 'desc'));
      const snapshot = await getDocs(q);
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
      setMessages(msgs);
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, 'chat_messages', id));
      setMessages(messages.filter(m => m.id !== id));
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message');
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    onLogout();
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return '';
    return timestamp.toDate().toLocaleString('en-US', { 
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Message Dashboard</h1>
            <p className="text-gray-400">View and manage contact messages</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={48} className="animate-spin text-blue-500" />
          </div>
        ) : messages.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <Mail size={64} className="mx-auto mb-4 text-gray-500" />
            <h3 className="text-xl font-semibold text-white mb-2">No Messages Yet</h3>
            <p className="text-gray-400">Messages from the contact form will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-sm text-gray-400 mb-4">Total Messages: {messages.length}</div>
            {messages.map((msg) => (
              <div key={msg.id} className="glass-card p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <User size={18} className="text-blue-400" /> {msg.name}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Mail size={16} />
                        <a href={`mailto:${msg.email}`} className="hover:text-blue-400 transition-colors">{msg.email}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} /> {formatDate(msg.created_at)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    disabled={deletingId === msg.id}
                    className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {deletingId === msg.id ? <Loader2 size={20} className="animate-spin" /> : <Trash2 size={20} />}
                  </button>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
