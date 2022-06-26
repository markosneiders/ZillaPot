import React from "react"
import "./InfoCard.css"
function InfoCard(props) {
    return (
        <div
            className={
                props.variant === 1
                    ? "InfoCard1 InfoCardBase"
                    : props.variant === 2
                    ? "InfoCard2 InfoCardBase"
                    : props.variant === 3
                    ? "InfoCard3 InfoCardBase"
                    : props.variant === 4
                    ? "InfoCard4 InfoCardBase"
                    : null
            }
        >
            <h1 className="InfoCard__title">{props.title}</h1>
            <h1 className="InfoCard__text">{props.text}</h1>
        </div>
    )
}
export default InfoCard
