import React from "react";
import img from "../assets/img/p3.png";
import Button from "../layouts/Button";

const Home = () => {

  const downloadPDF = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/pdfs/Reaksmey_CV.pdf';
  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Reaksmey_CV.pdf'; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className=" flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-samibold leading-tight mt-24">
          I'm REAKSMEY THAN
          <br></br>
          <span className=" text-brightColor"> Front-end </span>
          Developer
        </h1>
        <p>
          Hello! My name is Reaksmey, and I'm a seasoned developer with a strong
          background in the field. I've been passionate about software
          development for several years now, and I've honed my skills through a
          combination of education and hands-on experience.
        </p>
        <Button title="HIRE ME" onClick={downloadPDF} />
      </div>
      <div className=" mt-20">
        <img width={2000} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
