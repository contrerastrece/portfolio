import { Fade } from "react-awesome-reveal";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export const TimeLine = () => {
  return (
    <section className="">
      <h3 className="text-2xl font-semibold my-5"> My Experience</h3>
      <Fade cascade direction="down" duration={500}>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <IoCheckmarkCircleSharp size={20} />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2018 Dic. - 2019 Feb.</time>
              <div className="text-lg font-black">IB-Group - Practicante de sistemas</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal role
              in establishing desktop publishing as a general office function.
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
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal role
              in establishing desktop publishing as a general office function.
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
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal role
              in establishing desktop publishing as a general office function.
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
              <div className="text-lg font-black">INTEGRATEC - Practicante de sistemas</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of consumer desktop
              offerings since its debut in August 1998, and has evolved through
              seven distinct forms
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
              iPhone is a line of smartphones produced by Apple Inc. that use own
              iOS mobile operating system. The first-generation iPhone was announced
              by then-Apple CEO Steve Jobs on January 9, 2007.
            </div>
            <hr />
          </li>
        </ul>
      </Fade>
    </section>
  );
};
