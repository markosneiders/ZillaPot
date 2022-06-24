import React from "react"

import "./ConnectButton.css"
import ZilPay from "../../assets/images/ZilPay.png"

function Button(props) {
    return (
        <button className="ConnectButton">
            <h1 className="ConnectButton__text">Connect to ZilPay</h1>
            <img src={ZilPay} width="50px" className="ConnectButton__image" />
        </button>
    )
}
export default Button