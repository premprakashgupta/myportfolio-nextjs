import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-[120px] bg-white flex justify-between items-center px-5'>
        <div className='font-extralight '>
        © 2035 by Prem Prakash Gupta. <br />
Powered and secured by Vercels
        </div>
        <div className='flex justify-center sm:justify-between items-center gap-4'>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>Call</strong>
        <p>123-456-7890</p>
        </div>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>write</strong>
        <p>prem.com0011@gmail.com</p>
        </div>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>Follow</strong>
        <div className="social-media h-[50px] w-full bg-white flex justify-center items-center gap-4">
        <a href="https://www.linkedin.com/in/premprakashgupta-/">
        <Linkedin color="#000000" strokeWidth={1.25} />

        </a>
        <a href="https://www.instagram.com/mypov_premprakash/">
        <Instagram size={28} strokeWidth={1.25} />

        </a>
        <a href="https://github.com/premprakashgupta/">
        <Github color="#000000" strokeWidth={1.25} />

        </a>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Footer