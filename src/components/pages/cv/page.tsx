import { motion } from "framer-motion";
import { cvData } from "../../../data/cvData";

export default function CVPage() {
  const { personalInfo, summary, experience, projects, awards, education, skills } = cvData;

  const SkillBadge = ({ skill, index }: { skill: string; index: number }) => {
    const colors = [
      "bg-sexyblue/30 text-sexyblue font-medium",
      "bg-sexyblue/20 text-sexyblue/80",
      "bg-sexyblue/40 text-sexyblue font-semibold",
      "bg-sexyblue/15 text-sexyblue/70",
    ];
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-domine ${
          colors[index % colors.length]
        }`}>
        {skill}
      </span>
    );
  };

  const SectionWrapper = ({
    title,
    delay = 0,
    children,
  }: {
    title: string;
    delay?: number;
    children: React.ReactNode;
  }) => (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}>
      <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );

  const MediaGallery = ({
    images,
    videoUrl,
    title,
  }: {
    images?: string[];
    videoUrl?: string;
    title: string;
  }) => {
    const getYouTubeEmbedUrl = (url: string | null) => {
      if (!url) return null;
      const videoId = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
      );
      return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : null;
    };
    if (!images?.length && !videoUrl) return null;
    return (
      <div className="lg:col-span-1 space-y-6">
        {videoUrl && (
          <div>
            <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">
              Project Demo
            </h4>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                src={getYouTubeEmbedUrl(videoUrl) || ""}
                title={`${title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
        {images?.length > 0 && (
          <div>
            <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">
              Images
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${title} - Image ${i + 1}`}
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const ExperienceCard = ({ data }: { data: any }) => (
    <div className="bg-kindofwhite rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-6">
      <div
        className={`grid gap-8 ${
          data.images?.length || data.videoUrl
            ? "lg:grid-cols-3"
            : "grid-cols-1"
        }`}>
        <div
          className={`space-y-4 ${
            data.images?.length || data.videoUrl
              ? "lg:col-span-2"
              : "col-span-1"
          }`}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-domine font-bold text-sexyblue">
                {data.title || data.degree}
              </h3>
              {data.company && (
                <div className="text-lg text-sexyblue/90 font-domine font-semibold">
                  {data.company} • {data.location}
                </div>
              )}
              {data.institution && (
                <div className="text-lg text-sexyblue/90 font-domine font-semibold">
                  {data.institution}
                </div>
              )}
              {data.duration && (
                <div className="text-black text-sm font-medium">
                  {data.duration}
                </div>
              )}
            </div>
            {data.type && (
              <span className="bg-sexyblue/20 text-sexyblue px-4 py-1.5 rounded-full text-sm font-domine font-semibold">
                {data.type}
              </span>
            )}
          </div>
          {data.description && (
            <p className="font-domine italic text-black text-base leading-relaxed">
              {data.description}
            </p>
          )}
          {data.achievements?.length > 0 && (
            <ul className="space-y-3">
              {data.achievements.map((a: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sexyblue mt-2 font-bold">•</span>
                  <span className="leading-relaxed text-black">{a}</span>
                </li>
              ))}
            </ul>
          )}
          {data.skills?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {data.skills.map((s: string, i: number) => (
                <SkillBadge key={i} skill={s} index={i} />
              ))}
            </div>
          )}
        </div>
        <MediaGallery
          images={data.images}
          videoUrl={data.videoUrl}
          title={data.title || data.degree}
        />
      </div>
    </div>
  );

  const AwardCard = ({ award }: { award: any }) => (
    <div className="bg-kindofwhite rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2">
      <h3 className="text-xl font-domine font-bold text-sexyblue">
        🏆 {award.title}
      </h3>
      <div className="text-sexyblue/90 font-domine font-semibold">
        {award.issuer}
      </div>
      <div className="text-black text-sm font-medium">{award.date}</div>
      <p className="text-sm leading-relaxed text-black">{award.description}</p>
    </div>
  );

  const contactIcons = {
    email: "📧",
    phone: "📱",
    location: "📍",
    website: "🌐",
    linkedin: "💼",
    github: "👨‍💻",
  };

  return (
    <div className="bg-kindofwhite min-h-screen relative font-domine">
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16 max-w-6xl space-y-20">
          <motion.header
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <img
              src="/cv_assets/my_picture.png"
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-sexyblue/20"
            />
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-black text-sexyblue">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-sexyblue/80">
                {personalInfo.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-black">
              {Object.entries(contactIcons).map(([key, icon]) => {
                const value = (personalInfo as any)[key];
                if (!value) return null;
                return (
                  <div key={key} className="flex items-center justify-center gap-2">
                    <span>{icon}</span>
                    {key === "email" ? (
                      <a href={`mailto:${value}`} className="hover:text-sexyblue transition-colors">
                        {value}
                      </a>
                    ) : key === "website" ? (
                      <a href={`http://${value}`} target="_blank" rel="noopener noreferrer" className="hover:text-sexyblue transition-colors">
                        {value}
                      </a>
                    ) : key === "linkedin" || key === "github" ? (
                      <a href={value} target="_blank" rel="noopener noreferrer" className="hover:text-sexyblue transition-colors">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.header>

          <SectionWrapper title="Professional Summary" delay={0.2}>
            <p className="text-lg leading-relaxed text-black">{summary}</p>
          </SectionWrapper>

          <SectionWrapper title="Technical Skills" delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {Object.values(skills)
                .flat()
                .map((s, i) => (
                  <SkillBadge key={i} skill={s} index={i} />
                ))}
            </div>
          </SectionWrapper>

          <SectionWrapper title="Professional Experience" delay={0.4}>
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} data={exp} />
            ))}
          </SectionWrapper>

          <SectionWrapper title="Key Projects" delay={0.5}>
            {projects.map((proj) => (
              <ExperienceCard key={proj.id} data={proj} />
            ))}
          </SectionWrapper>

          <SectionWrapper title="Awards & Recognition" delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((a, i) => (
                <AwardCard key={i} award={a} />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper title="Education" delay={0.7}>
            {education.map((edu) => (
              <ExperienceCard key={edu.id} data={edu} />
            ))}
          </SectionWrapper>

          <div className="text-center mt-10">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-sexyblue text-kindofwhite rounded-lg hover:bg-sexyblue/80 transition-colors duration-200">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
