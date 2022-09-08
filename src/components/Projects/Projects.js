import React from "react";
import project from "../../photos/project.jpeg"
import project1 from "../../photos/project1.jpeg";
import project2 from "../../photos/project2.jpeg";
import salveg from "../../photos/salveg pic.png"
import pinit from "../../photos/pinit.png"
// import "../Projects/projects.css"



const Projects = () => {
  return (
    <div className="mt-32" style={{height:"50vh"}}>
      <div className="container">
        <div className=" w-full flex items-center flex-col justify-center">
          <h1 className="text-font text-2xl font-medium pb-8 w-40  text-center border-b-4 border-sr">
            Projects
          </h1>

          <p className=" font-medium text-font text-lg pt-4 w-96">
         Here are some group projects.. 
          </p>

      
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-5">
        
          <a target="_blank" rel="noreferrer" href="https://pinitapp.netlify.app/" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={pinit}
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
                alt=""
              />
           {/* <div class="overlay">
           <div class="text">Hello World</div>
           </div> */}
   
    
            </a>
            <a target="_blank" rel="noreferrer" href="https://salveg.netlify.app/" className="w-44 h-44 overflow-hidden rounded-full">
              <img 
                src={salveg}
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
                alt=""
              />
            </a>

          </div>

          <p className=" font-medium text-font text-lg pt-4 w-96">
         Here are some projects that I've completed.. 
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-5">
            <a target="_blank" rel="noreferrer" href="https://6266a23e646e5d0c1d2e69c7--joyful-wisp-cf281d.netlify.app/" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="ImageGallery App"
              />
      
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/IkramH98/back-end-practise.git" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project2}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="back-end App"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://62600aca80bddc00082232ee--cozy-gingersnap-cd218d.netlify.app/" className="w-44 h-44 overflow-hidden rounded-full">
              <img
                src={project1}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="Superman App"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
