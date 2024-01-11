import React, { useState } from 'react';
import './App.css';
import FlashcardSetCreator from './FlashcardSetCreator';
import FlashcardViewer from './FlashcardViewer';
import Page from './Page1'; 

function App() {
    const [flashcardSets, setFlashcardSets] = useState({});
    const [currentSetName, setCurrentSetName] = useState('');

    const addFlashcardSet = (setName, flashcards) => {
        setFlashcardSets(prevSets => ({ ...prevSets, [setName]: flashcards }));
        setCurrentSetName(setName);
    };

    return (
        <div className="App">
            <Page /> {/* Page*/}
            <h1>Flashcards App</h1>
            <FlashcardSetCreator addFlashcardSet={addFlashcardSet} />

            {Object.keys(flashcardSets).length > 0 && (
                <>
                    <select onChange={e => setCurrentSetName(e.target.value)} value={currentSetName}>
                        <option value="">Select a Flashcard Set</option>
                        {Object.keys(flashcardSets).map(setName => (
                            <option key={setName} value={setName}>{setName}</option>
                        ))}
                    </select>

                    {currentSetName && (
                        <FlashcardViewer 
                            currentSet={flashcardSets[currentSetName]} 
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App;
