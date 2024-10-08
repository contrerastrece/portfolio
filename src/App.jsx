// import { Navbar, TimeLine } from "./components";
import { Navbar } from "./components";
import { Contact } from "./components/Contact";
import { Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { HiArrowDownTray } from "react-icons/hi2";
import { GoDatabase, GoPaperAirplane } from "react-icons/go";
import { SkillsData } from "./components/Data";
import { SkillItem } from "./components/SkillItem";
import { CiMonitor } from "react-icons/ci";
import { handleNavClick } from "./helpers";
import { Project } from "./components/Project";

function App() {
  return (
    <main className="relative min-w-[320px] max-w-4xl mx-auto">
      <Navbar />
      <div className="max-w-6xl flex flex-col items-center  justify-center w-full mx-auto overflow-hidden px-5">
        {/* HERO */}
        <section className="hero relative my-0 my-hero " id="home">
          <div className="hero-content flex-col  ">
            <Zoom triggerOnce>
              <div className="avatar ">
                <div className="w-40 rounded-full">
                  {/* <img src="https://avatars.githubusercontent.com/u/29743309?v=4" /> */}
                  <img src="/profile.png" />
                </div>
              </div>
            </Zoom>
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-4xl font-bold">
                Hola!👋, soy <br className="block md:hidden" />
                <span className="text-primary text-2xl md:text-4xl">
                  {
                    <Typewriter
                      words={[
                        "Victor Contreras P.",
                        "Frontend developer",
                        "Desarrollador web",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      //  onLoopDone={handleDone}
                      //  onType={handleType}
                    />
                  }
                </span>
              </h1>
              <p className="py-6 text-left text-sm md:text-base md:top-5 relative text-slate-500">
                Ser desarrollador Web es increíble. No solo creamos
                interfaces hermosas, también diseñamos experiencias intuitivas
                que facilitan la vida de las personas.
              </p>
              {/* btn Download CV */}
              <div className="flex flex-col sm:flex-row gap-4 md:top-10 relative ">
                <a
                  onClick={() => handleNavClick("contact")}
                  className="btn btn-primary w-full sm:w-auto "
                >
                  Contacto <GoPaperAirplane size={20} />
                </a>
                <a
                  href="public/cv-victor-contreras-pariona.pdf"
                  download
                  className="btn btn-neutral btn-outline w-full sm:w-auto group"
                >
                  Descargar CV
                  <HiArrowDownTray
                    size={20}
                    className="group-hover:animate-bounce ml-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="" id="about">
          <h3 className="text-xl md:text-2xl font-semibold text-primary my-3">
            Sobre Mí
          </h3>
          <p className="text-sm md:text-[16px]  text-slate-500">
            ¡Hola! Soy VICTOR, bachiller en Ingeniería de Sistemas por la UNAC, y estoy
            emocionado por comenzar mi camino como Desarrollador Web. Mis
            proyectos personales reflejan mi pasión y habilidades en tecnologías
            como React y Node.js.
          </p>
          <p className="text-sm md:text-[16px] text-slate-500 mt-4">
            Estoy constantemente buscando aprender y mejorar, ya sea a través de
            cursos en línea o explorando nuevas herramientas y frameworks. Me
            encanta enfrentar desafíos y encontrar soluciones creativas que
            mejoren la experiencia del usuario.
          </p>
          <p className="text-sm md:text-[16px] text-slate-500 mt-4">
            Además, disfruto colaborar con otros y compartir conocimientos en
            comunidades de desarrollo. Estoy listo para aportar mi energía y
            entusiasmo en proyectos innovadores. ¡Espero tener la oportunidad de
            crear algo increíble juntos!
          </p>
        </section>

        {/* skills */}
        <section className=" w-full" id="skills">
          <h3 className="text-xl md:text-2xl font-semibold  text-primary my-5">
            Mis Habilidades
          </h3>
          <div className="gap-3 justify-start  w-full">
            <div className=" rounded-md">
              <h3 className="flex  my-5 mb-2 gap-2 text-slate-500">
                <CiMonitor size={20} className="text-primary" />
                Frontend
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {SkillsData.filter((s) => s.stack === "frontend").map((s) => (
                  <SkillItem key={s.title} title={s.title} icono={s.icono} />
                ))}
              </div>
            </div>
            <div className="rounded-md">
              <h3 className="flex gap-2 my-5 mb-2 text-slate-500">
                <GoDatabase size={20} className="text-primary font-thin" />
                Backend
              </h3>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
                {SkillsData.filter((s) => s.stack === "backend").map((s) => (
                  <SkillItem key={s.title} title={s.title} icono={s.icono} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project */}
        <Project />

        {/* TimeLine */}
        {/* <TimeLine /> */}

        {/* contact */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="w-full -opacity-50">
        <div className="divider text-xs">Made by VContreras 2024</div>
      </footer>
    </main>
  );
}

export default App;
