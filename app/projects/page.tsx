import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import React from "react";
interface skill {
  color: string;
  text: string;
}
interface Child {
  name: string;
  skills: skill[];

  link: string;
  desc: string;
}

interface ProjectsModel {
  title: string;
  children: Child[];
}

const Projects: React.FC = () => {
  const Projects: ProjectsModel[] = [
    {
      title: "On MERN-Stack",
      children: [
        {
          name: "Netflix Design",
          skills: [
            { color: "#479848", text: "tailwind css" },
            { color: "#235E8B", text: "ReactJs" },
            
          ],

          link: "https://63199abc38a3cd4a9cf9b9b5--studyflix.netlify.app/",
          desc: "Crafted a faithful frontend clone of Netflix, incorporating engaging design elements and user-friendly functionalities",
        },
        
        {
          name: "SunShine E-Commerce",
          skills: [
            { color: "#479848", text: "MongoDb" },
            { color: "#373737", text: "ExpressJs" },
            { color: "#373737", text: "Redux" },
            { color: "#235E8B", text: "ReactJs" },
            { color: "#74B141", text: "NodeJs" },
          ],

          link: "https://sunshine-server.onrender.com/",
          desc: "Spearheaded the development of a comprehensive e-commerce platform, featuring a range of functionalities like add-to-cart, review posting, and seamless purchase processes",
        },
        {
          name: "Resume Builder",
          skills: [
            { color: "#479848", text: "tailwind css" },
            { color: "#235E8B", text: "ReactJs" },
            
          ],

          link: "https://resume4u.netlify.app/",
          desc: "Conceptualized and implemented a user-friendly resume builder application, allowing users to create and download resumes effortlessly",
        },
        {
          name: "Instagram Clone",
          skills: [
            { color: "#479848", text: "MongoDb" },
            { color: "#373737", text: "ExpressJs" },
            { color: "#235E8B", text: "ReactJs" },
            { color: "#74B141", text: "NodeJs" },
          ],

          link: "https://github.com/premprakashgupta/preminsta",
          desc: "Led the development of an Instagram clone with a full suite of features, including post uploads, likes-dislikes, and friend request functionalities",
        },
        {
          name: "Web-Editor",
          skills: [
            
            { color: "#235E8B", text: "ReactJs" },
            
          ],

          link: "https://webeditor4u.netlify.app/",
          desc: "Designed and implemented a web-based editor tool akin to Notepad, catering to various user needs",
        },
        {
          name: "WhatsApp Clone",
          skills: [
            
            { color: "#479848", text: "MongoDb" },
            { color: "#373737", text: "ExpressJs" },
            { color: "#235E8B", text: "ReactJs" },
            { color: "#74B141", text: "NodeJs" },
            { color: "#373737", text: "Socket.IO" },
            
          ],

          link: "https://github.com/premprakashgupta",
          desc: "WhatsApp clone with all feature like person to person chat, group chat and change profile and status.",
        },
        {
          name: "Sticky Note",
          skills: [
            
            { color: "#479848", text: "MongoDb" },
            { color: "#373737", text: "ExpressJs" },
            { color: "#235E8B", text: "ReactJs" },
            { color: "#74B141", text: "NodeJs" },
            
          ],

          link: "https://github.com/premprakashgupta/",
          desc: "A website which collect your all colorfull sticky note, just login and see what is next to go. Also ou can play with sticky notes",
        },
        
      ],
    },
    {
      title: "On Flutter",
      children: [
        {
          name: "Dr. Ai",
          skills: [
            { color: "#235E8B", text: "Flutter" },
            { color: "#479848", text: "Firebase" },
            { color: "#373737", text: "Ai/ML" },
            { color: "#373737", text: "Socket.Io" },
            { color: "#74B141", text: "Redis" },
          ],

          desc: " Pioneered the development of an innovative healthcare application powered by artificial intelligence, connecting users with advanced medical insights",
          link: "https://github.com/premprakashgupta/myproject",
        },
        {
          name: "E-Commerce",
          skills: [
            { color: "#235E8B", text: "Flutter" },
            { color: "#479848", text: "Firebase" },
            { color: "#373737", text: "Rest API" },
            { color: "#74B141", text: "Providers" },
          ],

          desc: "Architected a feature-rich Flutter-based e-commerce application, integrating seamlessly with REST APIs and leveraging Provider architecture for enhanced functionality",
          link: "https://github.com/premprakashgupta/e_commerce_using_flutter",
        },
        {
          name: "Code Discussion",
          skills: [
            { color: "#235E8B", text: "Flutter" },
            { color: "#479848", text: "Firebase" },
            { color: "#74B141", text: "Getx" },
          ],

          desc: "Architected a feature-rich Flutter-based Educational application, which provide plateform to discussion of code for students. students can solve PYQ of various exams and get immediate result.",
          link: "https://github.com/premprakashgupta",
        },
        {
          name: "Make Attendance",
          skills: [
            { color: "#235E8B", text: "Flutter" },
            { color: "#479848", text: "Firebase" },
            { color: "#74B141", text: "Getx" },
          ],

          desc: "Architected a feature-rich Flutter-based Educational application, which provide facility to make attendance of students and provide them assignments",
          link: "https://github.com/premprakashgupta/attendance",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#E6DACE] flex flex-col justify-center items-center p-2">
      <br />
      {/* header Projects text with box  */}
      <div className="flex gap-4 justify-center items-center">
        <div className="w-[20px] h-[20px] block bg-blue-600"></div>
        <TypographyH1 text="Projects" />
      </div>
      <br />
      <br />
      {/* box with white bg  */}
      {Projects.map((item) => (
        <div
          key={item.title}
          className="w-full sm:w-1/2 flex flex-col justify-center items-center mx-3"
        >
          <div className="w-full flex justify-between items-center">
            <TypographyH2 text={item.title} />
          </div>
          <br />
          {item.children.map((i) => (
            <div
              key={i.name}
              className="bg-white shadow-md rounded-md p-2 sm:p-14 w-full flex gap-3 m-3"
            >
              <div className="w-1/3 flex flex-col justify-between items-start">
                <div>
                  <TypographyH2
                    className="year text-blue-600 font-bold"
                    text={i.name}
                  />
                  <br />
                  <br />
                </div>
                <div className="flex justify-start items-center gap-4">
                  <a className="text-blue-600" href={i.link ? i.link : "#"}>
                    Website
                  </a>
                  <MoveRight color="#0f68db" />
                </div>
              </div>
              <div className="w-2/3 text-xs sm:text-sm flex flex-col justify-between items-center">
                <p className="text-justify">
                  {i.desc}
                </p>
                <br />
                <div className="w-full flex justify-start flex-wrap">
                    {i.skills.map((skill) => (
                      <span
                        key={skill.text} // Remember to add a unique key for each element in the map
                        style={{ backgroundColor: skill.color }}
                        className={`rounded-full m-2 px-3 py-1 text-white text-xs sm:text-sm font-medium`}
                      >
                        {skill.text}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          ))}
          <div className="w-[5px] h-[30px] bg-white"></div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Projects;
