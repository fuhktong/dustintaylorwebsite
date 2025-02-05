import React from "react";
import "./advancecoin.css";

const AdvanceCoin = () => {
  return (
    <section>
      <div className="advancecoin" style={{ backgroundColor: "#C4DFFF" }}>
        <div className="advancecoin-text">
          <h2 className="advancecoin-text-h2">
            Website - Advance Coin Laundry
          </h2>
          <p className="advancecoin-text-p">
            Established in 2021, Advance Coin Laundry offers coin-operated
            washers and dryers, wash & fold services, and dry cleaning services
            in Orlando, FL. Completely renovated and air-conditioned, Advance
            Coin Laundry is the cleanest, coldest laundromat in Orlando! Visit
            us and download the new Speed Queen app and receive a $5 credit on
            your first-time use. Dry cleaning pick-up and drop off is on
            Tuesdays and Thursdays. Please note that last wash is at 8:55 PM
            daily. Check out our website for complete details.
          </p>
          <p className="advancecoin-text-p">
            Built a dynamic business website utilizing React 18 with TypeScript
            integration, featuring interactive components like a custom image
            carousel, Google Maps integration, and animated page transitions.
            The frontend demonstrates expertise in styled-components, responsive
            design patterns, and seamless integration of third-party APIs
            including the Google Maps JavaScript API and Google Business API for
            real-time reviews.{" "}
          </p>
          <p className="advancecoin-text-p">
            Architected a scalable backend infrastructure combining Express.js
            and PHP, implementing secure API proxy services for Google Maps
            integration, and maintaining environment security through proper
            configuration management. The system includes robust error handling,
            secure contact form processing with email integration, and optimized
            server-side rendering for improved SEO performance through meta tag
            management.
          </p>
        </div>
        <div className="advancecoin-img">
          <div>
            <a
              href="https://www.advancecoinlaundry.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="advancecoin-img-img"
                src="./advancecoinlaundry.png"
                alt="Advance Coin Laundry"
              />
            </a>
          </div>
          <div className="advancecoin-github">
            <a
              href="https://github.com/fuhktong/customquizzes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Advance Coin Laundry - GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceCoin;
