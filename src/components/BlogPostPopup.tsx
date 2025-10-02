import { X, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image: string;
}

interface BlogPostPopupProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogPostPopup({ post, onClose }: BlogPostPopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close post"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="text-gray-400 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}