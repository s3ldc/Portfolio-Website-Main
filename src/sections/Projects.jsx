import { useEffect, useState, useRef, useMemo } from "react"

import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.png";
import img2 from "../assets/img2.png";
import photo2 from "../assets/photo2.png";
import img3 from "../assets/img3.png";
import photo3 from "../assets/photo3.png";
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from "framer-motion";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query])
  return isMobile;
}

export default function Projects(){
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(() => [
    {
      title: "Tumor Detection",
      link: "https://github.com/s3ldc/BrainTumorDetection",
      bgColor: "#0B2F3A",
      image: isMobile ? photo1 : img1
    },
    {
      title: "Student Management",
      link: "https://github.com/s3ldc/StudentManagementSystem",
      bgColor: "#0F172A",
      image: isMobile ? photo2 : img2
    },{
      title: "Analysis Dashboard",
      link: "https://github.com/s3ldc/Road-Accident-Analysis",
      bgColor: "#1E293B",
      image: isMobile ? photo3 : img3
    },
  ],
  [isMobile]
);

const {scrollYProgress} = useScroll({
  target: sceneRef,
  offset: ["start start", "end end"]
})
const thresholds = projects.map((_,i) => (i+1)/projects.length);
const [activeIndex, setActiveIndex] = useState(0);

useMotionValueEvent(scrollYProgress, "change", (v) => {
  const idx = thresholds.findIndex((t) => v <= t);
  setActiveIndex(idx === -1 ? thresholds.length -1 : idx)
});

const activeProject = projects[activeIndex];

  return(
    <section id="projects"
    ref={sceneRef}
    className="relative text-white"
    style={{
      height: `${100*projects.length}vh`,
      backgroundColor: activeProject.bgColor,
      transition: "background-color 400ms ease"
    }}
    >

    <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

      <h2 className={`text-3xl font-semibold z-10 text-center ${
        isMobile ? "mt-4" : "mt-8"
        }`}>
        My Work
      </h2>

      <div className={`relative w-full flex-1 flex items-center justify-center ${
        isMobile ? "-mt-4" : ""
        }`}>
        {projects.map((project, idx) => (
          <div key={project.title}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            activeIndex === idx ? "opacity:100 z-20" : "opacity-0 z-0 sm:z-10"
            }`}
            style={{width: '85%', maxWidth: '1200px'}}
          >
            <AnimatePresence mode="wait">
              {activeIndex === idx && (
                <motion.h3>
                    {project.title}
                </motion.h3>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </div>

    </section>
  )
}