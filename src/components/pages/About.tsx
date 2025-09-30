import { motion } from "framer-motion";
import CircuitBackground from "../ui/CircuitBackground";
import YouTubeCard from "./cards/YoutubeCard";
import LinkedInCard from "./cards/LinkedInCard";
import GitHubCard from "./cards/GitHubCard";

export default function About() {
  return (
    <section className="min-h-screen relative">
      <CircuitBackground />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="flex h-full justify-center gap-10 relative">
          <div className="w-3/2 pr-72 flex flex-col justify-start text-center">
            <motion.h1
              className="text-4xl lg:text-5xl text-sexyblue font-domine mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              About the Founder
            </motion.h1>
            <motion.div
              className="bg-kindofwhite p-6 rounded-2xl border-2 border-capistor-300/20 max-w-md shadow-lg"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <motion.p
                className="text-lg text-sexyblue/90 font-fransisco font-normal leading-8 text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                Shoaib Mustafa is the visionary behind this innovative venture,
                blending technology and design to create impactful solutions.
                With a passion for accessibility and user experience, he leads
                with expertise and creativity.
              </motion.p>
            </motion.div>
          </div>
          <div className="flex items-center justify-center border-capistor-300/20 gap-6 lg:gap-8">
            <LinkedInCard
              profileUrl={
                "https://www.linkedin.com/in/shoaib-mustafa-794a0215a/?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=ae"
              }
            />
            <GitHubCard profileUrl={"https://github.com/manhoosbilli1"} />
            <YouTubeCard channelUrl={"https://www.youtube.com/@capistor1"} />
          </div>
        </div>
      </div>
    </section>
  );
}