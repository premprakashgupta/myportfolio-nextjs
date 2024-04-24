"use client"
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useData } from "../_state/context";

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
  const { data, loading } = useData();
  const [resumeData, setResumeData] = useState<ResumeModel[]>();

  useEffect(() => {
    setResumeData(data?.resume)
  }, [data])
  
  if (loading) {
    return <p>Loading...</p>;
  }

  
  

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
      {resumeData?.map((item) => (
        <div
          key={item.title}
          className="w-full sm:w-1/2 flex flex-col justify-center items-center mx-3"
        >
          <div className="w-full flex justify-between items-center">
            <TypographyH2 text={item.title} />
            {item.btn && (
              <Button className="text-xs sm:text-sm"><a download={true} href="./resume/resume_prem_prakash.pdf">Download Resume</a></Button>
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
