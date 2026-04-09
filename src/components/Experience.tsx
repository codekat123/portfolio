import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TimelineItem {
  title: string;
  organization: string;
  description: string[];
  icon: "work" | "education" | "award";
}

const timelineData: TimelineItem[] = [
  {
    title: "Bachelor's in Management Information Systems",
    organization: "Mansoura Higher Institute",
    description: [
      "Studied core subjects including databases, software engineering, and information systems.",
    ],
    icon: "education",
  },
  {
    title: "Django Backend Circle – Top Member",
    organization: "CIS Team MU",
    description: [
      "Recognized as a Top Member for outstanding performance and dedication in the Django Backend circle.",
      "Collaborated with backend team members to build and debug APIs and backend services.",
    ],
    icon: "award",
  },
  {
    title: "AI & Software Competition",
    organization: "DIGITOPIA – MCIT (Ministry of Communications & Information Technology)",
    description: [
      "Collaborated with cross-functional team members during a competitive tech environment.",
      "Gained experience working under pressure while meeting deadlines and shared objectives.",
      "Enhanced ability to contribute in a corporate-style team setting.",
    ],
    icon: "work",
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
};

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {timelineData.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Desktop layout */}
                <div className="hidden md:flex w-full items-start">
                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <TimelineCard item={item} />
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30 shrink-0 -ml-6">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="w-1/2 pl-12" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12" />
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-accent shadow-lg shadow-accent/30 shrink-0 -ml-6">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="w-1/2 pl-12">
                        <TimelineCard item={item} />
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden items-start w-full">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30 shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="ml-6 flex-1">
                    <TimelineCard item={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item }: { item: TimelineItem }) => (
  <div className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
      {item.title}
    </h3>
    <p className="text-sm font-medium text-primary mb-3">{item.organization}</p>
    <ul className="space-y-1.5">
      {item.description.map((desc, i) => (
        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
          <span className="text-primary mt-1.5 shrink-0">•</span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
