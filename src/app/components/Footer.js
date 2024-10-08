import "./Footer.css"
import React from 'react';
import Link from "next/link"
import Image from "next/image"
import instagramIcon from "../images/instagram.svg"
import linkedInIcon from "../images/linkedin.svg"
import githubIcon from "../images/github.svg"


export default function Footer()
{
  return (
    <div className="footer">



      <div className="flex flex-row items-center justify-around ml-10">
        <p className="mr-auto"><b id="UGA-Devdogs">&copy; {(new Date().getFullYear())} DevDogs at the University of Georgia</b></p>
        <div className="flex flex-row flex-nowrap items-center justify-center">

          <p className="block">Follow us for more: </p>
          <Link target="_blank" href=" https://www.instagram.com/devdogs_uga/" className="block"><Image

            src={instagramIcon}
            alt="Instagram Link"
          /></Link>


        <Link target="_blank" href=" https://www.linkedin.com/company/devdogs-uga/" className="block"> <Image

          src={linkedInIcon}
          alt="LinkedIn Link"
        /></Link>


      <Link target="_blank" href=" https://github.com/DevDogs-UGA" className="block"> <Image

        src={githubIcon}
        alt="Github Link"
      /></Link>
          
        </div >
        
      </div >

  {/* <div className=" text-black" id="align-links">
        <Link target="_blank" className="hover:underline visited:text-white" href={'mailto:devdogs@uga.edu'}>Email</Link>
        <Link target="_blank" className="hover:underline visited:text-white" href={'https://github.com/DevDogs-UGA'}>Github</Link>
        <Link target="_blank" className="hover:underline visited:text-white" href={'https://www.linkedin.com/company/devdogs-uga/'}>LinkedIn</Link>
        <Link target="_blank" className="hover:underline visited:text-white" href={'https://linktr.ee/devdogs'}>Linktree</Link>
      </div> */}
    </div >
  )
}
