import React, { useState } from "react"
import "./ConnectButton.css"
import ZilPay from "../../assets/images/ZilPay.png"

function Button({ onClick }) {
    return (
        <button className="ConnectButton" onClick={onClick}>
            <h1 className="ConnectButton__text">Connect to ZilPay</h1>
            <img
                src={ZilPay}
                alt="ZilPay"
                width="50px"
                className="ConnectButton__image"
            />
        </button>
    )
}
export default Button
