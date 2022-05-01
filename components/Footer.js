import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex w-[100%] mx-auto max-w-7xl p-7 bg-gray-100 justify-between">
        <div className="footer__about flex font-Montserrat font-thin">
          Made By Vaibhav Vyas
        </div>

        <div className="footer__links flex flex-col">
          <h2 className="font-Montserrat font-semibold">Links</h2>
          <Link href="/">
            <a className="font-Montserrat font-light">Project</a>
          </Link>
          <Link href="/">
            <a className="font-Montserrat font-light">Blogs</a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
