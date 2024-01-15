import React, { useState, useEffect } from "react";
import "./Home.css";
import profileimage from "./profilepic.png";

function Home() {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "/Shadman_Khan.pdf";

    // Create a new anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "Shadman_Khan.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  };

  const [text, setText] = useState("React.js");
  const texts = [
    "React.js",
    "Node.js",
    "Express.js",
    "postgreSQL",
    "mySQL",
    "MongoDB",
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section id="home">
        <div className="h-screen lg:flex justify-center items-center bg-third-gray pt-2">
          <div className="lg:flex-1 mt-16">
            <div className="pt-4 ml-24 md:ml-36 lg:ml-36">
              <h2 className="animate-pulse sm:animate-bounce mt-8 mb-0 font-semibold md:text-3xl lg:text-4xl">
                Hello, I'm
              </h2>
              <h1 className=" text-blue-600 font-bold md:text-5xl lg:text-6xl">
                <span className="text-black">SHADMAN </span>KHAN
              </h1>

              <h3 className="mt-4 mb-0 md:text-3xl lg:text-4xl">
                I develop websites using....
              </h3>

              <h2 className="text-blue-600 md:text-2xl lg:text-3xl mb-4">
                {text}
              </h2>
            </div>
            <div className="ml-36">
              <button
                className="mb-2 mt-1 bg-blue-900 border-teal-700 border-0 text-white font-semibold text-base py-3 px-4 rounded-lg  hover:bg-teal-500 transition-transform duration-300 transform hover:scale-110"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="lg:flex-1 flex justify-center mt-6 sm:mt-6 md:mt-10">
            <img
              className="h-1/2 w-1/2 sm:mt-4 sm:h-1/4 sm:w-1/4 lg:h-1/2 lg:w-1/2 mb-4 rounded-xl shadow-2xl shadow-gray-950 transition-transform transform hover:scale-105 duration-400 "
              src={profileimage}
              alt="img"
            />
          </div>
        </div>
        <div className="p-2 bg-custom-black">
          <div className="flex flex-wrap justify-center m-8">
            {/* <h1 className="text-white">Welcome to my World</h1> */}
            <h1 className="text-center text-blue-600 font-bold">
              <span className="text-white">Welcome to my </span>World!
            </h1>
            <p className="mt-4 text-white">
              I am a young Full-stack Developer looking to take on the tech
              world by storm. I grew up in Jamshedpur, India. I am a young
              Full-stack Developer looking to take on the tech world by storm. I
              grew up in Jamshedpur, India. I am a young Full-stack Developer
              looking to take on the tech world by storm. I grew up in
              Jamshedpur, India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center m-4">
            <div className="border-0 text-center w-[350px] h-[300px] pt-8 rounded-xl text-white bg-gray-600 hover:bg-yellow-500 hover:rotate-6 shadow-2xl shadow-yellow-900 border-lime-800 hover:transform transition-transform duration-300">
              <h2 className="text-blue-500">Certification</h2>
              <strong>Web Development</strong>
              <p>The Complete Web Developer: Zero to Mastery</p>
              <strong>Issue Organization</strong>
              <p>Udemy</p>
              <a
                href="https://ude.my/UC-589d4bb8-9e82-4dfc-b683-5475dc61862b"
                className="no-underline text-white"
              >
                <button className="p-2 bg-blue-700 border-0 rounded-sm  hover:bg-teal-500 transition-transform duration-300 transform hover:scale-110">
                  Certificate
                </button>
              </a>
            </div>

            <div className="border-0 text-center w-[350px] h-[300px] pt-8 rounded-xl text-white bg-gray-600 hover:bg-yellow-500 hover:scale-105 shadow-2xl shadow-yellow-900 border-lime-800 hover:transform transition-transform duration-300">
              <h2 className="text-blue-500">Education</h2>
              <strong>College [ 2020 - 2024 ]</strong>
              <p>R.V.S College of Engineering and Technology, Jamshedpur</p>
              <strong>School [ 12th ] [ ISC ] [ 2020 ]</strong>
              <p>Kerala Public School, Kadma</p>
              <strong>School [ 10th ] [ ICSE ] [ 2018 ]</strong>
              <p>Kerala Public School, Mango</p>
            </div>

            <div className="border-0 text-center w-[350px] h-[300px] pt-8 rounded-xl text-white bg-gray-600 hover:bg-yellow-500 hover:-rotate-6 shadow-2xl shadow-yellow-900 border-lime-800 hover:transform transition-transform duration-300">
              <h3 className="pb-1 text-blue-500">Achievements & Soft Skills</h3>
              <strong>Achievement</strong>
              <p className="mb-8">
                Winner of HACK WITH RVSCET (2021) coding competition.
              </p>
              {/* <strong>College</strong>
              <p>Studying in RVS college</p> */}
              <strong>Soft-Skills</strong>
              <p>
                Fluent English, Communication, Problem-Solving, Team player,
                Adaptibility
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
