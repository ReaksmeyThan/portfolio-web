import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Jan 2015 - Dec 2022</p>
        </div>
      </div>

      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">
          Certificate of web training
        </h2>
    
      <p className=" mt-2">
        Hello! My name is Reaksmey, and I'm a seasoned developer with a strong
        foundation in information technology. I graduated with a Bachelor of
        Arts degree in Information Technology from CIEDI between 2011 and 2015,
        where I focused my studies on programming and software development.
      </p>
      <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
