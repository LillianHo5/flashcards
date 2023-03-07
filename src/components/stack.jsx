import React from "react";
import { useState } from 'react'
import FlashCard from "./flashcard";

const Stack = () => {
    const [isFlipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        { question: 'What are the two main divisions of the nervous system?', answer: 'Central Nervous System and Peripheral Nervous System', difficulty: 'Hard' },
        { question: 'Which of the following glial cells is found in the peripheral nervous system?', answer: 'Schwann Cells', difficulty: 'Normal' },
        { question: 'Which of the following are glial cells of the central nervous system?', answer: 'Astrocytes, Ependymal Cells, Oligodendrocytes, Microglia', difficulty: 'Hard' },
        { question: 'What is the input region of the neuron?', answer: 'Dendrite', difficulty: 'Easy' },
        { question: 'The influx of sodium causes', answer: 'Depolarization', difficulty: 'Easy' },
        { question: 'What are the two components of the central nervous system?', answer: 'Brain and Spinal Cord', difficulty: 'Normal' },
        { question: 'The autonomic nervous system innervates what?', answer: 'Smooth Muscles, Cardiac Muscles, Glands', difficulty: 'Hard' },
        { question: 'A neuroscientist who studies the effects of drugs on mood and behavior is a...', answer: 'Behavorial Neuroscientist', difficulty: 'Normal' },
        { question: 'The immune cells of the central nervous system are:', answer: 'Microglia', difficulty: 'Easy' },
        { question: 'If the membrane potential changes from +30 mV to -65 mV, this is called?', answer: 'Repolarization', difficulty: 'Normal' }
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
                answer={cards[currentCardIndex].answer} isFlipped={isFlipped} flip={flipCard}
                difficulty={cards[currentCardIndex].difficulty}
            />
            <div className="buttons">
                <button onClick={nextCard}>Next</button>
            </div>
        </div>
    );
}

export default Stack; 