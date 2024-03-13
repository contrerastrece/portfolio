import { AiOutlineLinkedin } from "react-icons/ai"
import { IoLogoWhatsapp, IoMailOpenOutline } from "react-icons/io5"

export const Contact = () => {
  return (
    <section className=" flex flex-col items-start w-full" id='contact'>
      <h2 className="text-2xl font-bold my-2">Contact</h2>
      <div className="flex flex-col gap-2">
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1 px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <IoMailOpenOutline size={25} />
          </div>
          <p>Send me an email</p>
        </div>
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1  px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <AiOutlineLinkedin size={25} />
          </div>
          <p>Connect on LinkedIn</p>
        </div>
        <div className="flex border items-center gap-2 btn btn-ghost justify-start">
          <div className=" p-1 px-2 rounded-md bg-slate-200 dark:bg-neutral dark:text-neutral-content font-normal">
            <IoLogoWhatsapp size={25} />
          </div>
          <p>Send me an message</p>
        </div>
      </div>
    </section>
  )
}
