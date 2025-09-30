import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Building Modern Web Applications',
      excerpt: 'Exploring the latest trends and best practices in web development, from React to full-stack solutions.',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      title: 'The Art of Minimalist Design',
      excerpt: 'How less is more when it comes to creating impactful user interfaces that users love.',
      date: 'Mar 10, 2024',
      readTime: '4 min read',
      category: 'Design'
    },
    {
      title: 'Performance Optimization Tips',
      excerpt: 'Practical techniques to make your web applications faster and more efficient.',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      category: 'Performance'
    },
    {
      title: 'Glassmorphism in Modern UI',
      excerpt: 'A deep dive into the trending design style that brings depth and elegance to interfaces.',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      category: 'Design'
    }
  ];

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Latest Posts</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-gray-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="glass-card p-8 hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-white hover:gap-3 transition-all duration-300 font-medium">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}