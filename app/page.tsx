import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {TypographyH1, TypographyH2} from '@/components/ui/typography'
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button"
import {profileImage} from "@/app/_constants/constant"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <div className="bg-[#E6DACE] w-[30%]">
        
      </div>
      <div className="w-[70%] bg-white">
        
      </div>
      <div className="flex h-auto w-full sm:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#E6DACE] w-full sm:w-[40%] flex flex-col justify-center items-center shadow-lg">
        <Avatar className="w-2/3 h-auto p-2">
          <AvatarImage  src={profileImage} />
          <AvatarFallback>User Image</AvatarFallback>
        </Avatar>
        <br />
        <TypographyH2 className="text-center" text="Prem Prakash Gupta"/>
        <hr className="bg-blue-600 h-[1px] w-1/2" />
        <br />
        <p className="font-light uppercase">Software Engineer</p>
        <br />
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
        <div className="bg-white w-[60%] p-4 hidden sm:block">
          <TypographyH1 text="Hello"/>
          <br />
          <TypographyH2 text="Here's who I am & what I do"/>
          <br />
          <div className="flex gap-4">
          <Button variant="default"><a download={true} href="./resume/resume.pdf">Resume</a></Button>
          <Button variant="outline" asChild>
  <Link href="/projects?active=projects">Projects</Link>
</Button>

          </div>
          <br />
          <p className="">Experienced Full Stack Developer with proficiency in MERN stack
and Flutter. Specializing in building robust and scalable web
applications and mobile solutions. Adept at collaborating with
cross-functional teams to deliver innovative and user-friendly
products. Passionate about creating seamless, efficient, and
cutting-edge software experiences</p>
        </div>
      </div>
    </main>
  );
}
