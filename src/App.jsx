import { Navbar, TimeLine } from "./components";

import { Contact } from "./components/Contact";
import { Card } from "./components/Card";
import { Fade, Zoom } from "react-awesome-reveal";
import { useState } from "react";

function App() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };
  return (
    <main className="relative min-w-[320px]">
      <Navbar />
      <div className="max-w-4xl flex flex-col items-center  justify-center w-full mx-auto overflow-hidden px-5">
        {/* info */}
        <section className="flex flex-col  py-5 gap-2 " id="home">
          <div className="flex gap-2 my-5  items-center">
            <Fade direction="left">
              <img
                src=""
                alt=""
                className="rounded-full w-24 h-24 bg-gray-400"
              />
            </Fade>

            <Fade direction="right">
              <div className="">
                <p className="text-2xl font-bold">Contreras Pariona, Victor </p>
                <h4 className="text-lg ">Frontend Developer</h4>
              </div>
            </Fade>
          </div>
          <h3 className="text-xl font-bold">About Me</h3>
          <p>
            ¡Hola! Soy bachiller en Ingeniería de Sistemas por la UNAC y estoy
            emocionado por comenzar mi viaje como Desarrollador Frontend. Mis
            proyectos personales muestran mi pasión y habilidades. Siempre en
            búsqueda de aprender más. ¡Listo para trabajar juntos y crear algo
            increíble!
          </p>
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-start  w-full ">
            <span className="bg-slate-100 px-5 select-none py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              NextJs
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              React
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              NodeJs
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              TypeScript
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              JavaScript
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              PostgreSQL
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              Git
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              CSS
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              HTML
            </span>
          </div>
        </section>
        {/* Project */}
        <section className="w-full" id="project">
          <h3 className="text-2xl font-semibold my-5">Project</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <Zoom cascade key={index} damping={1}>
                <Card />
              </Zoom>
            ))}
          </div>
          {visibleProjects < projects.length ? (
            <div className="w-full flex my-2">
              <button
                className="btn  mx-auto dark:dark:bg-neutral dark:text-neutral-content"
                onClick={showAllProjects}
              >
                {" "}
                Ver más...
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
        {/* TimeLine */}
        <TimeLine />
        {/* contact */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="w-full border-opacity-50">
        <div className="divider text-sm antialiased">
          Made by VContreras 2024
        </div>
      </footer>
      {/* <MyRoutes /> */}
    </main>
  );
}

export default App;
