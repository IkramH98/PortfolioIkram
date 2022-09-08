import React from "react";
import "./header.css"
import { useState } from "react";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    window.addEventListener("scroll", (e) => {
        setScrollPosition(window.scrollY);
      });
const scrollToHome = ()=>{
  window.scrollTo(0,0)
}
const scrollToAbout = ()=>{
  window.scrollTo(0,800)
}
const scrollToProject = ()=>{
  window.scrollTo(0,1701)
}
const ScrollTOContact = ()=>{
  window.scrollTo(0,2510)
}
  return (
    <div className=" fixed bg-sr w-full top-0 left-0 z-50">
      <div className="w-full flex items-center justify-center h-full">
        <div className="grid grid-cols-4 gap-4 items-center">
          <div onClick={scrollToHome} className={(scrollPosition > -1 && scrollPosition < 749) ? "cursor-pointer py-3 text-tr border-b-2 border-tr font-bold h-full flex items-center justify-center": "cursor-pointer py-3 hover:border-b-2 hover:border-tr text-gray-300 font-bold h-full flex items-center justify-center"}>Home</div>
          <div onClick={()=>scrollToAbout()} className={(scrollPosition > 750 && scrollPosition < 1700) ? "cursor-pointer py-3 text-tr border-b-2 border-tr font-bold h-full flex items-center justify-center": "cursor-pointer py-3 hover:border-b-2 hover:border-tr text-gray-300 font-bold h-full flex items-center justify-center"}>About</div>
          <div onClick={()=>scrollToProject()} className={(scrollPosition > 1701 && scrollPosition < 2500) ? "cursor-pointer py-3 text-tr border-b-2 border-tr font-bold h-full flex items-center justify-center": "cursor-pointer py-3 hover:border-b-2 hover:border-tr text-gray-300 font-bold h-full flex items-center justify-center"}>Projects</div>
          <div onClick={()=>ScrollTOContact()} className={(scrollPosition > 2501) ? "cursor-pointer py-3 text-tr border-b-2 border-tr font-bold h-full flex items-center justify-center": "cursor-pointer py-3 hover:border-b-2 hover:border-tr text-gray-300 font-bold h-full flex items-center justify-center"}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
