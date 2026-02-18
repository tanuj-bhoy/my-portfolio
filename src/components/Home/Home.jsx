import "./Home.css";
import photo from "../../assets/photo.jpg";
import linkedinLogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/instagram.png";
import whatsappLogo from "../../assets/whatsapp.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">HELLO I AM,</div>
          <div className="line2">TANUJ BHOY</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "FULL STACK DEVELOPER",
                2000,
                "",
                1000,
                "MERN DEVELOPER",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/tanuj-bhoy-41040732a"
              target="_blank"
              rel="noreferrer"
            >
              <button className="social-btn">
                <img src={linkedinLogo} alt="LinkedIn" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/your_tanuj_08"
              target="_blank"
              rel="noreferrer"
            >
              <button className="social-btn">
                <img src={instagramLogo} alt="Instagram" />
              </button>
            </a>
            <a
              href="https://wa.me/+918815319163"
              target="_blank"
              rel="noreferrer"
            >
              <button className="social-btn">
                <img src={whatsappLogo} alt="WhatsApp" />
              </button>
            </a>
          </div>

          <div className="social-buttons">
            {/* Hire Me Button */}
            <Link to="contacts" smooth={true} duration={500}>
              <button className="social-btn">HIRE ME</button>
            </Link>

            {/* CV Download Button */}
            <a href="/CV.pdf" download>
              <button className="social-btn">C.V</button>
            </a>
          </div>

        </div>
      </div>

      <div className="righthome">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}
