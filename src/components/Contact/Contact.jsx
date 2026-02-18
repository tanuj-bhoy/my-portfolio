import React from "react";
import photo from "../../assets/photo.jpg";
import linkedinLogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/instagram.png";
import whatsappLogo from "../../assets/whatsapp.png";
import "./Contact.css";

export default function Contact() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="contacts">
      <div className="leftcontact">
        <img src={photo} alt="Tanuj Bhoy" />

        {/* Social Buttons below photo */}
        <div className="contact-social-buttons">
          <a href="https://www.linkedin.com/in/tanuj-bhoy-41040732a" target="_blank" rel="noreferrer">
            <button className="contact-social-btn">
              <img src={linkedinLogo} alt="LinkedIn" />
            </button>
          </a>
          <a href="https://www.instagram.com/your_tanuj_08" target="_blank" rel="noreferrer">
            <button className="contact-social-btn">
              <img src={instagramLogo} alt="Instagram" />
            </button>
          </a>
          <a href="https://wa.me/+918815319163" target="_blank" rel="noreferrer">
            <button className="contact-social-btn">
              <img src={whatsappLogo} alt="WhatsApp" />
            </button>
          </a>
        </div>
      </div>

      <div className="rightcontact">
        <h1>Contact <span>Us</span></h1>
        <p>
          Looking for a <a href="#">Web Developer?</a>. I specialize in building modern, responsive websites. Feel free to connect with me via phone: <a href="tel:8815319163">8815319163</a> or email: <a href="mailto:tanujcoder497001@gmail.com">tanujcoder497001@gmail.com</a>
        </p>

        <form action="https://formspree.io/f/mblzjeok" method="POST">
          <input name="Username" type="text" placeholder="Your Name" />
          <input name="Email" type="email" placeholder="E-mail" />
          <input name="Subject" type="text" placeholder="Write a Subject" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <input type="submit" id="btn" value="SUBMIT" />
        </form>

        {/* Scroll to Top Button */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </div>
  );
}
