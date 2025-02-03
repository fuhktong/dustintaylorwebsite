import React from "react";
import "./advancecoin.css";

const AdvanceCoin = () => {
  return (
    <section>
      <div className="section" style={{ backgroundColor: "#C4DFFF" }}>
        <div className="section-text">
          <h2 className="section-text-h2">Website - Advance Coin Laundry</h2>
          <p className="section-text-p">
            Established in 2021, Advance Coin Laundry offers coin-operated
            washers and dryers, wash & fold services, and dry cleaning services
            in Orlando, FL. Completely renovated and air-conditioned, Advance
            Coin Laundry is the cleanest, coldest laundromat in Orlando! Visit
            us and download the new Speed Queen app and receive a $5 credit on
            your first-time use. Dry cleaning pick-up and drop off is on
            Tuesdays and Thursdays. Please note that last wash is at 8:55 PM
            daily. Check out our website for complete details.
          </p>
          <p className="section-text-p">
            Built a dynamic business website utilizing React 18 with TypeScript
            integration, featuring interactive components like a custom image
            carousel, Google Maps integration, and animated page transitions.
            The frontend demonstrates expertise in styled-components, responsive
            design patterns, and seamless integration of third-party APIs
            including the Google Maps JavaScript API and Google Business API for
            real-time reviews.{" "}
          </p>
          <p className="section-text-p">
            Architected a scalable backend infrastructure combining Express.js
            and PHP, implementing secure API proxy services for Google Maps
            integration, and maintaining environment security through proper
            configuration management. The system includes robust error handling,
            secure contact form processing with email integration, and optimized
            server-side rendering for improved SEO performance through meta tag
            management.
          </p>
        </div>
        <div className="section-img">
          <a
            href="https://www.advancecoinlaundry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="section-img-img"
              src="./advancecoinlaundry.png"
              alt="Advance Coin Laundry"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvanceCoin;
