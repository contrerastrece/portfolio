import { useEffect, useState } from "react";
import {
  IoCloseOutline,
  IoMoonOutline,
  IoReorderThreeOutline,
  IoSunnyOutline,
} from "react-icons/io5";
export const Navbar = () => {
  const getInitialTheme = () => {
    // Obtener el tema guardado en el localStorage
    const savedTheme = localStorage.getItem("theme");

    // Verificar si el sistema operativo tiene tema oscuro activado
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Definir el tema inicial basado en la información anterior
    const initialTheme = savedTheme || (prefersDarkMode ? "night" : "light");

    // Guardar el tema inicial en el localStorage si no estaba guardado previamente
    if (!savedTheme) {
      localStorage.setItem("theme", initialTheme);
    }

    // Retornar el tema inicial
    return initialTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleNavClick = (sectionId) => {
    const navbarHeight = document.querySelector("nav").offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionPosition = section.offsetTop - navbarHeight;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  };
  const sections = ["home", "project", "contact"];

  return (
    <nav className=" navbar bg-base-100 shadow-md  h-16 p-2 flex items-center justify-between sticky top-0 z-10 ">
      <div>
        <div className="hidden md:flex">
          <div className="flex gap-4 w-full justify-end">
            <ul className="flex gap-4  text-xl font-medium ">
              {sections.map((section, index) => (
                <li key={index} className="cursor-pointer">
                  <a onClick={() => handleNavClick(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dropdown  dropdown-bottom">
          <label
            className="btn btn-circle swap swap-rotate md:hidden "
            role="button"
            tabIndex={0}
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <IoReorderThreeOutline
              size={30}
              className="swap-off fill-current"
            />

            {/* close icon */}
            <IoCloseOutline size={30} className="swap-on fill-current" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {sections.map((section, index) => (
              <li key={index} className="cursor-pointer">
                <a onClick={() => handleNavClick(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Theme */}
      <div className="flex gap-2 bg-slate-50 p-2 rounded-md dark:bg-neutral">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleTheme}
            checked={theme === "dark"}
          />

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
