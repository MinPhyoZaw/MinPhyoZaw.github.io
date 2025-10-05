import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import ChatPopup from './ChatPopup';

export default function Contact() {
  const [showChat, setShowChat] = useState(false);

  const handleChatClick = () => {
    setShowChat(true);
  };


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">minphyothaw88@gmail.com</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Yangon , Myanmar</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
              <Send size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">Within 24 hours</p>
          </div>
        </div>

        <div className="glass-card p-12 md:p-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="inline-block p-8 bg-white/5 rounded-full mb-8 animate-pulse">
              <MessageCircle size={64} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Start a Conversation
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Chat with me directly and get instant responses. I'm here to discuss your ideas,
              projects, and answer any questions you might have.
            </p>

            <button
              onClick={handleChatClick}
              className="glass-button px-10 py-5 font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto group"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              Send Message Here
            </button>

            <p className="text-gray-500 text-sm mt-6">
              Available 24/7
            </p>
          </div>
        </div>
      </div>

      {showChat && <ChatPopup onClose={() => setShowChat(false)} />}
    </section>
  );
}