import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Min_Phyo_Thaw_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card p-6 sm:p-10 animate-fade-in">
          {/* HERO HEADING */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-5 leading-tight tracking-tight">
            <span className="block text-white">Hello, I'm</span>
            <span className="block gradient-text text-4xl sm:text-6xl">Min Phyo Thaw</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-6 leading-snug">
            Mid Level Developer
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Crafting beautiful digital experiences with modern web technologies. 
            Passionate about clean code, elegant design, and innovative solutions.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-3 sm:gap-5 justify-center mb-5 sm:mb-7">
            <a href="#" className="glass-button p-3 sm:p-4 hover:scale-110 transition-transform duration-300" aria-label="GitHub">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="glass-button p-3 sm:p-4 hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#contact" className="glass-button p-3 sm:p-4 hover:scale-110 transition-transform duration-300" aria-label="Email">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#about"
              className="glass-button px-5 sm:px-7 py-3 sm:py-4 font-medium text-sm sm:text-base hover:scale-105 transition-transform duration-300"
            >
              Explore My Work
            </a>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center gap-2 glass-button px-5 sm:px-7 py-3 sm:py-4 font-medium text-sm sm:text-base hover:scale-105 transition-transform duration-300"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
