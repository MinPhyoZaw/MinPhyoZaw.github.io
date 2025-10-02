import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadResume = () => {
     const link = document.createElement('a');
    link.href = 'public/min_phyo_thaw_cv.pdf';  
    link.download = 'Min_Phyo_Thaw_Resume.pdf';
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl w-full text-center">
        <div className="glass-card p-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span className="gradient-text">Min Phyo Thaw</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Mid Level Developer
          </p>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern web technologies.
            Passionate about clean code, elegant design, and innovative solutions.
          </p>

          <div className="flex gap-6 justify-center mb-8">
            <a
              href="#"
              className="glass-button p-4 hover:scale-110 transition-transform duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="glass-button p-4 hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="glass-button p-4 hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="inline-block glass-button px-8 py-4 font-medium hover:scale-105 transition-transform duration-300"
            >
              Explore My Work
            </a>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 glass-button px-8 py-4 font-medium hover:scale-105 transition-transform duration-300"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}