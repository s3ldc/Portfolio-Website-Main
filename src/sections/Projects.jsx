import { useEffect, useState, useRef, useMemo } from "react"

import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.png";
import img2 from "../assets/img2.png";
import photo2 from "../assets/photo2.png";
import img3 from "../assets/img3.png";
import photo3 from "../assets/photo3.png";

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

  return(
    <section id="projects" className="relative text-white">

    </section>
  )
}