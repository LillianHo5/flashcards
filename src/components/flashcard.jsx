import React from "react";

const FlashCard = (props) => {
    const color =
        props.difficulty === "Hard"
            ? "#FFD6C9"
            : props.difficulty === "Normal"
                ? "#FFF8B8"
                : "#CAF2C2";

    return (
        <div className={["flashcard", props.isFlipped ? "flipped" : ""]}
            style={{
                backgroundColor: color,
                borderRadius: "1rem"
            }}
            onClick={props.flip} >
            <div className="flashcard-inner">
                {props.isFlipped ?
                    <div className="back">
                        <p className="answer">{props.answer}</p>
                    </div>
                    :
                    <div className="front">
                        <p className="question">{props.question}</p>
                    </div>}
            </div>
        </div >
    )
}

export default FlashCard; 