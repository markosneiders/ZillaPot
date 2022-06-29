import React, { useState } from "react"
import "./ConnectModal.css"

import Container from "../Container/Container"
import Button from "../Button/Button"
function ConnectModal() {
    const connectZilPay = async () => {
        if (window.zilPay.wallet) {
            await window.zilPay.wallet.connect()
            localStorage.setItem("isConnected", true)
            localStorage.setItem(
                "userAddress",
                window.zilPay.wallet.defaultAccount.bech32
            )
            window.location.reload()
        }
    }
    return (
        <div className="ConnectModal">
            <Container
                headerTitleLeft={"Connect to continue"}
                height={"fit-content"}
                content={
                    <div className="ConnectModal__container">
                        <h1 className="ConnectModal__container-title">
                            Connect to ZilPay to continue
                        </h1>
                        <Button
                            text={"Connect with ZilPay"}
                            logo
                            logoSize={"50px"}
                            onClick={() => connectZilPay()}
                        />
                    </div>
                }
            />
        </div>
    )
}

export default ConnectModal
