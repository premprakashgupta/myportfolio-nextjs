"use client"
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useData } from "../_state/context";
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

  const { data, loading } = useData();
  const [projectData, setProjectData] = useState<ProjectsModel[]>();

  useEffect(() => {
    setProjectData(data?.project)
  }, [data])
  
  if (loading) {
    return <p>Loading...</p>;
  }

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
      {projectData?.map((item) => (
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
