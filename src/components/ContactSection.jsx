import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fcz0dgb", // replace with your EmailJS service ID
        "template_74zmldi", // replace with your EmailJS template ID
        form.current,
        "P5CT7GLQudV-3PmGn" // replace with your EmailJS public key
      )
      .then(
        () => setSent(true),
        (error) => console.log(error.text)
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-[#1a1a40] to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center justify-between py-20"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow">Let’s Build Something Together</h2>
          <p className="text-gray-300 text-lg">
            Got an idea, a project, or just want to say hi? Feel free to drop a message — I’ll respond as soon as I can.
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg text-white/80">
              <Mail className="w-5 h-5 text-[#F4A261]" /> awwalmudashir@gmail.com
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/AwwalMudashir" target="_blank" rel="noreferrer">
                <Github className="w-6 h-6 hover:text-[#F4A261]" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6 hover:text-[#F4A261]" />
              </a>
              <a href="https://x.com/AwwalM6697" target="_blank" rel="noreferrer">
                <Twitter className="w-6 h-6 hover:text-[#F4A261]" />
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex-1 bg-[#12123f] p-8 rounded-2xl shadow-lg space-y-6 w-full">
          <div>
            <label className="text-white block mb-1">Your Name</label>
            <input name="user_name" required className="w-full p-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#F4A261]" />
          </div>

          <div>
            <label className="text-white block mb-1">Your Email</label>
            <input type="email" name="user_email" required className="w-full p-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#F4A261]" />
          </div>

          <div>
            <label className="text-white block mb-1">Message</label>
            <textarea name="message" rows="5" required className="w-full p-3 bg-black text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#F4A261]" />
          </div>

          <button type="submit" className="bg-[#F4A261] cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
            {sent ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
