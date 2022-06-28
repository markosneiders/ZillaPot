import React from "react"
import "./Button.css"
import ZilPay from "../../assets/images/ZilPay.png"

function Button(props) {
    return (
        <button
            className={props.golden ? "Button Button--golden" : "Button"}
            onClick={props.onClick}
        >
            <h1 className="Button__text">{props.text}</h1>
            {props.logo === true ? (
                <img
                    src={ZilPay}
                    alt="ZilPay"
                    width={props.logoSize}
                    className="Button__image"
                />
            ) : null}
        </button>
    )
}
export default Button
