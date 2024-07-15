import { Navbar, TimeLine } from "./components";

import { Contact } from "./components/Contact";
import { Card } from "./components/Card";
import { Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { GoPaperAirplane } from "react-icons/go";

function App() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };
  return (
    <main className="relative min-w-[320px]">
      <Navbar />
      <div className="max-w-6xl flex flex-col items-center  justify-center w-full mx-auto overflow-hidden px-5">
        {/* info */}
        <section className="flex flex-col gap-2 " id="home">
          {/* <div className="flex gap-2  items-center">
            <Zoom triggerOnce>
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </Zoom>

            <Fade direction="right" triggerOnce={true}>
              <div className="">
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  Contreras Pariona, Victor
                </p>
                <h4 className="text-lg text-slate-400 dark:text-slate-500">
                  Frontend Developer
                </h4>
              </div>
            </Fade>
          </div> */}
          {/* HERO */}
          <div className="hero min-h-screen pt-_[3.5rem]">
            <div className="hero-content flex-col">
              <Zoom triggerOnce>
                <div className="avatar online">
                  <div className="w-32 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </Zoom>
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold">
                  Hola, soy <span className="text-primary">Victor</span>.
                </h1>
                <p className="py-6 text-left text-xl text-slate-500">
                  Ser desarrollador Front End es increíble. No solo creamos
                  interfaces hermosas, también diseñamos experiencias intuitivas
                  que facilitan la vida de las personas.
                </p>
                {/* btn Download CV */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="btn btn-primary w-full sm:w-auto ">
                    Contacto <GoPaperAirplane size={20} />
                  </button>
                  <button className="btn btn-neutral btn-outline w-full sm:w-auto group">
                    Descargar CV
                    <HiArrowDownTray
                      size={20}
                      className="group-hover:animate-bounce ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Me */}
          <h3 className="text-xl md:text-2xl font-semibold my-5 mb-0 text-primary">
            Sobre Mí
          </h3>
          <p className="text-[16px] text-slate-500">
            ¡Hola! Soy bachiller en Ingeniería de Sistemas por la UNAC, y estoy
            emocionado por comenzar mi camino como Desarrollador Frontend. Mis
            proyectos personales reflejan mi pasión y habilidades en tecnologías
            como React y Node.js.
          </p>
          <p className="text-[16px] text-slate-500 mt-4">
            Estoy constantemente buscando aprender y mejorar, ya sea a través de
            cursos en línea o explorando nuevas herramientas y frameworks. Me
            encanta enfrentar desafíos y encontrar soluciones creativas que
            mejoren la experiencia del usuario.
          </p>
          <p className="text-[16px] text-slate-500 mt-4">
            Además, disfruto colaborar con otros y compartir conocimientos en
            comunidades de desarrollo. Estoy listo para aportar mi energía y
            entusiasmo en proyectos innovadores. ¡Espero tener la oportunidad de
            crear algo increíble juntos!
          </p>

          <h3 className="text-xl md:text-2xl font-semibold my-5 mb-0 text-primary">
            My Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-start  w-full ">
            <span className="bg-slate-100 px-5 text-[12px] select-none py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              NextJs
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral dark:text-slate-400">
              React
            </span>
            <span className="bg-slate-100  text-[12px] px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-slate-400">
              NodeJs
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral dark:text-slate-400">
              TypeScript
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              JavaScript
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              Express
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              PostgreSQL
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              Git
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              CSS
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              HTML
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              TailwindCSS
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              Supabase
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              Zustand
            </span>
            <span className="bg-slate-100 px-5 text-[12px] select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
              Tanstack
            </span>
          </div>
        </section>
        {/* Project */}
        <section className="w-full" id="project">
          <h3 className="text-xl md:text-2xl font-semibold my-5 text-primary">
            Proyectos personales
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <Zoom cascade key={index} damping={1} triggerOnce>
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
