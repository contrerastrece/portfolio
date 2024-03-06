import "./about.css";
import star2 from "../../assets/img/star-2.png";
import icon2 from "../../assets/img/icon2.png";
import me2 from "../../assets/img/me2.png";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="top_container">
          <div className="left_box">
            <div className="contant">
              <div className="img_box">
                <img src={me2} alt="me"></img>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="contant">
              <div className="heading">
                <img src={star2} alt="star"></img>
                <h2>self-summary</h2>
                <img src={star2} alt="star"></img>
              </div>
              <div className="deatil">
                <img src={icon2} alt="icon"></img>
                <div className="info">
                  <p className="text-xl">
                    Soy un desarrollador front-end Jr, especializado en diseño
                    web y con enfoque en React. Aunque estoy en las primeras
                    etapas de mi carrera, poseo conocimientos diversificados
                    adquiridos en varios campos e industrias. Estoy entusiasmado
                    por seguir creciendo y desarrollándome en el ámbito de React
                    y otras tecnologías relacionadas.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid_conatiner">
          <div className="container">
            <div className="exp">
              <h2>experience</h2>
              <div className="box">
                <p>2007-2017</p>
                <h3>Framer Designer & Developer</h3>
                <p>Bluebase Designs</p>
              </div>
              <div className="box">
                <p>2017-2023</p>
                <h3>Front-End Developer</h3>
                <p>Larsen & Toubro</p>
              </div>
            </div>
            <div className="edu">
              <h2>Educación</h2>
              <div className="box">
                <p>2013-2018</p>
                <h3>Bachiller Ing. de Sistemas</h3>
                <p>UNAC (Universidad Nacional del Callao)</p>
              </div>
              <div className="box">
                <h3>Inglés - Básico</h3>
                <p>ICPNA (Instituto Cultural Peruano Norteamericano)</p>
              </div>
              <div className="box">
                <h3>Portugues - Básico</h3>
                <p>CIUNAC (Centro de Idiomas de la Universidad Nacional del Callao)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
