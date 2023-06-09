import React from "react";
import foodApp from "../assets/portfolio/foodApp.png";
import countries from "../assets/countries.png";
import movieland from "../assets/movieland.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: countries,
      codeLink: "https://github.com/khareenp/countriesApp",
      demoLink: "https://countrykp.netlify.app/",
    },
    {
      id: 2,
      src: movieland,
      codeLink: "https://github.com/khareenp/movieLand",
      demoLink: "https://moielandkp.netlify.app/",
    },
    {
      id: 3,
      src: foodApp,
      codeLink: "https://github.com/khareenp/foodApp",
      demoLink: "https://besteatskp.netlify.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="flex flex-col max-w-screen-lg mx-auto w-full h-full p-4 justify-center">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 "
              />
              <div className="flex items-center justify-center">
                <a href={codeLink}>
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Code
                  </button>
                </a>
                <a href={demoLink}>
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
