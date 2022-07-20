import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Navbarimage from '../../assets/navbar.jpg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoEnterOutline} from 'react-icons/io5'
import NavLinks from "./NavLinks.jsx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <img src={Navbarimage}/>
    <nav className="bg-blue ">
      <div className="flex items-center font-medium justify-between">
        <div className="flex flex-row gap-4 ">
        <AiOutlineShoppingCart className="w-10 h-10 cursor-pointer"></AiOutlineShoppingCart>
        <div className="shadow-md  w-50 font-semibold  flex flex-row items-center gap-3 pr-3   cursor-pointer ">
          <IoEnterOutline className="w-7 h-7"></IoEnterOutline>
        ورود و ثبت نام
        
        </div>
        </div>
        <div className="flex flex-row items-center -gap-20">
      <input type="text" className="w-50 h-8 bg-gray-200  rounded-md  "  placeholder="...جست و جو کنید"/>
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
       
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div> 
        </div> 
        </div>

        <div className="flex  font-medium justify-end">
        <ul className="md:flex hidden font-sans font-medium items-center gap-8">
           <li>
            <Link to="/" className="py-7 px-3 inline-block">
             !فروشنده شوید
            </Link>
          </li>
           <li>
            <Link to="/" className="py-7 px-3 inline-block">
             سوالی دارید؟
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              شگفت انگیزها 
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              تخفیف ها و پیشنهادها
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              پرفروش ترین ها
            </Link>
          </li>
        
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              سوپرمارکت
            </Link>
          </li>
     
     
          <NavLinks />
        </ul>
  
        <ul
          className={`
        md:hidden bg-white fixed w-full z-40  top-10 overflow-y-auto bottom-0 py-30 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
       <li>
            <Link to="/" className="py-7 px-3 inline-block">
              سوپرمارکت
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              پرفروش ترین ها
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              تخفیف ها و پیشنهادها
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              شگفت انگیزها 
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
             سوالی دارید؟
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
             !فروشنده شوید
            </Link>
          </li>
          <NavLinks />
         
        </ul>
        </div>
    </nav>
    </>

  );
};

export default Navbar;