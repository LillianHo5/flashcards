import React from "react";
import { useState } from 'react'
import FlashCard from "./flashcard";

const Stack = () => {
    const [isFlipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [input, setInput] = useState('');
    const [correct_answer, setCheckedAnswer] = useState('');

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

        // Prevents users from going beyond the list of flashcards offered 
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            document.getElementById("back-btn").disabled = false;
        } else if (currentCardIndex >= cards.length - 1) {
            document.getElementById("next-btn").disabled = true;
        }
        // Select a random index from [0, cards.length)
        //setCurrentCardIndex(Math.floor(Math.random() * (cards.length)));
    }

    const prevCard = () => {
        // Have flashcard face question by default 
        setFlipped(false);

        // Prevents users from going beyond the list of flashcards offered 
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            document.getElementById("next-btn").disabled = false;
        } else if (currentCardIndex <= 0) {
            document.getElementById("back-btn").disabled = true;
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const onCheckAnswer = (e) => {
        e.preventDefault();
        if (input != cards[currentCardIndex].answer) {
            setCheckedAnswer('wrong');
        } else {
            setCheckedAnswer('correct');
        }
    }

    return (
        <div className="flashcard-stack">
            <h4>Number of flashcards: {cards.length}</h4>
            <FlashCard question={cards[currentCardIndex].question}
                answer={cards[currentCardIndex].answer} isFlipped={isFlipped} flip={flipCard}
                difficulty={cards[currentCardIndex].difficulty}
            />
            <form onSubmit={onCheckAnswer}>
                <label>
                    Guess your answer here:&nbsp;
                    <input type="text" id={correct_answer} value={input} onChange={handleInput} />
                </label>
                <input type="submit" id="submit-guess" value="Guess" />
            </form>
            <div className="buttons">
                <button id="back-btn" onClick={prevCard}>Back</button>
                <button id="next-btn" onClick={nextCard}>Next</button>
            </div>
        </div>
    );
}

export default Stack; 