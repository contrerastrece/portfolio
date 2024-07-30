// import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Card } from "./Card";
import { projectList } from "./Data";

export const Project = () => {
  // const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const [visibleProjects, setVisibleProjects] = useState(4);

  // const showAllProjects = () => {
  //   setVisibleProjects(projects.length);
  // };
  return (
    <section className="w-full " id="project">
      <h3 className="text-xl md:text-2xl font-semibold text-primary my-5">
        Proyectos personales
      </h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
        {projectList.slice(0, 4).map((project) => (
          <Zoom cascade key={project.id} damping={1} triggerOnce>
            <Card data={project} />
          </Zoom>
        ))}
      </div>
      {/* {visibleProjects < projects.length ? (
        <div className="w-full flex my-2">
          <button
            className="btn btn-outline mx-auto btn-primary"
            onClick={showAllProjects}
          >
            Ver más...
          </button>
        </div>
      ) : (
        ""
      )} */}
    </section>
  );
};
