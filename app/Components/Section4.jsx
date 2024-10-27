"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Secsion4 = () => {
  const [DD, setDD] = useState(false);
  const audioRef = useRef(null); // สร้าง reference สำหรับ audio element

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // เล่นเสียงเมื่อ DD เป็น true
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // หยุดเล่นเสียงเมื่อ DD เป็น false
    }
  };

  return (
    <div
      className="w-full mx-auto h-[844px] "
      style={
        DD
          ? {
              backgroundImage: `url(/call.png)`,
              backgroundSize: "cover",
            }
          : {
              backgroundImage: `url(/tylerbg.png)`,
              backgroundSize: "cover",
            }
      }
    >

     <audio ref={audioRef} src="/drake-hbd.mp3" />

      {DD ? null : (
        <motion.img
          onClick={() => {
            setDD(true);
            playAudio(); // เล่นเสียงเมื่อคลิก
          }}
          className="cover mx-auto pt-[20px]"
          src="/drake.png"
          width={293}
          height={519}
          alt="ss1"
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 600, delay: 2.25 }}
        />
      )}

      {DD ? (
        <Image
        onClick={() => {
          setDD(false);
          pauseAudio(); // หยุดเล่นเสียงเมื่อคลิก
        }}
          className="cover mx-auto pt-[20px] relative bottom-[-636px]"
          src="/endcall.png"
          width={80}
          height={80}
          alt="ss1"
        />
      ) : null}
    </div>
  );
};

export default Secsion4;
