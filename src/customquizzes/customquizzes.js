import React from "react";
import "./customquizzes.css";

const CustomQuizzes = () => {
  return (
    <section>
      <div className="custom-quizzes">
        <div className="custom-quizzes-text">
          <h2 className="custom-quizzes-text-h2">Website - Custom Quizzes</h2>
          <p className="custom-quizzes-text-p">
            Custom Quizzes is an educational platform that allows users to
            design their own mulitple choice question quizzes. The website
            includes an example quiz, The Logical Fallacy Quiz, that allows
            users to identify and understand common logical fallacies in
            everyday arguments. Users may test their skills by choosing the
            correct name or description of any number of logical fallacies.
          </p>
          <p className="custom-quizzes-text-p">
            Engineered an interactive quiz platform using React 19 and modern
            web technologies, implementing stateful component logic for dynamic
            quiz generation and real-time scoring. The frontend showcases
            expertise in state management, component composition, and
            interactive UI elements with smooth transitions using Framer Motion
            and Tailwind CSS, while incorporating the shadcn/ui component
            library for a polished user experience.
          </p>
          <p className="custom-quizzes-text-p">
            Developed a hybrid PHP/React architecture with a RESTful API for
            quiz data management, featuring dynamic question generation and
            randomization algorithms. The implementation includes robust error
            handling, efficient data structures for quiz state management, and a
            modular backend design that allows for easy content updates through
            PHP data management, demonstrating proficiency in full-stack
            development and API design patterns.
          </p>
        </div>

        <div className="custom-quizzes-img">
          <div>
            <a
              href="https://www.customquizzes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="custom-quizzes-img-img"
                src="./customquizzes.png"
                alt="Custom Quizzes"
              />
            </a>
          </div>
          <div className="custom-quizzes-github">
            <a
              href="https://github.com/fuhktong/customquizzes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Custom Quizzes - GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomQuizzes;
