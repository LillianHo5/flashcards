import React from "react";
import { useState } from 'react'
import FlashCard from "./flashcard";

const Stack = () => {
    const [isFlipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        { question: 'hello', answer: 'hi' },
        { question: 'cheese', answer: 'naur' },
        { question: 'wot', answer: 'meet' }
    ];

    const flipCard = () => {
        setFlipped(!isFlipped);
    }

    const nextCard = () => {
        // Have flashcard face question by default 
        setFlipped(false);
        // Select a random index from [0, cards.length)
        setCurrentCardIndex(Math.floor(Math.random() * (cards.length)));
    }

    return (
        <div className="flashcard-stack">
            <h4>Number of flashcards: {cards.length}</h4>
            <FlashCard question={cards[currentCardIndex].question}
                answer={cards[currentCardIndex].answer} isFlipped={isFlipped} flip={flipCard} />
            <div className="buttons">
                <button onClick={nextCard}>Next</button>
            </div>
        </div>
    );
}

export default Stack; 