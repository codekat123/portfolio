import { Code2, Database, Wrench, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const techCategories = [
  {
    icon: Code2,
    title: "Backend & Core",
    items: [
      "Django 5",
      "Django REST Framework",
      "JWT Authentication (SimpleJWT)",
      "Django Channels (WebSockets)",
      "Celery & Redis (async tasks, caching)",
      "RESTful API",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: ["Docker", "Git & GitHub", "Postman", "Linux", "Swagger / OpenAPI", "Unit Testing", "NGINX", "AWS"],
  },
  {
    icon: Zap,
    title: "Programming",
    items: ["Python", "C", "OOP", "Design Patterns", "SOLID Principles"],
  },
];

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/40 hover:shadow-elevated hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-base flex items-start">
                      <span className="text-primary mr-3 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
