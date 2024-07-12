import { Fade } from "react-awesome-reveal";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export const TimeLine = () => {
  return (
    <section className="">
      <h3 className="text-2xl md:text-3xl font-semibold my-5 md:my-10"> My Experience</h3>
      <Fade cascade direction="down" duration={500}>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2018 Dic. - 2019 Feb.</time>
              <div className="text-lg font-black">
                IB-Group - Practicante de sistemas
              </div>
              Mi rol como Practicante de Sistemas en Corporación IBGroup implicó
              el mantenimiento de sitios webs a través de CPanel y el apoyo en
              la administración de bases de datos PHP-MySQL. Además, brindé
              soporte técnico para garantizar la continuidad operativa de los
              bienes informáticos y programas.
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-end  mb-10">
              <time className="font-mono italic">2018 Dic. - 2019 Feb.</time>
              <div className="text-lg font-black">MIATECH SAC - Digitador</div>
              En Miatech SAC, desempeñé el rol de Digitador, donde fui
              responsable de ingresar facturas al sistema utilizando el
              aplicativo AS/400. Además, desarrollé hojas de cálculo para
              facilitar el seguimiento y la gestión de datos. Esta experiencia
              me permitió adquirir habilidades clave en la manipulación de datos
              y sistemas de gestión.
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2019 Set. - 2020 Feb.</time>
              <div className="text-lg font-black">CGI - Digitador</div>
              Durante mi tiempo en CGI (Consorcio de Gestión de Información)
              como Digitador , tuve la oportunidad de trabajar con bases de
              datos de la empresa. Mi rol incluía tareas como digitar, verificar
              y validar información para mantener la integridad de los datos.
              Además, desarrollé habilidades en búsqueda avanzada en Excel para
              mejorar la eficiencia en la manipulación de datos.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">
                INTEGRATEC - Practicante de sistemas
              </div>
              Durante mi periodo como Practicante en IntegraTec, tuve la
              oportunidad de trabajar en el mantenimiento de páginas web,
              brindar soporte técnico y realizar el ensamblaje y mantenimiento
              de PC&lsquo;s. Fue una experiencia valiosa donde pude desarrollar
              habilidades prácticas y técnicas.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2021 Set. - 2023 May.</time>
              <div className="text-lg font-black">RENIEC - Registrador</div>
              Tuve el privilegio de ser parte de un equipo dedicado a
              simplificar los trámites de identificación. Desde la captura de
              datos hasta la inscripción, renovación y rectificación de
              documentos, participé en facilitar estos procesos importantes para
              personas de todas las edades.
            </div>
            <hr />
          </li>
        </ul>
      </Fade>
    </section>
  );
};
