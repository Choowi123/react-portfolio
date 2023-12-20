import React, { useState } from "react";
import "./App.css";

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="main-flip-card">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
              <p className="about-me-p">I'm Marc Rayven G. Ponce, graduate from Technological University of the Philippines - Taguig Campus having a degree of Bachelor of Technical Vocational Teacher Education Major in ICT - Computer Programming.</p>
              <button className="flip-button" onClick={handleFlip}>Next</button>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <p className="about-me-p">Here are some programming languages and database that I have experienced using to:</p>
              <img src="./html-5.png" className="prog-lang" alt="HTML"></img>
              <img src="./css-3.png" className="prog-lang" alt="CSS"></img>
              <img src="./js-pic.png" className="prog-lang" alt="JavaScript"></img>
              <img src="./php2.png" className="prog-lang" alt="PHP"></img>
              <img src="./mysql.png" className="prog-lang" alt="MySql"></img>
              <img src="./c++.png" className="prog-lang" alt="C++"></img>
              <img src="./java.png" className="prog-lang" alt="Java"></img>
              <button className="flip-button-back" onClick={handleFlip}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
