import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiFlask } from "react-icons/si";

export default function Skills(){

const skills = [
  {icon: <FaPython />, name:'Python'},
  {icon: <FaReact />, name:'React'},
  {icon: <RiTailwindCssFill />, name:'TailWind CSS'},
  {icon: <SiMysql />, name:'MySQL'},
  {icon: <IoLogoJavascript />, name:'JavaScript'},
  {icon: <SiNumpy />, name:'Numpy'},
  {icon: <SiTensorflow />, name:'Tensorflow'},
  {icon: <RiSupabaseFill />, name:'Supabase'},
  {icon: <FaGitAlt />, name:'Git'},
  {icon: <FaWordpress />, name:'Wordpress'},
  {icon: <SiFlask />, name:'Flask'},
]

  return(
    <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">

    </section>
  )
}