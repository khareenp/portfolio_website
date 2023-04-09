import React from "react";
import advice_generator from "../assets/portfolio/advice_generator.png";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import countries from "../assets/countries.png";
import movieland from "../assets/movieland.png";
import rating from "../assets/ratingapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: advice_generator,
      codeLink:
        "https://github.com/khareenp/frontend_portfolio/tree/main/advice-generator",
    },

    {
      id: 2,
      src: rating,
      codeLink:
        "https://github.com/khareenp/frontend_projects/tree/main/rating",
    },
    {
      id: 3,
      src: countries,
      codeLink:
        "https://github.com/khareenp/frontend_projects/tree/main/countries-app",
    },
    {
      id: 4,
      src: movieland,
      codeLink:
        "https://github.com/khareenp/frontend_projects/tree/main/movie-land",
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: arrayDestruct,
    },
    {
      id: 7,
      src: installNode,
    },
    {
      id: 8,
      src: reactWeather,
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
          {portfolios.map(({ id, src, codeLink }) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
