import { useState } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import icon2 from "../../assets/img/icon2.png";
import "./contact.css";

const ContactPage = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let Name, Value;
  const input = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setData({ ...data, [Name]: Value });
  };
  const senddata = async (e) => {
    e.preventDefault();
    alert('Mensaje Enviado')
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="left_box">
          <h3>contact info</h3>
          <div className="info">
            <div className="box">
              <div className="icon">
                <HiOutlineMail />
              </div>
              <div className="detail">
                <h4>mail us</h4>
                <p>contrerastrece@gmail.com</p>
                {/* <p>info@bluebase2.com</p> */}
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsTelephoneInbound />
              </div>
              <div className="detail">
                <h4>contact us</h4>
                <p>+51 970-195-610</p>
                {/* <p>+1 504-899-8221</p> */}
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FiMapPin />
              </div>
              <div className="detail">
                <h4>location</h4>
                <p>Cañete - Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_box">
          <img src={icon2} alt="icon"></img>
          <h2>
            Let&rsquo;s work <span>together</span>
          </h2>
          <form method="POST" className="form">
            <input
              type="text"
              name="Name"
              value={data.Name}
              placeholder="Name*"
              onChange={input}
            ></input>
            <input
              type="text"
              name="Email"
              value={data.Email}
              placeholder="E-mail*"
              onChange={input}
            ></input>
            <input
              type="text"
              name="Subject"
              value={data.Subject}
              placeholder="Subject*"
              onChange={input}
            ></input>
            <textarea
              placeholder="Message*"
              name="Message"
              value={data.Message}
              onChange={input}
            ></textarea>
            <button type="submit" onClick={senddata}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
