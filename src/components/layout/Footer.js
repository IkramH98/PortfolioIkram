import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowUp
} from "react-icons/ai";
const Footer = () => {
    const scrollToTop = ()=>{
        window.scrollTo(0,0)
    }
  return (
    <div style={{height:"70vh"}} className="relative w-full overflow-hidden mt-72 lg:mt-0">
      <div
        className=" absolute bottom-0  left-0 flex items-center justify-start pt-10 flex-col"
        style={{
          height: "80vh",
          borderRadius: "50%",
          marginBottom: "-40vh",
          marginLeft: "-10vw",
          width: "120vw",
          background: "#2E3445",
        }}
      >
        <div>
          <p className=" text-tr">Ikranidil@hotmail.co.uk</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <a
            href="https://github.com/IkramH98"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-font hover:bg-tr text-pr p-2 rounded-full"
          >
            <AiFillGithub className=" w-7 h-7 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/ikram-hassan-aa5287bb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-font hover:bg-tr text-pr p-2 rounded-full"
          >
            <AiFillLinkedin className=" w-7 h-7 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/ikram_ayax"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-font hover:bg-tr text-pr p-2 rounded-full"
          >
            <AiFillTwitterCircle className=" w-7 h-7 cursor-pointer" />
          </a>
        </div>
        <p className="text-xs text-sr mt-5">© 2022 Ikram Hassan</p>
        <div
           onClick={scrollToTop}
            className="bg-font text-pr mt-5 hover:bg-tr p-2 rounded-full cursor-pointer"
          >
            <AiOutlineArrowUp className=" w-9 h-9 cursor-pointer" />
          </div>
      </div>
    </div>
  );
};

export default Footer;
