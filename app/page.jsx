'use client'
import React, { useEffect, useState } from 'react'

import Secsion1 from './Components/Section1.jsx'
import Secsion2 from './Components/Section2.jsx'
import Secsion3 from './Components/Section3.jsx'
import Secsion4 from './Components/Section4.jsx'

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [HH,setHH]=useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className='w-ful max-w-[440px] mx-auto border-[1px] h-screen scroll-smooth'>
           {HH?
           <>
           <Secsion2/>
           <Secsion3/>
           <Secsion4/>
           </>
           :<Secsion1 setHH={setHH}/>} 
           
          
          
    </div>
  )
}





export default Page