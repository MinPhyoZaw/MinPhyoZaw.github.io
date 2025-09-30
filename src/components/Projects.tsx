import { ExternalLink, Github, Clock, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const previousProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      status: 'completed',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and productivity insights.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      status: 'completed',
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Custom content management system for creative professionals with drag-and-drop interface and media library.',
      technologies: ['Next.js', 'Supabase', 'TypeScript'],
      status: 'completed',
      link: '#',
      github: '#'
    }
  ];

  const pendingProjects = [
    {
      title: 'TogetherSafe App',
      description: 'A simple and reliable emergency tool that lets you quickly access your emergency contacts with a single tap. With a central SOS button, easy contact management, and light/dark mode support, it ensures help is always just one click away.',
      technologies: ['React', 'NodeJS', 'Firebase', 'Twilio'],
      status: 'in-progress',
      progress: 65
    },
    {
      title: 'CoffeeShop Finder',
      description: 'The web-based app that find the coffee shop near your location',
      technologies: ['React', 'NodeJs', 'GoogleGeological API' , 'Firebase'],
      status: 'in-progress',
      progress: 40
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'WebRTC-based collaboration platform with video conferencing, screen sharing, and shared workspaces.',
      technologies: ['React', 'WebRTC', 'Socket.io'],
      status: 'in-progress',
      progress: 25
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">My Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Showcasing completed work and upcoming innovations
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 size={28} className="text-white" />
            <h3 className="text-3xl font-bold text-white">Completed Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 glass-button py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="glass-button py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Clock size={28} className="text-white" />
            <h3 className="text-3xl font-bold text-white">In Progress</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pendingProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-white/5 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-white to-gray-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}