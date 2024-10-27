'use client'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useState } from 'react';

const Secsion2 =()=>{
  const [GG,setGG]=useState(false);
    return(
      <div className='w-full h-[844px] relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#000000]'>
          <motion.img
           className='cover absolute top-[236px]  left-[0px] z-20'
           src="/s1.png"
           width={390}  
           height={410} 
           alt='ss1'
           initial={{ opacity: 0, y: 75 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 2.25 }}
          />
          <motion.img
           className='cover absolute top-[57px] left-[20px] z-10'
           src="/hbd.png"
           width={289}  
           height={56} 
           alt='ss2'
           initial={{ opacity: 0, x: -75 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7, delay: 0.25 }}
          />
           <motion.img
           className='cover absolute top-[88px] left-[20px] z-10'
           src="/vanisa.png"
           width={240}  
           height={30} 
           alt='ss2'
           initial={{ opacity: 0, x: -75 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7, delay: 1 }}
          />
          <motion.img 
           className='cover absolute top-[160px] right-[13px] z-10'
           src="/22y.png"
           width={170}  
           height={30} 
           alt='ss2'
           initial={{ opacity: 0, x: 75 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7, delay: 1.5 }}
          />
          <motion.img
           className='cover absolute top-[272px] right-[-26px] z-10'
           src="/btyler.png"
           width={190}  
           height={213} 
           alt='ss2'
           initial={{ opacity: 0, y: 75 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 3}}
          />
          {!GG && 
          <motion.img
          onClick={()=>setGG(true)}
           className='cover absolute top-[70%] right-[-1%]   z-40'
           src="/alert2.png"
           width={380}  
           height={76} 
           alt='alert'
           
           initial={{ opacity: 0,}}
  animate={{
    opacity: 1, x: [0, 10, -10, 10, -10, 0], // สร้างการสั่นในแนวนอน
  }}
  transition={{
    delay: 0.5,
    delay: 5,
    duration: 2, // ระยะเวลาของการสั่น
    repeat: Infinity, // ทำให้มันทำงานเป็น loop
    repeatType: 'loop', // ทำซ้ำในลูป
  }}
          />
          }
          

          
      </div>
    )
  }

  export default Secsion2