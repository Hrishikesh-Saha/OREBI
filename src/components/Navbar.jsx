import React, { useEffect, useState } from "react";
import Container from "./Container";
import logo from "/Logo.png";
import Image from "./Layer/Image";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    return () => {
      function displaySize() {
        if (window.innerWidth < 767.99) {
          setShow(false);
        } else {
          setShow(true);
        }
      }

      displaySize();
      window.addEventListener("resize", displaySize);
    };
  }, []);

  return (
    <nav className="bg-slate-300 md:bg-transparent">
      <Container className="flex justify-between md:justify-center relative py-8 md:left-10">
        <Image
          src={logo}
          alt={"missing"}
          href={"/"}
          className={"static md:absolute left-0"}
        />

        <div className="icons flex gap-x-4">
          <div className="icons flex md:hidden gap-x-2 items-center cursor-pointer">
            <div className="user flex items-center text-sm">
              <FaUser />
              <MdOutlineArrowDropDown />
            </div>

            <div className="cart cursor-pointer text-s">
              <FaShoppingCart />
            </div>
          </div>

          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <GiHamburgerMenu />
          </div>
        </div>

        <ul
          className={`transition-all z-50 duration-500 flex gap-x-10 md:flex-row flex-col bg-slate-400 md:bg-transparent absolute top-full left-0 md:static w-full md:w-auto ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li>
            <Link
              className="text-[14px] font-sans text-slate-200 md:text-[#76767676] transition-all duration-300 font-bold hover:text-black p-3 md:p-0"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[14px] font-sans text-slate-200 md:text-[#76767676] transition-all duration-200 font-bold hover:text-black p-3 md:p-0"
              to={"/products"}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="text-[14px] font-sans text-slate-200 md:text-[#76767676] transition-all duration-300 font-bold hover:text-black p-3 md:p-0"
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-[14px] font-sans text-slate-200 md:text-[#76767676] transition-all duration-300 font-bold hover:text-black p-3 md:p-0"
              to={"/contacts"}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              className="text-[14px] font-sans text-slate-200 md:text-[#76767676] transition-all duration-300 font-bold hover:text-black p-3 md:p-0"
              to={"/journal"}
            >
              Journal
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
