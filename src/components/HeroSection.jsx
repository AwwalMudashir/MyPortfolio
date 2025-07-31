import React from "react";
import BlurText from "./animations/BlurText";
import { motion } from "framer-motion";

const HeroSection = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6">
      {/* <h1 className=""> */}
      <BlurText
        text="Hey, I’m Awwal"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl md:text-6xl font-heading text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] mb-4"
      />
      {/* </h1> */}
      <motion.p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        A passionate Full-stack engineer blending AI, cloud, and code to power the future.
      </motion.p>
      <motion.button className="cursor-pointer mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
          <a href="#projects">
        View My Work

          </a>
      </motion.button>
    </section>
  );
};

export default HeroSection;
