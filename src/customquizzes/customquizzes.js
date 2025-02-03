import React from "react";
import "./customquizzes.css";

const CustomQuizzes = () => {
  return (
    <section>
      <div className="section">
        <div className="section-text">
          <h2 className="section-text-h2">Website - Logical Fallacy Quiz</h2>
          <p className="section-text-p">
            The Logical Fallacy Quiz is an educational platform focused on
            teaching users to identify and understand common logical fallacies
            in everyday arguments. Users may test their skills by choosing the
            correct name or description of any number of logical fallacies.
          </p>
          <p className="section-text-p">
            Engineered an interactive quiz platform using React 19 and modern
            web technologies, implementing stateful component logic for dynamic
            quiz generation and real-time scoring. The frontend showcases
            expertise in state management, component composition, and
            interactive UI elements with smooth transitions using Framer Motion
            and Tailwind CSS, while incorporating the shadcn/ui component
            library for a polished user experience.
          </p>
          <p className="section-text-p">
            Developed a hybrid PHP/React architecture with a RESTful API for
            quiz data management, featuring dynamic question generation and
            randomization algorithms. The implementation includes robust error
            handling, efficient data structures for quiz state management, and a
            modular backend design that allows for easy content updates through
            PHP data management, demonstrating proficiency in full-stack
            development and API design patterns.
          </p>
        </div>
        <div className="section-img">
          <a
            href="https://www.customquizzes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="section-img-img"
              src="./customquizzes.png"
              alt="Custom Quizzes"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomQuizzes;
