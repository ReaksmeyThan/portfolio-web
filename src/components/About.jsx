import React from "react";
import SkillsCard from "../layouts/SkillsCard";

const About = () => {

    const skill1 ="w-11/12";
    const skill2 = "w-4/5";
    const skill3 = "w-2/3"

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-slate-100">
      <div className=" mt-16 mb-16">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">About Me</h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I'm Reaksmey Than</h2>
          <p className=" mt-4 lg:mt-2">
            My journey into development began with a deep curiosity for
            technology and a desire to create impactful solutions. Over the
            years, I've worked on a variety of projects, ranging from web
            applications to mobile apps, and I've had the opportunity to
            collaborate with talented teams to bring ideas to life.
          </p>
        </div>
        <div>
            <h2 className=" text-3xl font-semibold">My Skills</h2>
            <div className=" mt-5">
                <SkillsCard title="Html" width={skill1} val="95%" />
                <SkillsCard title="CSS" width={skill2} val="80%" />
                <SkillsCard title="JavaScript" width={skill3} val="70%" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
