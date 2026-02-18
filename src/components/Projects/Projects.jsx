import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="projects-heading">EXPERIENCED PROJECTS</h1>

      {/* Portfolio Project */}
      <div className="project-card">
        <div className="project-content">
          <h2>Tanuj Portfolio</h2>
          <p className="project-description">
            “My portfolio is designed using React to create a responsive, interactive, and visually engaging platform. It showcases smooth animations, advanced scrolling effects, and my ability to combine creativity with technical skills in building functional web applications.” <b>You can visit my website by clicking on live button!</b>
          </p>
          <div className="project-buttons">
            <a href="#" className="btn btn-live">
              Live <span className="btn-icon">↗</span>
            </a>
            <a href="#" className="btn btn-github">
              GitHub <span className="btn-icon">⤴</span>
            </a>
          </div>
        </div>
      </div>

      {/* Food Delivery Project */}
      <div className="project-card">
        <div className="project-content">
          <h2>Food Delivery Website</h2>
          <p className="project-description">
            "A responsive food delivery website with modern UI, allowing users to browse menus, add items to cart, and place orders online. Built with React.js and featuring a clean, user-friendly interface with smooth animations and responsive design." <b>You can visit my website by clicking on live button!</b>
          </p>
          <div className="project-buttons">
            <a href="http://food-delivery-website-tanuj.netlify.app" className="btn btn-live">
              Live <span className="btn-icon">↗</span>
            </a>
            <a href="https://github.com/tanuj-bhoy/Food-Delivery-Website.git" className="btn btn-github">
              GitHub <span className="btn-icon">⤴</span>
            </a>
          </div>
        </div>
      </div>

      {/* Todo List Project */}
      <div className="project-card">
        <div className="project-content">
          <h2>To-Do List Application</h2>
          <p className="project-description">
            "A simple and interactive To-Do List web application to manage tasks, mark them as complete, and organize daily activities efficiently. Features local storage persistence and a clean, minimalist design for optimal productivity." <b>You can visit my website by clicking on live button!</b>
          </p>
          <div className="project-buttons">
            <a href="https://my-todo-app-tanuj.netlify.app" className="btn btn-live">
              Live <span className="btn-icon">↗</span>
            </a>
            <a href="https://github.com/tanuj-bhoy/focus-on-today.git" className="btn btn-github">
              GitHub <span className="btn-icon">⤴</span>
            </a>
          </div>
        </div>
      </div>

      {/* Real Time Chat App */}
      <div className="project-card chat-theme">
        <div className="project-content">
          <h2>Real Time ChatApp</h2>
          <p className="project-description">
            "A full-stack real-time chat application built using the MERN stack and Socket.io, featuring secure user authentication, real-time messaging, image sharing, and dynamic online/offline status updates. The application ensures seamless communication with instant message delivery and a responsive, user-friendly interface. Designed with clean architecture and efficient state management for a smooth cross-browser experience." <b>You can visit my website by clicking on live button!</b>
          </p>
          <div className="project-buttons">
            <a href="https://real-time-chatapp-93a5.onrender.com" className="btn btn-live">
              Live <span className="btn-icon">↗</span>
            </a>
            <a href="https://github.com/tanuj-bhoy/Real-Time" className="btn btn-github">
              GitHub <span className="btn-icon">⤴</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
