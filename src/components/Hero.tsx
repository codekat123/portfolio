import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Photo */}
        <div className={`mb-8 transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img 
              src={profilePhoto} 
              alt="Ahmed Gaber" 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </div>

        
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 tracking-tight transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Ahmed Gaber
          </span>
        </h1>
        
        <h2 className={`text-2xl md:text-4xl text-foreground/90 mb-8 font-light transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          Backend Developer <span className="text-primary">(Python | Django | DRF)</span>
        </h2>
        
        <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          Specializing in building RESTful APIs, authentication systems, real-time features with WebSockets, and asynchronous task processing. Strong understanding of relational databases and clean backend architecture.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-10 py-7 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
          >
            Get in Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-10 py-7 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
          >
            <a href={`${import.meta.env.BASE_URL}Ahmed_Gaber_Backend_Engineer.pdf`} download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        <div className={`flex gap-6 justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
          <a
            href="https://github.com/codekat123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/40 bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-medium"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-gaber-509b88359"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/40 bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-medium"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
