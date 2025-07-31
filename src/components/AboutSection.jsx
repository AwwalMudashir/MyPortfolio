import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 py-16">

  {/* Image */}
  <motion.div
    className="w-full md:w-2/5 h-150 md:h-120 bg-gray-200 rounded-2xl overflow-hidden border-4 border-[#3432c7] shadow-[0_0_30px_rgba(52,50,199,0.4)]"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <img
      src="/MOI.jpg"
      alt="Awwal"
      className="w-full h-full object-fill"
    />
  </motion.div>

  {/* Text Content */}
  <motion.div
    className="w-full md:w-3/5 text-left"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000c6f]">
      About Me
    </h2>
    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
  I'm Awwal — a software engineer passionate about building intelligent, scalable, and user-focused digital solutions. From AI-powered logic to cloud-backed infrastructure, I bring ideas to life with precision and creativity.
</p>
<p className="text-gray-600 text-lg leading-relaxed">
  I work with tools like React, Next.js, Tailwind CSS, Node.js, Spring Boot, Flutter, and Firebase. I'm also exploring AI/ML, cloud architecture, and building smart apps that truly perform. In short: I engineer clean solutions that make impact.
</p>
  </motion.div>

</div>

    </section>
  );
}
