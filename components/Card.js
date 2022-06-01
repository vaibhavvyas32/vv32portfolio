import React from "react";

const Card = ({ title, description, imgSrc, imglive, github, live }) => {
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href={imglive}>
            <div class=" top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-100 hover:opacity-90 transition duration-300 ease-in-out bg-white">
              <img
                class="rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
                src={imgSrc}
                alt="Image Could not load."
              />
            </div>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2 font-Montserrat">
              {title}
            </h5>
            <p class="text-gray-700 text-base mb-4">{description}</p>
            <div className="space-x-2">
              <a href={github}>
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Github
                </button>
              </a>
              <a href={live}>
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 
        <div className="flex flex-col card border-2 rounded-md p-5 mt-7 max-w-lg">
          <h3 className=" font-Montserrat font-bold text-center">title</h3>
          <p className="font-Montserrat font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            perspiciatis rem nam impedit iste dolores deserunt. Dolorem cumque
            accusamus quae perferendis rerum numquam repellat excepturi veniam
            velit recusandae. Asperiores, explicabo.
          </p>
          <span className="flex space-x-2">
            <button className="rounded-lg pl-3 pr-3 font-Montserrat font-extrabold bg-purple-700 text-white ">
              Repo
            </button>
            <button className="rounded-lg pl-3 pr-3 font-Montserrat font-extrabold bg-purple-700 text-white">
              Live
            </button>
          </span>
        </div>
      </div> */}
    </>
  );
};

export default Card;
