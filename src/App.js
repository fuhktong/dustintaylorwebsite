import React from "react";
import Profile from "./profile/profile.js";
import "./global.css";
import SocialMediaBar from "./socialmediabar/socialmediabar.js";
import FramersMethod from "./framersmethod/framersmethod.js";
import AdvanceCoin from "./advancecoin/advancecoin.js";
import CustomQuizzes from "./customquizzes/customquizzes.js";
import ContactForm from "./contact/contactform.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialMediaBar />
        <Profile />
        <CustomQuizzes />
        <AdvanceCoin />
        <FramersMethod />
        <ContactForm />
        <SocialMediaBar />
      </header>
    </div>
  );
}

export default App;
