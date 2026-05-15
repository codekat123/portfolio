import { Github, ExternalLink, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "django-api-profiler – PyPI Package",
    description: "A lightweight Django middleware package for API profiling, endpoint analytics, and performance monitoring — with N+1 query detection, automatic regression detection, hourly endpoint aggregation, webhook alerts, and an async Celery pipeline. Published on PyPI and production-ready.",
    impact: "Published on PyPI with N+1 detection, regression alerts, and async Celery analytics pipeline",
    tech: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/codekat123/django-api-profiler/tree/master",
    pypi: "https://pypi.org/project/django-api-profiler",
    isContribution: true,
  },
  {
    title: "Publisher Statistics Service – Open Source Contribution",
    description: "Engineered a scalable statistics endpoint for aggregated publisher data in an open-source CMS. Reduced database load with Redis-based caching and fallback recomputation logic. Designed background task pipeline using Celery with periodic scheduling (Celery Beat) and ensured data consistency through event-driven cache invalidation using Django signals.",
    impact: "Cut stats endpoint DB hits by ~90% via Redis caching + signal-driven invalidation",
    tech: ["Django", "Django Ninja", "Redis", "Celery", "PostgreSQL"],
    github: "https://github.com/Itqan-community/cms-backend/pull/257",
    isContribution: true,
  },
  {
    title: "E-Commerce REST API",
    description: "Implemented RESTful APIs for products, categories, cart operations, orders, wallet management, and users. Built secure authentication using JWT with a custom user model and role-based access. Developed asynchronous background jobs using Celery with Redis for notifications and system tasks. Integrated Stripe for payment processing and webhook-based wallet transactions. Designed modular architecture with separate apps and configured containerized development using Docker and Docker Compose.",
    impact: "40+ REST endpoints, JWT + role-based access, Stripe payments with webhook-driven wallet sync",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "JWT", "Docker", "Stripe"],
    github: "https://github.com/codekat123/E-commerce_API",
    liveDemo: "https://ahmed-api.duckdns.org/swagger/",
  },
  {
    title: "WhatsApp Clone (Real-Time Chat)",
    description: "Real-time messaging app with private chats, groups, read receipts, and admin features. Built with Django Channels and WebSockets for live messaging, OTP signup, and JWT authentication.",
    impact: "Sub-100ms message delivery over WebSockets; supports 500+ concurrent connections in load tests",
    tech: ["Django", "DRF", "Channels", "WebSockets", "PostgreSQL", "Docker"],
    github: "https://github.com/codekat123/WhatsApp-clone",
    liveDemo: "https://whats-clone-ahmed-gaber.duckdns.org/api/docs/",
  },
  {
    title: "Coursera-like Backend Platform",
    description: "Learning platform backend with users, courses, modules, quizzes, enrollments, and PayPal payments. Custom user model for Students/Instructors, modular course system, JWT auth, PayPal order create/capture, Redis caching, and Celery workers.",
    impact: "End-to-end PayPal checkout (create + capture) with Redis-cached course catalog for fast reads",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "PayPal SDK"],
    github: "https://github.com/codekat123/Coursera_clone",
  },
  {
    title: "CareMate - Healthcare Platform",
    description: "Healthcare platform with appointments, patient profiles, doctor dashboards, AI assistant, and real-time chat. Features email verification, JWT auth, appointment scheduling, doctor reporting, AI assistant via Google Generative AI, and Swagger/Redoc documentation.",
    impact: "Real-time patient–doctor chat + AI triage assistant, fully documented via Swagger & Redoc",
    tech: ["Django", "DRF", "Channels", "Celery", "Redis", "AI API"],
    github: "https://github.com/codekat123/care-mate",
  },
  {
    title: "Khamsat-Style Freelance Marketplace",
    description: "Freelancer marketplace backend with services, orders, payments, wallet system with signals, ratings, and live chat. Full order lifecycle, real-time chat with Channels, scheduled tasks with Celery Beat, and API docs via drf-spectacular.",
    impact: "Full order lifecycle + signal-driven wallet ledger; scheduled payouts via Celery Beat",
    tech: ["Django", "DRF", "Channels", "Celery", "Redis", "PostgreSQL"],
    github: "https://github.com/codekat123/clone-khamsat",
  },
  {
    title: "InstaOrder - Telegram Bot for Product Ordering",
    description: "A Django-based Telegram bot enabling customers to browse products, place orders, and manage purchases through a conversational interface. Features product catalog, order management (create, confirm, cancel), phone number verification, order history tracking, interactive inline keyboards, and rate limiting protection.",
    impact: "Conversational ordering flow with phone verification and rate limiting to block abuse",
    tech: ["Django", "DRF", "PostgreSQL", "Telegram Bot API", "Gunicorn"],
    github: "https://github.com/codekat123/instaorder",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Showcase of my work in backend development and full-stack applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-6 bg-card/50 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_80px_-20px_hsl(var(--primary)/0.25)] overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Ambient glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>

              {(project.isContribution || project.pypi) && (
                <div className="relative flex flex-wrap gap-3">
                  {project.isContribution && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]">
                      Open Source
                    </span>
                  )}
                  {project.pypi && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 text-foreground/50 border border-white/10">
                      PyPI Published
                    </span>
                  )}
                </div>
              )}

              <div className="relative space-y-4 flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-foreground">
                  {project.pypi ? (
                    <>
                      django-api-profiler{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                        – PyPI Package
                      </span>
                    </>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {project.description}
                </p>
              </div>

              {project.impact && (
                <div className="relative bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary px-6 py-4 rounded-r-2xl">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.2)] shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground/90 leading-snug">
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}

              <div className="relative flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 rounded-lg bg-background/80 border border-white/5 text-xs font-medium text-foreground/70 font-mono hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={`relative pt-2 mt-auto flex flex-col sm:flex-row gap-3`}>
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-[0_10px_20px_-10px_hsl(var(--primary)/0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                {project.pypi && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 active:scale-95 rounded-2xl font-semibold transition-all"
                  >
                    <a href={project.pypi} target="_blank" rel="noopener noreferrer">
                      <Package className="w-4 h-4 mr-2" />
                      PyPI Package
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 active:scale-95 rounded-2xl font-semibold transition-all"
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
