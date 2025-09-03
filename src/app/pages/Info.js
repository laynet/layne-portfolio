"use client"
import React from 'react'
// import mailIcon from '../images/Mail.png';
// import linkinedinIconBtn from '../images/linkedin.png';
import Image from 'next/image';
import Button from '../components/ui/Button';


const Info = () => {
    function hireMe(){
        console.log("!!!!!!!!!!!!!!!!!")
        // alert("aroaeirnboiaenrboinbr");
    }
  return (
    <div className='flex p-10'>
        <Image 
        src="/images/layne.jpeg" 
        alt="picture of me" 
        sizes='200px'
        width={200} 
        height={200}
        className='rounded-full me-8'/>
        <div className="flex flex-col justify-center">
            <h1>Layne Taylor</h1>
            <h4>Full Stack Web Developer</h4>
  
            <p>I&apos;m a self-taught Software Engineer with a BA degree and Full-Stack Development bootcamp completion in 2020. Experienced in building high-performing web applications for Small Businesses in E-Commerce, Alternative Medicine, and Finance. At Breakout Studio, I developed Tryp Therapeutics’ digital presence from 0 to 1, earning the Graphic Design USA Digital Design Award (2022). I&apos;m currently upskilling at Formation, a competitive and highly selective engineering fellowship working alongside software engineers from top companies to learn best engineering practices.</p>
 <div className="button">
        <Button props={"Hire Me"} onClick={()=>hireMe}/>
        </div>
        </div>
        {/* <div className="flex">
          <a  href="mailto:layneingramtaylor@gmail.com" className="btn email-btn flex"><img src={mailIcon} alt=""/>Email</a>
          <a href="https://www.linkedin.com/in/layne-taylor/" target="blank" className="btn linkedin-btn flex"><img src={linkinedinIconBtn} alt=""/>Linkedin</a>
        </div> */}
        
    </div>
  )
}

export default Info
