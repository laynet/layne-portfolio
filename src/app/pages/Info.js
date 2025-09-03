import React from 'react'
// import mailIcon from '../images/Mail.png';
// import linkinedinIconBtn from '../images/linkedin.png';
import Image from 'next/image';


const Info = () => {
  return (
    <div>
        <Image 
        src="/images/layne.jpeg" 
        alt="picture of me" 
        sizes='300px'
        width={300} 
        height={300}
        className='rounded-full'/>
        
        <h1>Layne Taylor</h1>
        <h4>Full Stack Web Developer</h4>
        {/* <div className="flex">
          <a  href="mailto:layneingramtaylor@gmail.com" className="btn email-btn flex"><img src={mailIcon} alt=""/>Email</a>
          <a href="https://www.linkedin.com/in/layne-taylor/" target="blank" className="btn linkedin-btn flex"><img src={linkinedinIconBtn} alt=""/>Linkedin</a>
        </div> */}
        
    </div>
  )
}

export default Info
