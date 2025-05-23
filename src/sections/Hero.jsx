import React from "react";
import { words } from "../constants/index.js";
import Button from "../components/button.jsx";
import Lanyard from "../components/Lanyard/Lanyard.jsx";
import { Canvas } from "@react-three/fiber";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { FlipWords } from "../components/FlipWords.jsx";
import { motion } from "framer-motion";
import Background from "../components/Background.jsx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Hero = () => {
  const kata = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
       { 
        y: 50 ,
        opacity: 0,

       },
       {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut", 
       }
      )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <Background />
      ⁡⁢⁣⁢ {/* BACKGROUND Desktop */}⁡
      <div className="absolute top-0 left-0 z-10 hidden custom-lg">
        <img src="/images/bg.png" alt="background" />
      </div>
      
      {/* ⁡⁢⁣⁢Mobile View⁡ */}
      <div className="z-20 mt-20 text-center md:h-[45vh] lg:h-[50vh] md:mt-30 h-[65vh] rounded-3xl bg-clip-text hidden max-[1280px]:block relative">
        <div className="flex flex-col space-y-6 relative z-20">
          <motion.p
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mt-40 md:mt-15"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Hi, I'm Will
          </motion.p>

          <div>
            <motion.p
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              I am Capable of Building
            </motion.p>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              <FlipWords
                words={kata}
                className="font-bold text-2xl sm:text-4xl md:text-6xl text-[#D3E674]"
              />
            </motion.div>

            <motion.p
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}
            >
              Web Applications
            </motion.p>
          </div>
        </div>
      </div>
      
      ⁡⁢⁣⁢ {/* DESKTOP VIEW */}⁡
      <div className="hero-layout hidden min-[1280px]:flex flex-col justify-center items-center ">
        {/* Left side hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 custom-ml">
          <div className="flex flex-col gap-7 ">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide text-[#D3E674]">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Project</h1>
              <h1>that Deliver Result</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none xl:left-12">
              Hi, I'm <span className="text-white">Will</span>, a passionate
              developer based in Medan, Indonesia.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 xl:left-12"
              id="button"
              text="See my Work"
            />
          </div>
          
        </header>
        ⁡⁢⁣⁢{/* Right Side Landyard*/}⁡
        <div className="hero-3d-layout hidden custom-lg xl:left-129 custom-leftLandyard">
          <Lanyard position={[0, 0, 12.6]} gravity={[0, -46.6, 0]} />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
