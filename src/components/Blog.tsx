import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogPostPopup from './BlogPostPopup';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: 'Building Modern Web Applications',
      excerpt: 'Exploring the latest trends and best practices in web development, from React to full-stack solutions.',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `In today's rapidly evolving tech landscape, building modern web applications requires a comprehensive understanding of various technologies and best practices. From choosing the right framework to implementing efficient state management, every decision matters.

React has become the go-to library for building user interfaces, offering a component-based architecture that promotes reusability and maintainability. Combined with TypeScript, developers can catch errors early and write more robust code.

Full-stack development involves mastering both frontend and backend technologies. Modern stacks often include React for the frontend, Node.js for the backend, and databases like PostgreSQL or MongoDB. Understanding how these pieces fit together is crucial for building scalable applications.

Performance optimization is another critical aspect. Techniques like code splitting, lazy loading, and efficient state management can significantly improve user experience. Additionally, implementing proper caching strategies and optimizing database queries can reduce server load and response times.

Security should never be an afterthought. Implementing proper authentication, authorization, and data validation are essential for protecting user data and maintaining trust. Regular security audits and staying updated with the latest security practices are vital for any production application.`
    },
    {
      title: 'The Art of Minimalist Design',
      excerpt: 'How less is more when it comes to creating impactful user interfaces that users love.',
      date: 'Mar 10, 2024',
      readTime: '4 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `Minimalist design is not just about removing elements until nothing is left. It's about finding the perfect balance between functionality and aesthetics, where every element serves a purpose.

The principles of minimalist design include clarity, simplicity, and intentionality. By removing unnecessary elements, we allow users to focus on what truly matters. White space becomes a powerful tool, guiding the eye and creating breathing room for content.

Typography plays a crucial role in minimalist design. Choosing the right typeface and establishing a clear hierarchy helps communicate information effectively without overwhelming the user. Limited color palettes can create sophisticated, cohesive designs that are both beautiful and functional.

User experience benefits greatly from minimalist approaches. Reduced cognitive load means users can accomplish their goals more efficiently. Navigation becomes intuitive, and interfaces feel clean and modern.

However, minimalism requires careful consideration. Every element must earn its place. This disciplined approach to design results in interfaces that are not only visually appealing but also highly functional and user-friendly.`
    },
    {
      title: 'Performance Optimization Tips',
      excerpt: 'Practical techniques to make your web applications faster and more efficient.',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `Performance optimization is crucial for delivering excellent user experiences. Slow applications frustrate users and can significantly impact conversion rates and user retention.

One of the most effective optimization techniques is code splitting. By breaking your application into smaller chunks, you can load only what's necessary for the current page, reducing initial load times. React's lazy loading and Suspense make this easier than ever.

Image optimization is often overlooked but can provide significant performance gains. Using modern formats like WebP, implementing responsive images, and lazy loading images below the fold can dramatically reduce page weight and load times.

Caching strategies are essential for performance. Browser caching, service workers, and CDN caching can all reduce server load and provide near-instant experiences for returning users. Understanding cache invalidation strategies ensures users always get fresh content when needed.

Database optimization includes proper indexing, query optimization, and connection pooling. Even the best frontend optimization won't help if your backend is slow. Regular database maintenance and monitoring can prevent performance degradation over time.

Finally, monitoring and measurement are key. Tools like Lighthouse, WebPageTest, and Real User Monitoring help identify bottlenecks and track improvements over time. What gets measured gets improved.`
    },
    {
      title: 'Glassmorphism in Modern UI',
      excerpt: 'A deep dive into the trending design style that brings depth and elegance to interfaces.',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `Glassmorphism has emerged as one of the most popular design trends, bringing a sense of depth and sophistication to modern interfaces. This design style creates a frosted-glass effect that's both beautiful and functional.

The technique combines background blur, transparency, and subtle borders to create elements that appear to float above the background. This creates visual hierarchy and adds depth to flat designs without resorting to heavy shadows or gradients.

Implementing glassmorphism requires careful consideration of several factors. The backdrop-filter CSS property is key, but browser support must be considered. Fallbacks ensure the design remains functional across all browsers.

Color choices are critical in glassmorphic design. Light, semi-transparent backgrounds work best, allowing underlying content to show through while maintaining readability. Contrast ratios must be carefully managed to ensure accessibility.

Performance considerations include the computational cost of backdrop filters. While modern browsers handle these effects well, they can impact performance on lower-end devices. Testing across various devices ensures everyone gets a good experience.

Glassmorphism works particularly well for card-based layouts, modals, and navigation elements. When used thoughtfully, it can elevate your design from ordinary to extraordinary, creating memorable user experiences.`
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
                <button
                  onClick={() => setSelectedPost(index)}
                  className="flex items-center gap-2 text-white hover:gap-3 transition-all duration-300 font-medium"
                >
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost !== null && (
        <BlogPostPopup
          post={posts[selectedPost]}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
}