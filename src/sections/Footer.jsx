import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const socials = [
  {
    Icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/s3l__dc?igsh=b210ZnkzY21jY3lk",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sunil-biriya/",
  },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/s3ldc" },
];


const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Footer(){
  return(
    <footer className="relative overflow-hidden bg-black">

    </footer>
  )
}