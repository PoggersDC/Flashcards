import React, { useState } from "react";
import "./Flashcard.css";
import EquationEditor from "equation-editor-react";

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const renderMath = (text) => {
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
        <div
          className="flashcard-front"
        >
          <EquationEditor
            value={card.front}
            onChange={(e) => console.log(e)}
            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
            autoOperatorNames="sin cos tan"
          />
        </div>
        <div
          className="flashcard-back"
        >
          <EquationEditor
            value={card.back}
            onChange={(e) => console.log(e)}
            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
            autoOperatorNames="sin cos tan"
          />
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
