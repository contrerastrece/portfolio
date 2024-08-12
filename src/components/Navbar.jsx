import { useEffect, useState } from "react";
import { IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { handleNavClick } from "../helpers";
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

  const sections = [
    { href: "about", title: "Sobre Mi" },
    { href: "skills", title: "Habilidaddes" },
    { href: "project", title: "Proyectos" },
    // { href: "experience", title: "Experiencia" },
    { href: "contact", title: "Contacto" },
  ];

  return (
    <div className="drawer z-50 sticky top-0 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar bg-base-100/70 backdrop-blur w-full">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <IoMenuOutline size={25} />
            </label>
          </div>
          <div className="mx-2 flex-1  px-2">
            <p className="cursor-pointer text-primary font-semibold text-xl" onClick={() => handleNavClick("home")}>
              VContreras
            </p>
          </div>
          {/* Theme */}
          <div className="block md:flex-none md:hidden">
            <a>
              {/* <div className="flex gap-2 bg-slate-50 p-2 rounded-md dark:bg-neutral"> */}
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={handleTheme}
                  checked={theme === "dark"}
                />

                {/* moon icon */}
                <div className={theme === "night" ? "swap-off" : "swap-on"}>
                  <IoMoonOutline size={20} />
                </div>

                {/* sun icon */}
                <div className={theme === "night" ? "swap-on" : "swap-off"}>
                  <IoSunnyOutline size={20} />
                </div>
              </label>
              {/* </div> */}
            </a>
          </div>
          <div className="hidden flex-none md:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {sections.map((section, index) => (
                <li key={index} className="cursor-pointer">
                  <a onClick={() => handleNavClick(section.href)}>
                    {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
                    {section.title}
                  </a>
                </li>
              ))}
              {/* Theme */}
              <li className=" ">
                {/* <a> */}
                {/* <div className="flex gap-2 bg-slate-50 p-2 rounded-md dark:bg-neutral"> */}
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={handleTheme}
                    checked={theme === "dark"}
                  />

                  {/* moon icon */}
                  <div className={theme === "night" ? "swap-off" : "swap-on"}>
                    <IoMoonOutline size={20} />
                  </div>

                  {/* sun icon */}
                  <div className={theme === "night" ? "swap-on" : "swap-off"}>
                    <IoSunnyOutline size={20} />
                  </div>
                </label>
                {/* </div> */}
                {/* </a> */}
              </li>
            </ul>
          </div>
        </nav>
        {/* Page content here */}
        {/* Content */}
      </div>
      <div className="drawer-side md:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li className="flex items-center justify-center">
            <div className="flex flex-col ">
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  {/* <img src="https://avatars.githubusercontent.com/u/29743309?v=4" /> */}
                  <img src="/profile.png" />

                </div>
              </div>
              <p className="text-lg md:text-3xl font-semibold text-primary">
                Contreras Pariona, Victor
              </p>
              <h4 className="text-normal text-slate-400 dark:text-slate-500">
                Frontend Developer
              </h4>
            </div>
          </li>
          <div className="divider"></div>
          {sections.map((section, index) => (
            <li key={index} className="cursor-pointer">
              <a onClick={() => handleNavClick(section.href)}>
                {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
                {section.title}
              </a>
            </li>
          ))}
          {/* <div className="divider"></div>
          <div>Redes Sociales</div> */}
        </ul>
      </div>
    </div>
  );
};
