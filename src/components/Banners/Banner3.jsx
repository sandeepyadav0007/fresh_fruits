import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
// import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";
import { FadeLeft,  } from "../../utility/animation";
import { TbBackground } from "react-icons/tb";
const bgstyle={
  backgroundImage:`url(${BannerPng})`,
  backgroundPosition : "center",
  backgroundSize:"cover",
  backgroundRepeat : "no-repeat",
}

const Banner3 = () => {
  return (
  <section className="container mb-12 ">
    <div
    style={bgstyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-0 py-14 rounded-3xl">
     <div> 

     </div>
      {/* Brand info  */}
      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
          <motion.h1
          variants={(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport= {{once:true}}
          className="text-3xl lg:text-6xl font-bold uppercase">GET FRESH FRUITS TODAY</motion.h1>
          
          <motion.p
          variants={(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quod dolorum quibusdam facere aliquid? Illum?
          </motion.p>
          {" "}
          <motion.div variants={(1.5)}
          initial="hidden" animate="visible" className="flex justify-center md:justify-start">
            <button className="primary-btn">Order Now</button>

            </motion.div> 
        </div>
      </div>
       {/* BAnner image  */}
       
    </div>
  </section>
)};

export default Banner3;
