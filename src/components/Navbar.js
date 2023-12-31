// // Navbar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

// function Navbar() {
//   let [open, setOpen] = useState(false);
//   return (
//     <nav className="fixed ">
//       <ul className="">
//         <li className="">
//           <Link to="/" className="">
//             Home
//           </Link>
//         </li>
//         <li className="">
//           <Link to="/about" className="">
//             About
//           </Link>
//         </li>
//         <li className="">
//           <Link to="/skills" className="">
//             Skills
//           </Link>
//         </li>
//         <li className="">
//           <Link to="/contact" className="">
//             Contact
//           </Link>
//         </li>
//         <li className="">
//           <Link to="/projects" className="">
//             Projects
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.js

// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css"; // Import the CSS file

// function Navbar() {
//   let [open, setOpen] = useState(false);
//   return (
//     <div className="shadow-md w-full fixed top-0 left-0 z-10">
//       <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-7">
//         <div
//           className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//     text-gray-800"
//         >
//           <span className="text-3xl mr-1 pt-2">
//             <ion-icon name="person-circle"></ion-icon>
//           </span>
//           <Link
//             to="/#home"
//             className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//           >
//             Portfolio
//           </Link>
//         </div>

//         <div
//           onClick={() => setOpen(!open)}
//           className=" text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
//         >
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </div>

//         <ul
//           className={`mb-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-20 " : "top-[-490px]"
//           }`}
//         >
//           <li className="md:ml-8 text-xl md:my-0 my-7 ">
//             <Link
//               to="/#home"
//               className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="md:ml-8 text-xl md:my-0 my-7">
//             <Link
//               to="/#about"
//               className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//             >
//               About
//             </Link>
//           </li>
//           <li className="md:ml-8 text-xl md:my-0 my-7">
//             <Link
//               to="skills"
//               smooth={true}
//               duration={500}
//               className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//             >
//               Skills
//             </Link>
//           </li>
//           <li className="md:ml-8 text-xl md:my-0 my-7">
//             <Link
//               to="/#contact"
//               className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//             >
//               Contact
//             </Link>
//           </li>
//           <li className="md:ml-8 text-xl md:my-0 my-7">
//             <Link
//               to="/#projects"
//               className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
//             >
//               Projects
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// Navbar.js
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-7">
        <div
          className="font-bold text-2xl flex items-center font-[Poppins] 
    text-gray-800"
        >
          <span className="cursor-default text-3xl mr-1 pt-2">
            <ion-icon name="person-circle"></ion-icon>
          </span>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-default text-gray-800 no-underline"
            onClick={handleScrollToTop}
          >
            Portfolio
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-4 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`mb-0 md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 cursor-pointer transition-all duration-500 ease-in ${
            open ? "top-10" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="about"
              smooth={true}
              duration={200}
              className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
            >
              About
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="skills"
              smooth={true}
              duration={200}
              className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
            >
              Skills
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="projects"
              smooth={true}
              duration={200}
              className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
            >
              Projects
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="text-gray-800 hover:text-blue-600 duration-500 no-underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
