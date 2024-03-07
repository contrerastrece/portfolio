import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
export const Navbar = () => {

  const getInitialTheme = () => {
    // Obtener el tema guardado en el localStorage
    const savedTheme = localStorage.getItem('theme');

    // Verificar si el sistema operativo tiene tema oscuro activado
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Definir el tema inicial basado en la información anterior
    const initialTheme = savedTheme || (prefersDarkMode ? 'night' : 'cmyk');

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
    const newTheme = theme === "cmyk" ? "night" : "cmyk";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-base border-b border-gray-300 md:flex h-16 p-2 items-center hidden">
      {/* title */}
      <h2 className="text-2xl font-semibold">PortFolio</h2>
      <div className="flex gap-4 w-full justify-end">
        <ul className="flex gap-4  text-xl font-medium ">
          <li className="flex items-center">About</li>
          <li className="flex items-center">Project</li>
          <li className="flex items-center">Contact</li>
        </ul>
        {/* iconos theme */}
        <div className="flex gap-2">
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
      </div>
    </nav>
  );
};
