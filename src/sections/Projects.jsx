import { useEffect, useState, useRef, useMemo } from "react"

import img1 from "../assets/img1.JPG";
import photo1 from "../assets/photo1.JPG";

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
      title: "Project1",
      link: "hhwd",
      bgColor: "#0d4d3d",
      image: isMobile ? photo1 : img1
    }
  ])

  return(
    <section id="projects" className="relative text-white">

    </section>
  )
}