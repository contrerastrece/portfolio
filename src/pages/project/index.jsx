import "./work.css";
import project1 from '../../assets/img/project1.jpeg';
import project2 from '../../assets/img/project2.jpeg';
import project3 from '../../assets/img/project3.jpeg';
import project4 from '../../assets/img/project4.jpeg';
import project5 from '../../assets/img/project5.jpeg';
import project6 from '../../assets/img/project6.jpeg';
import star2 from '../../assets/img/star-2.png';
const ProjectPage = () => {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="left">
            <div className="conatnt">
              <div className="box">
                <div className="img_box">
                  <img src={project1} alt="project"></img>
                </div>
                <p>web design</p>
                <h3>dynamic</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src={project2} alt="project"></img>
                </div>
                <p>photography</p>
                <h3>disel h1</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="heading">
              <img src={star2} alt="star"></img>
              <h2>all project</h2>
              <img src={project2} alt="star"></img>
            </div>
            <div className="contant">
              <div className="box">
                <div className="img_box">
                  <img src={project3} alt="project"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src={project4} alt="project"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src={project5} alt="project"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src={project6} alt="project"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectPage