import React from "react";
import "./framersmethod.css";

const FramersMethod = () => {
  return (
    <section>
      <div className="framersmethod">
        <div className="framersmethod-text">
          <h2 className="framersmethod-text-h2">
            Website - The Framers' Method
          </h2>
          <p className="framersmethod-text-p">
            Promoting the Framers’ Method through political science writing and
            videos to defeat populism and tyranny in the American political
            system. The primary focus is on reforming elections through systems
            such as the Hamilton Method, an Electors' Convention, and the
            General Caucus.
          </p>
          <p className="framersmethod-text-p">
            Developed a modern single-page application using React 18,
            implementing a responsive and interactive user interface with
            features such as dynamic routing, animated page transitions using
            Framer Motion, and mobile-first design principles. The frontend
            showcases proficiency in React Hooks, component architecture, and
            CSS3 for creating responsive layouts, along with SEO optimization
            through React Helmet for dynamic meta tag management and
            comprehensive Open Graph integration.
          </p>
          <p className="framersmethod-text-p">
            Created a robust backend infrastructure using PHP and Express.js,
            handling secure form submissions and email processing with
            Nodemailer. Implemented comprehensive security measures including
            input validation, data sanitization, and proper CORS handling, while
            utilizing environmental variables for secure configuration
            management. The backend architecture demonstrates expertise in
            RESTful API development, server-side error handling, and secure data
            processing.
          </p>
        </div>

        <div className="framersmethod-img">
          <div>
            <a
              href="https://www.framersmethod.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="framersmethod-img-img"
                src="./theframersmethod.png"
                alt="Dustin Taylor"
              />
            </a>
          </div>
          <div className="framersmethod-github">
            <a
              href="https://github.com/fuhktong/framersmethod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>The Framers Method - GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FramersMethod;
