import React from "react";

const FlashCard = (props) => {
    return (
        <div className={["flashcard", props.isFlipped ? "flipped" : ""]} onClick={props.flip}>
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
        </div>
    )
}

export default FlashCard; 