import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#photos", label: "Photos" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <header className=" md:px-8 px-4 py-5 z-10 w-full">
        <nav className="flex justify-between items-center max-container ">
          <a href="/" className="text-3xl font-bold">
            Port<span className="text-blue-900">folio.</span>
          </a>
          <ul className="pr-20 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-2xl text-slate-gray hover:text-red-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50  bg-opacity-75 ">
          <nav className="sticky inset-0 lg:bottom-auto bg-zinc-900 h-1/2   ">
            <div
              className="hidden max-lg:block fixed right-0  px-5 py-5 cursor-pointer "
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center gap-4 pt-16 pb-4  font-bold h-full  ">
              {navLinks.map((item) => (
                <li key={item.label} >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray "
                    onClick={() => {
                setIsMenuOpen(false); // Close the menu when a menu item is clicked
              }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    

    </>
  );
};
export default Navbar;