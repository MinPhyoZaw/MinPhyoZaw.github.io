import { Code2, Palette, Rocket, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Development',
      description: 'Building scalable applications with modern frameworks and best practices.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'Creating intuitive and aesthetically pleasing user interfaces.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation',
      description: 'Exploring cutting-edge technologies to solve complex problems.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and user experience.'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-gray-600 mx-auto"></div>
        </div>

        <div className="glass-card p-8 md:p-12 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate developer and designer with a love for creating beautiful,
            functional digital experiences. With expertise in modern web technologies,
            I transform ideas into reality through clean code and thoughtful design.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open source projects, and continuously learning to stay at the forefront
            of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-white mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}