import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Suka</p>
          <p>Jan 2015 - Dec 2022</p>
        </div>
      </div>

      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">
          Certificate of web training
        </h2>

        <p className=" mt-2">
          Throughout my career, I've stayed up-to-date with the latest
          technologies and methodologies, constantly seeking opportunities to
          grow and evolve as a developer. My expertise lies in languages such as
          JavaScript, TypeScript, and frameworks like ReactJS, as well as
          backend technologies like Node.js.
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default ExperienceCard;
