import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
export const Navbar = () => {
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
        <div className="btn btn-active btn-sm btn-square">
        <IoSunnyOutline size={20} />

        </div >
        <div className="btn btn-sm btn-square">
        <IoMoonOutline size={20} />

        </div>
      </div>
    </div>
   </nav>
  )
}
