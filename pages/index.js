import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const Home = () => (
  <>
    <Head>
      <title>Welcome to My Info Site</title>
    </Head>
    {/* Hero Section */}
    <HeroSection />
    {/* Projects Section */}
    <Projects />
    {/* About Section */}
    {/* <AboutMe /> */}

    {/* Tech Used */}

    <div className="flex flex-col pt-16 items-center h-screen border-2">
      <p className="font-Montserrat font-bold text-5xl">
        🧰 Tech Used<div className="mt-2 border-t-2 ml-5 mr-5 "></div>
      </p>
      <ul className="flex flex-row space-x-5 lg:pt-[20rem] pt-[10rem]">
        <li>
          <Image src="/assets/logos/GitHub.svg" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/logos/JavaScript.svg" width={100} height={100} />
        </li>
        <li>
          <Image
            src="/assets/logos/React Native.svg"
            width={100}
            height={100}
          />
        </li>
        <li>
          <Image src="/assets/logos/Frame.svg" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/logos/Frame-1.svg" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/logos/some 1.svg" width={100} height={100} />
        </li>
      </ul>
    </div>
  </>
);

export default Home;
