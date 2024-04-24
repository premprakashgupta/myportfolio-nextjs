"use client"
import { Github, Instagram, Linkedin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useData } from '../_state/context';

interface User {
  name: string;
  profile: string;
  about: string;
  title: string;
  subtitle: string;
  linkedIn: string;
  instagram: string;
  github: string;
  email: string;
}

const Footer = () => {
  const { data, loading } = useData();
  const [userData, setUserData] = useState<User|null>(null);

  useEffect(() => {
    setUserData(data?.user)
  }, [data])
  
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='h-[120px] bg-white flex justify-between items-center px-5'>
        <div className='font-extralight '>
        © 2024 by Prem Prakash Gupta. <br />
Powered and secured by Vercels
        </div>
        <div className='flex justify-center sm:justify-between items-center gap-4'>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>Call</strong>
        <p>123-456-7890</p>
        </div>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>write</strong>
        <p>{userData?.email}</p>
        </div>
        <div className='font-extralight hidden sm:flex flex-col justify-center items-center'>
        <strong>Follow</strong>
        <div className="social-media h-[50px] w-full bg-white flex justify-center items-center gap-4">
        <a href={userData?.linkedIn}>
        <Linkedin color="#000000" strokeWidth={1.25} />

        </a>
        <a href={userData?.instagram}>
        <Instagram size={28} strokeWidth={1.25} />

        </a>
        <a href={userData?.github}>
        <Github color="#000000" strokeWidth={1.25} />

        </a>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Footer