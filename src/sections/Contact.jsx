import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData((p) => ({...p, [name] : value}));
    if(errors[name]) setErrors((p) => ({...p, [name] : ""}))
  }

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach((f) => !formData[f].trim() && (newErrors[f] = "Fill this field"));
    if(formData.service !== "Other" && !formData.budget.trim())
      newErrors.budget = "Fill this field";
  setErrors(newErrors);
  return !Object.keys(newErrors).length;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    setStatus("Sending...");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name : formData.name,
          reply_to : formData.email,
        },
        PUBLIC_KEY
      );
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      })
    } catch (error) {
      console.error("EmailJS Error: ", error);
      setStatus("Failed to send message. Please try again later.");
    }
  }

  return(
    <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <ParticlesBackground/>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div className="w-full md:w-1/2 flex justify-center"
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6}}
        >
          <motion.img src={Astra} alt="Contact"
          className="w-72 md:w-140 rounded-2xl shadow-lg object-cover select-none pointer-events-none"
          animate={{y: [0,-10,0]}}
          transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
          />
        </motion.div>

      </div>
    </section>
  )
}