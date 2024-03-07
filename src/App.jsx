import { MyRoutes, Navbar } from "./components";

function App() {
  return (
    <main className="p-5">
      <Navbar />
      <div className="max-w-4xl flex flex-col items-center border justify-center w-full mx-auto overflow-hidden">

        {/* info */}
        <section className="flex flex-col  py-5 gap-2">
          <div className="flex gap-2 my-2">
            <img src="" alt="" className="rounded-full w-24 h-24 bg-gray-400" />
            <div>
              <p className="text-2xl font-bold">Contreras Pariona </p>
              <h4 className="text-lg ">Frontend Developer</h4>

            </div>
          </div>
          <h3 className="text-xl font-bold">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ut officia in molestias adipisci quod officiis facilis,
            consectetur similique animi magnam a, voluptas provident iusto
            consequuntur cupiditate ex, libero quibusdam.
          </p>
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-start  w-full ">
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">NextJs</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">React</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">NodeJs</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">TypeScript</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">JavaScript</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">Git</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">CSS</span>
            <span className="bg-slate-100 px-5 py-1 rounded-md font-semibold">HTML</span>
          </div>
        </section>
        {/* Project */}
        <section>
          <h2 className="text-xl font-bold my-2">Project</h2>
          <div className="carousel carousel-end flex gap-2 rounded-none border ">
            <div className="carousel-item flex flex-col gap-2">
              <div className="w-72 h-72 bg-slate-400 rounded-lg"></div>
              {/* <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink"  className="rounded-lg"/> */}
              <h3 className="font-semibold text-sm">Project 1</h3>
            </div>
            <div className="carousel-item flex flex-col gap-2">
              <div className="w-72 h-72 bg-slate-400 rounded-lg"></div>
              {/* <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" className="rounded-lg" /> */}
              <h3 className="font-semibold text-sm">Project 2</h3>
            </div>
            <div className="carousel-item flex flex-col gap-2">
              <div className="w-72 h-72 bg-slate-400 rounded-lg"></div>
              {/* <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" className="rounded-lg" /> */}
              <h3 className="font-semibold text-sm">Project 3</h3>
            </div>
            <div className="carousel-item flex flex-col gap-2">
              <div className="w-72 h-72 bg-slate-400 rounded-lg"></div>
              {/* <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" className="rounded-lg" /> */}
              <h3 className="font-semibold text-sm">Project 4</h3>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <button className="btn">Ver todo ...</button>
          </div>
        </section>
      </div>

      <MyRoutes />
    </main>
  );
}

export default App;
