import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="hero__section flex flex-col items-center h-[90vh] border-2 md:pt-[20rem] pt-[10rem]">
        <span>
          <Image
            src="https://avatars.githubusercontent.com/u/52570863?v=4"
            alt="my-avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
        </span>
        <p className="font-Montserrat font-extrabold text-5xl">
          I'm Vaibhav Vyas
          <div className="line__of__death mt-2 border-t-2 ml-5 mr-5 "></div>
        </p>
        <p className="font-Montserrat font-bold text-2xl text-gray-600 pt-2">
          CSE | ReactJS | Gamer
        </p>
        <span className="contact__links pt-[1rem]">
          <ul className="flex space-x-2 items-center">
            <li>
              <a href="https://www.linkedin.com/in/vaibhavvyas32">
                <Image
                  src="/assets/links/linkedin.svg"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/vaibhavvyas32">
                <Image src="/assets/links/github.svg" height={40} width={40} />
              </a>
            </li>
            <li>
              <a href="https://vaibhavvyas32.medium.com/">
                <Image src="/assets/links/medium.svg" height={40} width={40} />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default HeroSection;
