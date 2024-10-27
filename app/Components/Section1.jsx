'use client'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useState } from 'react';
const Secsion1 =({setHH})=>{
   
   
   
    return(
      <div className='w-full h-[844px] relative overflow-hidden'>
          <Image 
           className='cover absolute top-[236px]  right-[31px] z-20'
           src="/s0.png"
           width={320}  
           height={520} 
           alt='ss1'
          />
          <motion.img
      className='cover absolute top-[332px] right-[-26px] z-10'
      src="/s2.png"
      width={220}
      height={213}
      alt='ss2'
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 2.25 }}
    />
          <motion.img 
           className='cover absolute bottom-[5px] right-[0px] z-30'
           src="/s4.png"
           width={150}  
           height={172} 
           alt='ss4'
           initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600,delay: 3.25 }}
          />
          <motion.img 
           className='cover absolute bottom-[5px] left-[0px] z-30'
           src="/s5.png"
           width={149}  
           height={202} 
           alt='ss5'
           initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600,delay: 3.25 }}
          />
          <motion.img 
           className='cover absolute top-[73px] right-[0px] z-30'
           src="/s6.png"
           width={170}  
           height={223} 
           alt='ss6'
           initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600,delay: 3.25 }}
          />
          <motion.img 
           className='cover absolute top-[241px] left-[-5px] z-20'
           src="/s7.png"
           width={120}  
           height={190} 
           alt='ss7'
           initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600,delay: 3.25 }}
          />
          <motion.img 
           className='cover absolute top-[0px]  z-10'
           src="/s8.png"
           width={340}  
           height={301} 
           alt='ss8'
           initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 600,delay: 3.25 }}
          />






         <div onClick={()=>setHH(true)}>
          
          <motion.img 
           className='cover absolute top-[44%] right-[33%]   z-30'
           src="/alert.png"
           width={176}  
           height={76} 
           alt='alert'
           initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.25 }}
          />
           <motion.img 
           className='cover absolute top-[47%] right-[30%]   z-40'
           src="/alert.png"
           width={176}  
           height={76} 
           alt='alert'
           initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.75   }}
          />
           <motion.img 
           
           className='cover absolute top-[50%] right-[27%]   z-50'
           src="/alert.png"
           width={176}  
           height={76} 
           alt='alert'
           initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay:  5.25 }}
          />
          </div>
          
          
      </div>
    )
  }

  export default Secsion1