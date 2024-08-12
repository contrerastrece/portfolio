import { TbBrandGithub } from "react-icons/tb";
// import { IoEyeOutline } from "react-icons/io5";
import project from "../img/project-1.png";

export const Card = ({data}) => {
  return (
    // <div className=" relative flex flex-col sm:flex-row bg-base-100 sm:h-40 dark:bg-slate-800 rounded-md overflow-hidden shadow-md">
    //   <img
    //     src={project}
    //     alt="Album"
    //     className="sm:aspect-square h-40 w-full object-cover "
    //   />
    //   <div className="card-body  p-1 py-2">
    //     <h2 className="card-title line-clamp-1 text-slate-500 text-lg ">New album is released!</h2>
    //     <p className="text-xs  line-clamp-2 max-h-11">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
    //       inventore.
    //     </p>
    //     <div className="card-actions justify-end mt-2 ">
    //       <button className="btn btn-xs md:btn-sm font-light dark:dark:bg-neutral dark:text-neutral-content">
    //         <IoEyeOutline size={20} /> Preview
    //       </button>
    //       <button className="btn btn-xs md:btn-sm font-light dark:dark:bg-neutral dark:text-neutral-content">
    //         <TbBrandGithub size={20} /> Github
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className=" card bg-base-100 image-full md:w-96 shadow-md  border-red-600">
      <figure className="">
        <img
          src={data.image || project}
          alt={data.title}
          className="aspect-video rounded-md"
        />
      </figure>
      <div className="card-body  rounded-md">
        <h2 className="card-title">{data.title}</h2>
        <p className="text-sm">{data.description}</p>
        <div className="card-actions justify-end ">
          {/* <a href={data.linkPreview} target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-md btn-outline text-sky-400  text-xs font-normal"> <IoEyeOutline size={15} /> Ver</a> */}
          <a href={data.linkGitHub} target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-md btn-outline text-sky-400 text-xs font-normal"><TbBrandGithub size={15} />Github</a>
        </div>
      </div>
    </div>
  );
};
