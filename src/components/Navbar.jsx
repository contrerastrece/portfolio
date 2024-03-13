import { useEffect, useState } from "react";
import { IoCloseOutline, IoMoonOutline, IoReorderThreeOutline, IoSunnyOutline } from "react-icons/io5";
export const Navbar = () => {

  const getInitialTheme = () => {
    // Obtener el tema guardado en el localStorage
    const savedTheme = localStorage.getItem('theme');

    // Verificar si el sistema operativo tiene tema oscuro activado
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Definir el tema inicial basado en la información anterior
    const initialTheme = savedTheme || (prefersDarkMode ? 'night' : 'light');

    // Guardar el tema inicial en el localStorage si no estaba guardado previamente
    if (!savedTheme) {
      localStorage.setItem('theme', initialTheme);
    }

    // Retornar el tema inicial
    return initialTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (sectionId) => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionPosition = section.offsetTop - navbarHeight;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  };


  return (
    <nav className=" navbar bg-base-100 shadow-md  h-16 p-2 flex items-center justify-between sticky top-0 z-10 ">
      <div>


        <div className="hidden md:flex">
          <div className="flex gap-4 w-full justify-end">
            <ul className="flex gap-4  text-xl font-medium ">
              <li className="flex items-center"><button onClick={() => handleNavClick('home')}>About</button></li>
              <li className="flex items-center"><button onClick={() => handleNavClick('project')}>Project</button></li>
              <li className="flex items-center"><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="dropdown  dropdown-bottom">


          <label className="btn btn-circle swap swap-rotate md:hidden " role="button" tabIndex={0}>

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            {/* <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg> */}
            <IoReorderThreeOutline size={30} className="swap-off fill-current" />

            {/* close icon */}
            {/* <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg> */}
            <IoCloseOutline size={30} className="swap-on fill-current" />


          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a onClick={() => handleNavClick('home')}>About</a></li>
            <li><a onClick={() => handleNavClick('project')}>Project</a></li>
            <li><a onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Theme */}
      <div className="flex gap-2 bg-slate-50 p-2 rounded-md dark:bg-neutral">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleTheme} checked={theme === 'dark'} />

          {/* moon icon */}
          <div className={theme === "night" ? "swap-off" : "swap-on"}>
            <IoMoonOutline size={25} />
          </div>

          {/* sun icon */}
          <div className={theme === "night" ? "swap-on" : "swap-off"}>
            <IoSunnyOutline size={25} />
          </div>
        </label>
      </div>
    </nav>
  );
};
