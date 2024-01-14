import React from "react";

function About() {
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
  return (
    <div>
      <section id="about">
        <div className="lg:flex pb-10 pt-16">
          <div className="lg:flex-1">
            <div className="flex justify-center items-center sm: flex flex-wrap ml-36 mt-20">
              <img
                className="px-8 py-8"
                src="https://c4.wallpaperflare.com/wallpaper/216/42/445/lionel-messi-4k-hd-download-wallpaper-preview.jpg"
                width={500}
                alt="aboutPic1"
              />
              <img
                className="px-8 py-8 relative bottom-24 right-40"
                src="https://c4.wallpaperflare.com/wallpaper/44/959/737/cristiano-ronaldo-4k-portugal-footballer-wallpaper-thumb.jpg"
                width={500}
                alt="aboutPic2"
              />
            </div>
          </div>

          <div className="lg:flex-1 lg:flex-col px-4">
            <h5 className="text-blue-500 font-semibold mb-0">ABOUT ME</h5>
            <h1 className="font-bold mb-8">I Develope Websites</h1>
            <p>
              I am a passionate and innovative technologist with a deep love for
              problem-solving and a keen interest in cutting-edge technologies.
              With a background in Your Field or Specialization, I am dedicated
              to pushing the boundaries of what's possible in the digital world.
              My journey in the tech industry began Mention how and when you
              started in tech. Since then, I have continuously evolved and
              adapted to the fast-paced nature of this field. I thrive in
              collaborative environments and have a strong track record of
              working with cross-functional teams to deliver solutions that not
              only meet but exceed expectations. I am a firm believer in
              lifelong learning and keep myself updated with the latest trends
              and developments in the tech landscape. Whether it's [Mention a
              few technologies or areas you're passionate about], I am committed
              to staying at the forefront of innovation. In addition to my
              technical skills, I understand the importance of clear
              communication and effective project management. I enjoy
              translating complex technical concepts into plain language that
              everyone can understand, and I take pride in delivering projects
              on time and within budget. Outside of work, I'm a Mention a few
              personal interests or hobbies enthusiast and a strong advocate for
              Any relevant cause or community involvement. I believe that a
              well-rounded perspective not only enriches my life but also
              contributes to my problem-solving abilities in the tech world. I
              am excited about the opportunities that lie ahead and am eager to
              collaborate on projects that push the boundaries of technology. If
              you're looking for someone who is not only skilled but also
              passionate about what they do, I'd love to be a part of your tech
              journey.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-0">
                <p className="font-semibold mb-0">NAME</p>
                <p>Shadman Khan</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EDUCATION</p>
                <p>R.V.S College of Engineering and Technology</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMAIL</p>
                <p>khanshadman7777@gmail.com</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMPLOYMENT</p>
                <p>Available</p>
              </div>
            </div>

            <button
              className="font-semibold bg-blue-500 px-8 py-2 rounded-md text-white text-sm "
              onClick={handleDownload}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
