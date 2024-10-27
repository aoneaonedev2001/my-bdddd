'use client'
import Image from 'next/image'

const Secsion3 =()=>{

    return(
      <div className='w-full mx-auto h-[844px]  bg-[#000000] pt-[40px]'>
         <h1 className='text-center text-[33px] text-[#ffff]'>お誕生日おめでとう！</h1>
          <Image 
           className='cover mx-auto pt-[10px]'
           src="/main3.png"
           width={293}  
           height={519} 
           alt='ss1'
          />
          <div className='pt-[20px] mx-auto  text-[12px] text-[#ffff] text-center'>
          <p>Wishing you a day filled with happiness, love, and all</p>
          <p>the things that bring joy to your heart. May this year </p>
          <p>bring you success, good health, and wonderful </p>
          <p>memories. Hope all your dreams come true and may </p>
          <p>you have an amazing year ahead. 🎉🎂✨ </p>
          </div>        
      </div>
    )
  }

  export default Secsion3