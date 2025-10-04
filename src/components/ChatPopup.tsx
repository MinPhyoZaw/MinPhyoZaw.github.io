import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface ChatPopupProps {
  onClose: () => void;
}

export default function ChatPopup({ onClose }: ChatPopupProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('chat_messages').insert([formData]);
      if (error) throw error;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`;
      const emailResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email notification');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => onClose(), 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-white rounded-t-2xl shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-blue-600 px-4 py-3">
          <h3 className="text-white font-bold text-lg">Live Chat</h3>
          <button onClick={onClose} className="text-white p-1 hover:bg-blue-500 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Messages area */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-50">
          {submitted ? (
            <div className="flex flex-col items-center py-8">
              <div className="bg-blue-600 text-white p-3 rounded-full mb-3">
                <Send size={24} />
              </div>
              <h4 className="text-gray-800 font-semibold mb-1">Message Sent!</h4>
              <p className="text-gray-500 text-sm text-center">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={3}
                  placeholder="Type a message..."
                  className="w-full px-3 py-2 border rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 bottom-2 text-blue-600 hover:text-blue-800 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
