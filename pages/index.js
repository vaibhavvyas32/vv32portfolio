import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Home = () => (
  <>
    <Head>
      <title>Welcome to My Info Site</title>
    </Head>
    {/* Hero Section */}
    <div className="flex flex-col pt-16 items-center h-screen border-2">
      <Image
        src="https://avatars.githubusercontent.com/u/52570863?v=4"
        alt="my-avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
      <p className="font-Montserrat font-extrabold text-5xl">
        I'm Vaibhav Vyas
        <div className="mt-2 border-t-2 ml-5 mr-5 "></div>
      </p>
    </div>
    {/* Projects Section */}
    <Projects />
    {/* About Section */}
    <AboutMe />
  </>
);

export default Home;
