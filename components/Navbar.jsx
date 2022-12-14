import Link from "next/link";
import React, {useState, useEffect} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const [textColor, setTextColor] = useState("white");
  const [teamColor, setTeamColor] = useState("white");

  const [mobileIconColor, setMobileIconColor] = useState("white");

  const [underlineColor, setUnderlineColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      setMobileIconColor("white");
    } else {
      setMobileIconColor(textColor);
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setTeamColor("red");
        setUnderlineColor("black");
        setMobileIconColor("black");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setTeamColor("#ffffff");
        setUnderlineColor("white");
        setMobileIconColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{backgroundColor: `${color}`}}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">
            Xelvis<span style={{color: `${teamColor}`}}>64</span>
          </h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex">
          <li className="p-4 text-xl group transition-all duration-300 ease-in-out">
            <span
              className={`bg-left-bottom bg-gradient-to-r ${
                underlineColor === "white"
                  ? "from-white to-transparent"
                  : "from-black to-transparent"
              } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            >
              <Link href="/" className="">
                Home
              </Link>
            </span>
          </li>
          <li className="p-4 text-xl group transition-all duration-300 ease-in-out">
            <span
              className={`bg-left-bottom bg-gradient-to-r ${
                underlineColor === "white"
                  ? "from-white to-transparent"
                  : "from-black to-transparent"
              } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            >
              <Link href="/blog" className="">
                Blogs
              </Link>
            </span>
          </li>
          <li className="p-4 text-xl group transition-all duration-300 ease-in-out">
            <span
              className={`bg-left-bottom bg-gradient-to-r ${
                underlineColor === "white"
                  ? "from-white to-transparent"
                  : "from-black to-transparent"
              } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            >
              <Link href="/project" className="">
                Projects
              </Link>
            </span>
          </li>
          <li className="p-4 text-xl group transition-all duration-300 ease-in-out">
            <span
              className={`bg-left-bottom bg-gradient-to-r ${
                underlineColor === "white"
                  ? "from-white to-transparent"
                  : "from-black to-transparent"
              } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            >
              <Link href="/about" className="">
                About us
              </Link>
            </span>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{color: `${mobileIconColor}`}} />
          ) : (
            <AiOutlineMenu size={30} style={{color: `${mobileIconColor}`}} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 duration-300 ease-in-out"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 duration-300 ease-in-out"
            >
              <Link href="/blog">Blogs</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 duration-300 ease-in-out"
            >
              <Link href="/project">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 duration-300 ease-in-out"
            >
              <Link href="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
