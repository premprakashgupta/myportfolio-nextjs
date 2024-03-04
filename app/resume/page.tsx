import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { MoveRight } from "lucide-react";
import React from "react";

interface Child {
  duration: string;
  name: string;
  profile: string;
  location: string;
  link: string;
  desc: string;
}

interface ResumeModel {
  title: string;
  btn?: boolean;
  children: Child[];
}

const Resume: React.FC = () => {
  const resume: ResumeModel[] = [
    {
      title: "Experience",
      btn: true,
      children: [
        {
          duration: "Feb-2024 to present",
          name: "KartDaddy Online Service",
          profile: "Software Engineer (Flutter)",
          location: "Prayagraj (Allahabad)",
          link: "https://kartdaddy.in/",
          desc: "Dedicated and skilled professional with expertise in Flutter and Laravel technologies, currently employed full-time at KartDaddy. Demonstrated proficiency in developing innovative and efficient solutions, contributing to the success of projects. Proven ability to work effectively in a team environment and deliver high-quality results within specified timelines. Adept at leveraging both Flutter and Laravel to create dynamic and responsive applications, showcasing strong problem-solving and analytical skills. Committed to staying current with industry trends and continuously expanding knowledge in the rapidly evolving field of technology",
        },
        {
          duration: "Oct-2023 to Jan-2024",
          name: "MittArv Technology Pvt. Ltd",
          profile: "Software Engineer (Flutter & Mern)",
          location: "Hyerabad",
          link: "https://www.mittarv.com/",
          desc: "Energetic and resourceful professional with a full-time internship at Mittarv Technology Pvt Ltd, specializing in Flutter and Full-Stack development (MERN). Hands-on experience in creating dynamic and user-friendly applications using Flutter for the front end and mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack for comprehensive full-stack development. Demonstrated ability to collaborate effectively within a team, contribute to project success, and adapt quickly to emerging technologies. Proven problem-solving and analytical skills, combined with a commitment to delivering high-quality results. A proactive learner, staying abreast of the latest industry trends and consistently expanding expertise in the tech landscape",
        },
      ],
    },
    {
      title: "Education",
      children: [
        {
          duration: "Sep-2019 to Sep-2023",
          name: "Nalanda College of Engineering",
          profile: "B.Tech (Computer Science & Engineering)",
          location: "Nalanda",
          desc: "Motivated Computer Science and Engineering student pursuing a BTech degree with a strong foundation in technology, specializing in a 2-year comprehensive understanding of the MERN stack and 1-year experience with Flutter. Recognized as the 2nd runner-up in the Sershah Web-thon 2022, showcasing problem-solving prowess and creative thinking. Adept at organizing and coordinating events, served as the coordinator for LaTeX classes organized by IIT Kanpur and NCE. Engaged as a speaker in a web development seminar hosted by my college, demonstrating effective communication and leadership skills. Successfully organized a coding competition sponsored by Internshala and Coding Ninja, highlighting organizational and teamwork abilities. A proactive learner and dynamic individual, consistently contributing to the tech community and expanding knowledge in the field.",
          link: "https://ncechandi.ac.in/",
        },
        {
          duration: "May-2016 to May-2018",
          name: "Hariram College, mairwa Dham",
          profile: "Science (PCM)",
          location: "Mairwa",
          desc: "Diligent student with a strong academic background, having studied Physics, Chemistry, and Mathematics (PCM) at HR College, Mairwa. Achieved the position of college topper with an impressive 62.6%, showcasing a commitment to academic excellence. This accomplishment reflects strong analytical and problem-solving abilities, along with a dedicated approach to studies. A well-rounded individual with a solid foundation in science, eager to apply academic achievements to real-world challenges in the field of technology or related areas.",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#E6DACE] flex flex-col justify-center items-center p-2">
      <br />
      {/* header resume text with box  */}
      <div className="flex gap-4 justify-center items-center">
        <div className="w-[20px] h-[20px] block bg-blue-600"></div>
        <TypographyH1 text="Resume" />
      </div>
      <br />
      <br />
      {/* box with white bg  */}
      {resume.map((item) => (
        <div
          key={item.title}
          className="w-full sm:w-1/2 flex flex-col justify-center items-center mx-3"
        >
          <div className="w-full flex justify-between items-center">
            <TypographyH2 text={item.title} />
            {item.btn && (
              <Button className="text-xs sm:text-sm"><a download={true} href="./resume/resume.pdf">Download Resume</a></Button>
            )}
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
                    text={i.duration}
                  />
                  <br />
                  <p className="text-sm sm:text-lg font-light uppercase">
                    {i.profile}
                  </p>
                  <br />
                  <p className="text-xs sm:text-sm font-light">{i.name}</p>
                  <p className="text-xs sm:text-sm font-light">{i.location}</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <a className="text-blue-600" href={i.link ? i.link : "#"}>
                    Website
                  </a>
                  <MoveRight color="#0f68db" />
                </div>
              </div>
              <div
                className="w-2/3 text-xs sm:text-sm flex flex-col justify-center items-center"
              >
                <p className="text-justify first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">{i.desc}</p>
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

export default Resume;
