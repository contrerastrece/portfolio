import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp, IoMailOpenOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className=" flex flex-col items-start w-full" id="contact">
      <h2 className="text-2xl md:text-3xl font-bold my-5 md:my-10 text-primary">
        Contact
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1 px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <IoMailOpenOutline size={25} className="" />
          </div>
          <p className="text-lg font-normal text-slate-500 dark:text-slate-400">Envíame un E-mail</p>
        </div>
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1  px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <AiOutlineLinkedin
              size={25}
              className="dark:text-primary text-sky-600"
            />
          </div>
          <p className="text-lg font-normal text-slate-500 dark:text-slate-400">Contactame en LinkedIn</p>
        </div>
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1 px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <IoLogoWhatsapp size={25} className="text-success" />
          </div>
          <p className="text-lg font-normal text-slate-500 dark:text-slate-400">Envíame un mensaje</p>
        </div>
      </div>
    </section>
  );
};
