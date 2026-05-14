import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation(0.1);
  return <section className="py-32 px-6 relative" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-12 shadow-elevated hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-1">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Backend developer working with{' '}
            <span className="text-primary font-semibold">Python</span>,{' '}
            <span className="text-primary font-semibold">Django</span>, and{' '}
            <span className="text-primary font-semibold">Django REST Framework</span>{' '}
            — building RESTful APIs, authentication flows, and real-time features that hold up under pressure.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            My stack day-to-day:{' '}
            <span className="text-primary font-semibold">Django Channels</span>{' '}for WebSockets,{' '}
            <span className="text-primary font-semibold">Celery & Redis</span>{' '}for async tasks and caching,{' '}
            <span className="text-primary font-semibold">JWT</span>{' '}for auth, and{' '}
            <span className="text-primary font-semibold">Docker</span>{' '}to make sure it runs the same everywhere. I care about the parts most people skip — clean architecture, sensible database design, and the small decisions that keep a backend maintainable long after it ships.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Outside of work I contribute to open source and build side projects to stay sharp. Recently published a{' '}
            <span className="text-primary font-semibold">Django observability package on PyPI</span>
            {' '}— middleware-based request instrumentation, SQL query tracking, and N+1 detection, because production blindspots bother me more than they should.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I enjoy the craft. The closer I get to the details, the more interesting it gets.
          </p>
        </div>
      </div>
    </section>;
};
export default About;