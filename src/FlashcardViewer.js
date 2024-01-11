import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardViewer.css';

function FlashcardViewer({ currentSet }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        if (currentIndex < currentSet.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flashcard-viewer">
            {currentSet && currentSet.length > 0 && (
                <div>
                    <Flashcard card={currentSet[currentIndex]} />
                    <div className="navigation-buttons">
                        <button onClick={prevCard} disabled={currentIndex === 0}>Previous</button>
                        <button onClick={nextCard} disabled={currentIndex === currentSet.length - 1}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FlashcardViewer;
