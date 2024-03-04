"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


import React, { Suspense, useEffect, useState } from 'react'

function TempComponent() {
    const navLink=[
        {
            href:"/?active=aboutme",
            active:"aboutme",
            name:"About Me"
        },
        {
            href:"/resume?active=resume",
            active:"resume",
            name:"Resume"
        },
        {
            href:"/projects?active=projects",
            active:"projects",
            name:"Projects"
        },
        {
            href:"/contact-me?active=contactme",
            active:"contactme",
            name:"Contact Me"
        },
        {
            href:"/blog?active=blog",
            active:"blog",
            name:"Blog"
        },
    ]

    const [active, setActive] = useState("aboutme")
    const search = useSearchParams();
    
    useEffect(() => {
        const newActive = search.get('active');
        if (newActive !== null && newActive !== active) {
          setActive(newActive);
          console.log(newActive);
          
        }
      }, [search, active]);
   
    return  <div className='w-full h-[120px] sticky top-0 left-0 z-50 bg-white flex justify-center sm:justify-between items-center p-2 sm:p-5 text-lg font-thin'>
    <div className="logo flex gap-3 items-center">
        <div className='w-[20px] h-[20px] hidden sm:block bg-blue-600'></div>
        <div className='hidden sm:flex'>
            <h2 className='font-medium text-xl'>Prem Prakash Gupta</h2>
            <p>/Software Developer</p>
        </div>
    </div>
    <nav className='flex gap-3 '>
        {
            navLink.map(item=>(
                <div key={item.name} onClick={()=>setActive(item.name)} className={cn('hover:text-blue-500 cursor-pointer text-sm sm:text-lg',active==item.active ? "text-blue-500":"")}>
            <Link href={item.href}> {item.name}
        </Link>

           
        </div>
            ))
        }
        
    </nav>
</div>
  }

const Header = () => {
    

    
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <TempComponent/>
        </Suspense>
      );
  
}

export default Header