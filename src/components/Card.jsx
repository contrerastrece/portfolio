import { TbBrandGithub } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
export const Card = () => {
  return (
    <div className=" relative flex flex-col sm:flex-row bg-base-100 sm:h-40 dark:bg-slate-800 rounded-md overflow-hidden shadow-md">
      <img
        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        alt="Album"
        className="sm:aspect-square h-40 w-full object-cover "
      />
      <div className="card-body  p-1 py-2 ">
        <h2 className="card-title line-clamp-1 ">New album is released!</h2>
        <p className="text-sm  line-clamp-2 max-h-11">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          inventore.
        </p>
        <div className="card-actions justify-end mt-2 ">
          <button className="btn btn-xs  dark:dark:bg-neutral dark:text-neutral-content">
            <IoEyeOutline size={20} /> Preview
          </button>
          <button className="btn btn-xs dark:dark:bg-neutral dark:text-neutral-content">
            <TbBrandGithub size={20} /> Github
          </button>
        </div>
      </div>
    </div>
  );
};
