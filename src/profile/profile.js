import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <section>
      <div className="profile">
        <div className="profile-text">
          <h1 className="profile-text-h1">Dustin Taylor</h1>
          <h2 className="profile-text-h2">
            Web Developer / Political Scientist
          </h2>
          <p className="profile-text-p">
            These are some projects made by Dustin Taylor using HTML, CSS,
            JavaScript, PHP, React, TypeScript, Express, Node.js, Axios,
            Tailwind, Framer-Motion, MongoDB, jQuery, REST, Nodemailer, Jest,
            Git, NPM, Webpack, and Babel.
          </p>
          <p className="profile-text-p">
            Dustin Taylor is a web developer and political scientist with a
            focus on electoral systems.&nbsp;After high school, he enlisted in
            the United States Navy as a cryptologic technician.&nbsp;Dustin
            attended the University of New Mexico, where he received a
            bachelor's degree in political science, and also attended Johns
            Hopkins University, attaining a master's degree in government.&nbsp;
            He has worked on multiple field campaigns in New Mexico, Nevada,
            Iowa, and Washington, D.C. His master's thesis is titled "The
            Decentralization of the House of Representatives." Dustin is from
            Albuquerque, New Mexico.
          </p>
          <p className="profile-text-p">
            In February 2023, Dustin published his first political science book
            on the Electoral College,{" "}
            <a href="https://a.co/d/6fazY98">
              "On the Framers’ Electoral College: How the Hamilton Method and an
              Electors Convention Can Defeat Populism and Tyranny."
            </a>{" "}
            He is currently writing on the General Caucus.
          </p>
        </div>
        <div className="profile-img">
          <img
            className="profile-img-img"
            src="./dustintaylorphoto.png"
            alt="Dustin Taylor"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
