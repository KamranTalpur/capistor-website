import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cvData } from "../../data/cvData";
import CircuitBackground from "../../components/ui/CircuitBackground";

// Contact icons mapping
const contactIcons = {
    email: "📧",
    phone: "📱",
    location: "📍",
    website: "🌐",
    linkedin: "💼",
    github: "👨‍💻",
};

// YouTube URL extraction helper
const getYouTubeEmbedUrl = (url: string | null) => {
    if (!url) return null;
    const videoId = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : null;
};

export default function CVPage() {
    const {
        personalInfo,
        summary,
        experience,
        projects,
        awards,
        education,
        skills,
    } = cvData;

    return (
        <div className="bg-kindofwhite min-h-screen relative">
            <CircuitBackground />

            <div className="relative z-10">
                {/* Navigation */}
                <nav className="fixed top-4 left-4 z-50">
                    <Link
                        to="/"
                        className="bg-sexyblue/10 backdrop-blur-sm text-sexyblue px-4 py-2 rounded-full hover:bg-sexyblue/20 transition-all duration-300 font-domine"
                    >
                        ← Home
                    </Link>
                </nav>

                <div className="container mx-auto px-6 py-16 max-w-6xl">
                    {/* Header Section */}
                    <motion.header
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mb-8">
                            <img
                                src="/cv_assets/my_picture.png"
                                alt="Shoaib Mustafa"
                                className="w-62 h-62 rounded-full mx-auto mb-6 shadow-2xl border-4 border-sexyblue/20"
                            />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-domine font-black text-sexyblue mb-4">
                            {personalInfo.name}
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-domine text-sexyblue/80 mb-8">
                            {personalInfo.title}
                        </h2>

                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.email}</span>
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-sexyblue transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.phone}</span>
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.location}</span>
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.website}</span>
                                <a
                                    href={`http://${personalInfo.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sexyblue transition-colors"
                                >
                                    {personalInfo.website}
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.linkedin}</span>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sexyblue transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sexyblue/70">
                                <span>{contactIcons.github}</span>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sexyblue transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.header>

                    {/* Summary & Skills Section - Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Professional Summary - Left */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8">
                                Professional Summary
                            </h2>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-fit">
                                <p className="text-lg font-domine leading-relaxed" style={{ color: '#222222' }}>
                                    {summary}
                                </p>
                            </div>
                        </motion.section>

                        {/* Skills - Right */}
                        <motion.section
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8">
                                Technical Skills
                            </h2>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-fit">
                                <div className="space-y-6">
                                    {/* All Skills Mixed Together */}
                                    <div className="flex flex-wrap gap-3">
                                        {/* Programming Languages */}
                                        {skills.programming.map((skill, index) => (
                                            <span key={`prog-${index}`} className="bg-sexyblue/30 text-sexyblue px-4 py-2 rounded-full text-sm font-domine font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                        {/* Embedded Systems */}
                                        {skills.embedded.map((skill, index) => (
                                            <span key={`emb-${index}`} className="bg-sexyblue/20 text-sexyblue/80 px-4 py-2 rounded-full text-sm font-domine">
                                                {skill}
                                            </span>
                                        ))}
                                        {/* Communication Protocols */}
                                        {skills.protocols.map((skill, index) => (
                                            <span key={`proto-${index}`} className="bg-sexyblue/40 text-sexyblue px-4 py-2 rounded-full text-sm font-domine font-semibold">
                                                {skill}
                                            </span>
                                        ))}
                                        {/* Development Tools */}
                                        {skills.tools.map((skill, index) => (
                                            <span key={`tool-${index}`} className="bg-sexyblue/15 text-sexyblue/70 px-4 py-2 rounded-full text-sm font-domine">
                                                {skill}
                                            </span>
                                        ))}
                                        {/* Specialized Areas */}
                                        {skills.specialized.map((skill, index) => (
                                            <span key={`spec-${index}`} className="bg-sexyblue/35 text-sexyblue px-4 py-2 rounded-full text-sm font-domine font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Experience Section */}
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8 text-center">
                            Professional Experience
                        </h2>
                        <div className="space-y-8">
                            {experience.map((job) => (
                                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                    <div className={`grid gap-8 ${(job.images && job.images.length > 0) || job.videoUrl ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
                                        {/* Content Section */}
                                        <div className={`${(job.images && job.images.length > 0) || job.videoUrl ? 'lg:col-span-2' : 'col-span-1'}`}>
                                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-domine font-bold text-sexyblue mb-2">
                                                        {job.title}
                                                    </h3>
                                                    <div className="text-xl text-sexyblue/90 font-domine mb-2 font-semibold">
                                                        {job.company} • {job.location}
                                                    </div>
                                                    <div className="text-sexyblue/60 mb-4 font-medium">{job.duration}</div>
                                                </div>
                                                <span className="bg-sexyblue/30 text-sexyblue px-4 py-2 rounded-full text-sm font-domine font-semibold">
                                                    {job.type}
                                                </span>
                                            </div>

                                            {job.description && (
                                                <p className="font-domine mb-6 italic text-lg" style={{ color: '#222222' }}>
                                                    {job.description}
                                                </p>
                                            )}

                                            <ul className="space-y-3 mb-6">
                                                {job.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-sexyblue mt-2 font-bold">•</span>
                                                        <span className="leading-relaxed" style={{ color: '#222222' }}>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {job.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-3 py-1 rounded-full text-sm font-domine ${index % 4 === 0 ? 'bg-sexyblue/30 text-sexyblue font-medium' :
                                                            index % 4 === 1 ? 'bg-sexyblue/20 text-sexyblue/80' :
                                                                index % 4 === 2 ? 'bg-sexyblue/40 text-sexyblue font-semibold' :
                                                                    'bg-sexyblue/15 text-sexyblue/70'
                                                            }`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Media Section - Only show if images or video exist */}
                                        {((job.images && job.images.length > 0) || job.videoUrl) && (
                                            <div className="lg:col-span-1 space-y-6">
                                                {/* Video Section */}
                                                {job.videoUrl && (
                                                    <div className="bg-sexyblue/5 rounded-xl p-4">
                                                        <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Project Demo</h4>
                                                        <div className="aspect-video rounded-lg overflow-hidden">
                                                            <iframe
                                                                src={getYouTubeEmbedUrl(job.videoUrl) || ""}
                                                                title={`${job.title} Demo`}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                                className="w-full h-full"
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Images Section */}
                                                {job.images && job.images.length > 0 && (
                                                    <div className="bg-sexyblue/5 rounded-xl p-4">
                                                        <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Project Images</h4>
                                                        <div className="grid grid-cols-1 gap-3">
                                                            {job.images.map((image, index) => (
                                                                <img
                                                                    key={index}
                                                                    src={image}
                                                                    alt={`${job.title} - Image ${index + 1}`}
                                                                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Projects Section */}
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8 text-center">
                            Key Projects
                        </h2>
                        <div className="space-y-8">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                    <div className={`grid gap-8 ${(project.images && project.images.length > 0) || project.videoUrl ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
                                        {/* Content Section */}
                                        <div className={`${(project.images && project.images.length > 0) || project.videoUrl ? 'lg:col-span-2' : 'col-span-1'}`}>
                                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-domine font-bold text-sexyblue mb-2">
                                                        {project.title}
                                                    </h3>
                                                    <div className="text-xl text-sexyblue/90 font-domine mb-2 font-semibold">
                                                        {project.type}
                                                    </div>
                                                    <div className="text-sexyblue/60 mb-4 font-medium">{project.year}</div>
                                                </div>
                                            </div>

                                            {project.description && (
                                                <p className="font-domine mb-6 italic text-lg" style={{ color: '#222222' }}>
                                                    {project.description}
                                                </p>
                                            )}

                                            <ul className="space-y-3 mb-6">
                                                {project.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-sexyblue mt-2 font-bold">•</span>
                                                        <span className="leading-relaxed" style={{ color: '#222222' }}>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {project.awards && project.awards.length > 0 && (
                                                <div className="mb-6">
                                                    <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Awards:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.awards.map((award, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-yellow-400/20 text-yellow-700 px-4 py-2 rounded-full text-sm font-domine font-semibold border border-yellow-300/30"
                                                            >
                                                                🏆 {award}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mb-6">
                                                <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Technologies:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className={`px-3 py-1 rounded-full text-sm font-domine ${index % 4 === 0 ? 'bg-sexyblue/30 text-sexyblue font-medium' :
                                                                index % 4 === 1 ? 'bg-sexyblue/20 text-sexyblue/80' :
                                                                    index % 4 === 2 ? 'bg-sexyblue/40 text-sexyblue font-semibold' :
                                                                        'bg-sexyblue/15 text-sexyblue/70'
                                                                }`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {project.hackaday && (
                                                <div>
                                                    <a
                                                        href={project.hackaday}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-green-400/20 text-green-700 px-4 py-2 rounded-full text-sm font-domine font-semibold border border-green-300/30 hover:bg-green-400/30 transition-colors"
                                                    >
                                                        📰 Featured on Hackaday
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {/* Media Section - Only show if images or video exist */}
                                        {((project.images && project.images.length > 0) || project.videoUrl) && (
                                            <div className="lg:col-span-1 space-y-6">
                                                {/* Video Section for Projects */}
                                                {project.videoUrl && (
                                                    <div className="bg-sexyblue/5 rounded-xl p-4">
                                                        <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Project Demo</h4>
                                                        <div className="aspect-video rounded-lg overflow-hidden">
                                                            <iframe
                                                                src={getYouTubeEmbedUrl(project.videoUrl) || ""}
                                                                title={`${project.title} Demo`}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                                className="w-full h-full"
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Images Section for Projects */}
                                                {project.images && project.images.length > 0 && (
                                                    <div className="bg-sexyblue/5 rounded-xl p-4">
                                                        <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Project Images</h4>
                                                        <div className="grid grid-cols-1 gap-3">
                                                            {project.images.map((image, index) => (
                                                                <img
                                                                    key={index}
                                                                    src={image}
                                                                    alt={`${project.title} - Image ${index + 1}`}
                                                                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Awards Section */}
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8 text-center">
                            Awards & Recognition
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {awards.map((award, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                    <h3 className="text-xl font-domine font-bold text-sexyblue mb-3">
                                        🏆 {award.title}
                                    </h3>
                                    <div className="text-sexyblue/90 font-domine mb-2 font-semibold">{award.issuer}</div>
                                    <div className="text-sexyblue/60 text-sm mb-4 font-medium">{award.date}</div>
                                    <p className="text-sm leading-relaxed" style={{ color: '#222222' }}>{award.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-domine font-bold text-sexyblue mb-8 text-center">
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                    <div className={`grid gap-8 ${edu.images && edu.images.length > 0 ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
                                        {/* Content Section */}
                                        <div className={`${edu.images && edu.images.length > 0 ? 'lg:col-span-2' : 'col-span-1'}`}>
                                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-domine font-bold text-sexyblue mb-2">
                                                        {edu.degree}
                                                    </h3>
                                                    <div className="text-xl text-sexyblue/90 font-domine mb-2 font-semibold">
                                                        {edu.institution}
                                                    </div>
                                                    {edu.location && (
                                                        <div className="text-sexyblue/70 mb-2">{edu.location}</div>
                                                    )}
                                                    <div className="text-sexyblue/60 mb-4 font-medium">{edu.duration}</div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <span className={`px-4 py-2 rounded-full text-sm font-domine font-semibold ${edu.type === 'Degree' ? 'bg-sexyblue/30 text-sexyblue' :
                                                        edu.type === 'Certificate' ? 'bg-green-400/20 text-green-700 border border-green-300/30' :
                                                            'bg-blue-400/20 text-blue-700 border border-blue-300/30'
                                                        }`}>
                                                        {edu.type}
                                                    </span>
                                                    {edu.grade && (
                                                        <span className="bg-sexyblue/20 text-sexyblue/80 px-4 py-2 rounded-full text-sm font-domine text-center">
                                                            {edu.grade}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {edu.description && (
                                                <p className="font-domine mb-6 italic text-lg leading-relaxed" style={{ color: '#222222' }}>
                                                    {edu.description}
                                                </p>
                                            )}

                                            <ul className="space-y-3 mb-6">
                                                {edu.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-sexyblue mt-2 font-bold">•</span>
                                                        <span className="leading-relaxed" style={{ color: '#222222' }}>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {edu.skills && edu.skills.length > 0 && (
                                                <div>
                                                    <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Skills Developed:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {edu.skills.map((skill, index) => (
                                                            <span
                                                                key={index}
                                                                className={`px-3 py-1 rounded-full text-sm font-domine ${index % 4 === 0 ? 'bg-sexyblue/30 text-sexyblue font-medium' :
                                                                    index % 4 === 1 ? 'bg-sexyblue/20 text-sexyblue/80' :
                                                                        index % 4 === 2 ? 'bg-sexyblue/40 text-sexyblue font-semibold' :
                                                                            'bg-sexyblue/15 text-sexyblue/70'
                                                                    }`}
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Images Section - Only show if images exist */}
                                        {edu.images && edu.images.length > 0 && (
                                            <div className="lg:col-span-1">
                                                <div className="bg-sexyblue/5 rounded-xl p-4">
                                                    <h4 className="font-domine font-bold text-sexyblue/90 mb-3 text-lg">Documents</h4>
                                                    <div className="grid grid-cols-1 gap-3">
                                                        {edu.images.map((image, index) => (
                                                            <img
                                                                key={index}
                                                                src={image}
                                                                alt={`${edu.degree} - Document ${index + 1}`}
                                                                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>                </div>
            </div>
        </div>
    );
}
