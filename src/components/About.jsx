import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300"
    >
      <div className="flex flex-col max-w-screen-lg w-full h-full p-4 mx-auto justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Passionate Software Engineer with 3 years of experience in developing
          web applications. Skilled at writing clear, concise code that is easy
          to maintain and troubleshoot. Experienced in working primarily in
          small teams across multiple projects and companies. Able to work
          independently of remote locations or in office environments as needed
          by the company.
        </p>
        <br />
        <p className="text-xl">
          My frontend technologies of choice is ReactJS amd TailwindCSS but I do
          have some experience with VueJS as well. For DBMS I have experience in
          both SQL or NOSQL databases using MongoDB and Postgresql. For
          serverside development I have experience in NodeJS, Golang and I am
          currently learning Springboot. While some of these are not
          technologies I use everyday I am quick to learn and adapt to the needs
          of the project.
        </p>
      </div>
    </div>
  );
};

export default About;
