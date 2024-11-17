import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
// import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const Banner = () => {
  return <section className="bg-secondary/10">
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-0 py-14">
      {/* BAnner image  */}
      <div className="Flex justify-center items-center">
        <motion.img 
        initial={{opacity:0 ,scale:1}} 
        whileInView={{opacity:1,scale:1}}
        transition={{type: "spring", stiffness:100 , delay:0.2}}
        src={BannerPng} alt="" className="w-[300px] md:max-w-[400px] h-full object-cover"/>
      </div>
      {/* Brand info  */}
      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
          <motion.h1
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport= {{once:true}}
          className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</motion.h1>
          <motion.p
          variants={FadeUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}>

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur incidunt ea odit perferendis a eligendi, magni voluptas mollitia commodi molestiae, rem facere at! Excepturi aut quae dignissimos hic laboriosam sunt.
          </motion.p>
          <motion.p
          variants={FadeUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quod dolorum quibusdam facere aliquid? Illum?
          </motion.p>
          {" "}
          <motion.div variants={FadeUp(1.5)}
          initial="hidden" animate="visible" className="flex justify-center md:justify-start">
            <button className="primary-btn">Learn more</button>

            </motion.div> 
        </div>
      </div>
    </div>
  </section>
};

export default Banner;
