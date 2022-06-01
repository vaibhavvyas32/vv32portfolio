import React from "react";
import Card from "./Card";
import { cardData } from "../public/assets/cardData";

const cardsArray = cardData.map((item) => (
  <Card
    title={item.title}
    description={item.description}
    imgSrc={item.imgSrc}
    github={item.github}
    live={item.live}
    imglive={item.imglive}
  />
));

const Projects = () => {
  return (
    <>
      <div className="flex flex-col pt-10 items-center">
        <h3 className="font-Montserrat font-semibold text-5xl">
          My Projects
          <div className="mt-2 border-t-2 ml-5 mr-5 "></div>
        </h3>
        <div className="flex p-5 flex-wrap">{cardsArray}</div>
      </div>
    </>
  );
};

export default Projects;
