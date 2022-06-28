import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./routes/LandingPage/LandingPage"
import Pots from "./routes/Pots/Pots"
import PotBuy from "./routes/PotBuy/PotBuy"
import Help from "./routes/Help/Help"
import Profile from "./routes/Profile/Profile"

import Container from "./components/Container/Container"
import { Modal } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById("root"))

function ZilliqaListener() {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            if (window.zilPay.wallet.net !== "mainnet") {
                networkCheck()
            }
            window.zilPay.wallet
                .observableAccount()
                .subscribe(function (account) {
                    if (
                        sessionStorage.getItem("userAddress") !==
                        window.zilPay.wallet.defaultAccount.bech32
                    ) {
                        sessionStorage.setItem(
                            "userAddress",
                            window.zilPay.wallet.defaultAccount.bech32
                        )
                        window.location.reload()
                    }
                })
            window.zilPay.wallet.observableNetwork().subscribe(function (net) {
                networkCheck()
            })
        }, 500)
    }, [])

    function networkCheck() {
        if (window.zilPay.wallet.net !== "mainnet") {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }
    return (
        <Modal open={warning}>
            <div className="Warning">
                <Container
                    headerTitleLeft={"Warning: Unsupported network"}
                    height={220}
                    content={
                        <h1 className="Warning__text">
                            Please switch over to the Zilliqa mainnet
                        </h1>
                    }
                />
            </div>
        </Modal>
    )
}

root.render(
    <BrowserRouter>
        <ZilliqaListener />
        <Routes className="index">
            <Route path="/" element={<LandingPage />} />
            <Route path="pots" element={<Pots />} />
            <Route path="pots/buy/:id" element={<PotBuy />} />
            <Route path="help" element={<Help />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
)
