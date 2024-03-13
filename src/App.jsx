
import { Navbar, TimeLine } from "./components";

import { Contact } from "./components/Contact";
import { Card } from "./components/Card";
import { Zoom } from "react-awesome-reveal";

function App() {
  return (
    <main className="relative min-w-[320px]">
      <Navbar />
      <div className="max-w-4xl flex flex-col items-center  justify-center w-full mx-auto overflow-hidden px-5">
        {/* info */}
        <section className="flex flex-col  py-5 gap-2 " id='home'>
          <div className="flex gap-2 my-5">
            <img src="" alt="" className="rounded-full w-24 h-24 bg-gray-400" />
            <div>
              <p className="text-2xl font-bold">Contreras Pariona </p>
              <h4 className="text-lg ">Frontend Developer</h4>
            </div>
          </div>
          <h3 className="text-xl font-bold">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ut officia in molestias adipisci quod officiis
            facilis, consectetur similique animi magnam a, voluptas provident
            iusto consequuntur cupiditate ex, libero quibusdam.
          </p>
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-start  w-full ">
            <span className="bg-slate-100 px-5 select-none py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              NextJs
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              React
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              NodeJs
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral dark:text-neutral-content">
              TypeScript
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              JavaScript
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              PostgreSQL
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              Git
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              CSS
            </span>
            <span className="bg-slate-100 px-5 select-none  py-1 rounded-md dark:bg-neutral  dark:text-neutral-content">
              HTML
            </span>
          </div>
        </section>
        {/* Project */}
        <section className="w-full" id='project'>
          <h3 className="text-2xl font-semibold my-5">Project</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Zoom cascade>
              <Card />
              <Card />
              <Card />
              <Card />
            </Zoom>

          </div>
          <div className="w-full flex my-2">

            <button className="btn  mx-auto dark:dark:bg-neutral dark:text-neutral-content"> Ver más...</button>
          </div>
        </section>
        {/* TimeLine */}
        <TimeLine />
        {/* contact */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="w-full border-opacity-50">
        <div className="divider text-sm antialiased">Made by VContreras 2024</div>
      </footer>
      {/* <MyRoutes /> */}
    </main>
  );
}

export default App;
