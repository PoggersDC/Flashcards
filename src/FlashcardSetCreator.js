import React, { useState } from "react";
import "./FlashcardSetCreator.css";
import EquationEditor from "equation-editor-react";

function FlashcardSetCreator({ addFlashcardSet }) {
  const [setName, setSetName] = useState("");
  const [front, setFront] = useState("x");
  const [back, setBack] = useState("x");
  const [flashcards, setFlashcards] = useState([]);

  const handleInsert = (field) => (text) => {
    if (field === "front") {
      setFront(front + text);
    } else if (field === "back") {
      setBack(back + text);
    }
  };

  const handleAddFlashcard = () => {
    if (front && back) {
      setFlashcards((prevCards) => [...prevCards, { front, back }]);
      setFront("");
      setBack("");
    }
  };

  const handleSaveSet = () => {
    if (setName && flashcards.length > 0) {
      addFlashcardSet(setName, flashcards);
      setSetName("");
      setFlashcards([]);
    }
  };

  return (
    <div className="flashcard-set-creator">
      <input
        value={setName}
        onChange={(e) => setSetName(e.target.value)}
        placeholder="Set Name"
      />

      <div
        style={{
          alignItems: "center",
          alignContent: "center",
          paddingLeft: 155,
          paddingTop: 15,
          paddingBottom: 10,
        }}
      >
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "50%",
            outlineStyle: "solid",
            outlineColor: "#000000",
          }}
        >
          <EquationEditor
            value={front}
            onChange={(e) => setFront(e)}
            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
            autoOperatorNames="sin cos tan"
          />
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          alignContent: "center",
          paddingLeft: 155,
          paddingBottom: 15,
        }}
      >
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "50%",
            outlineStyle: "solid",
            outlineColor: "#000000",
          }}
        >
          <EquationEditor
            value={back}
            onChange={(e) => setBack(e)}
            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
            autoOperatorNames="sin cos tan"
          />
        </div>
      </div>

      <button onClick={handleAddFlashcard}>Add Flashcard</button>
      <button onClick={handleSaveSet}>Save Set</button>
    </div>
  );
}

export default FlashcardSetCreator;
