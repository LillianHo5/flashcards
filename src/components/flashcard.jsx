import React from "react";

const FlashCard = (props) => {
    const isMastered = props.mastered;

    const color =
        props.difficulty === "Hard"
            ? "#FFD6C9"
            : props.difficulty === "Normal"
                ? "#FFF8B8"
                : "#CAF2C2";

    return (
        <div className={["flashcard", props.isFlipped ? "flipped" : ""]}
            onClick={props.flip} >
            <div className="flashcard-inner">
                {props.isFlipped ?
                    <div className="back" style={{
                        backgroundColor: color,
                        borderRadius: "1rem"
                    }}>
                        <p className="answer">{props.answer}</p>
                    </div>
                    :
                    <div className="front" style={{
                        backgroundColor: color,
                        borderRadius: "1rem",
                    }}>
                        <img src="src/assets/star.webp" className={isMastered ? "mastered" : "not-mastered"} alt="Logo" />
                        <p className="question">{props.question}</p>
                    </div>}
            </div>
        </div>
    )
}

export default FlashCard; 