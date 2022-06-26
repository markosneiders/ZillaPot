import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import "./LandingPage.css"

//Component imports
import Button from "../../components/Button/Button"

//Package imports
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import ScrollAnimation from "react-animate-on-scroll"
import { useSpring, animated } from "react-spring"
// const { Zilliqa } = require("@zilliqa-js/zilliqa")
// const zilliqa = new Zilliqa("https://dev-api.zilliqa.com")

function LandingPage() {
    const fade = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 1000 },
    })

    const navigate = useNavigate()

    function checkWallet() {
        if (window.zilPay) {
            return true
        } else {
            return false
        }
    }

    async function connectWallet() {
        return await window.zilPay.wallet.connect()
    }

    async function handleConnect() {
        const check1 = checkWallet()
        const check2 = await connectWallet()
        if (check1 && check2) {
            navigate("/pots")
        } else {
            alert("Please connect to Zilla")
        }
    }

    return (
        <div
            className="LandingPage"
            style={{ height: window.innerHeight * 2, width: window.innerWidth }}
        >
            <animated.div
                className="LandingPage__main"
                style={{
                    height: window.innerHeight,
                    width: window.innerWidth,
                    ...fade,
                }}
            >
                <h1 className="LandingPage__main-title">ZillaPot</h1>
                <h1 className="LandingPage__main-text">
                    First sunk cost game on the Zilliqa chain
                </h1>
                <Button
                    text={"Connect to ZilPay"}
                    logo={true}
                    onClick={() => {
                        handleConnect()
                    }}
                />
                <div className="LandingPage__learnMore">
                    <h1 className="LandingPage__learnMore-text">Learn more</h1>
                    <KeyboardDoubleArrowDownIcon fontSize="large" />
                </div>
            </animated.div>
            <div
                className="LandingPage__main"
                style={{ height: window.innerHeight, width: window.innerWidth }}
            >
                <ScrollAnimation animateIn="fadeIn">
                    <div className="LandingPage__main__cards">
                        <div className="LandingPage__main__cards-cardBase LandingPage__main__cards-card1">
                            <h1 className="LandingPage__main__cards-card-title">
                                First of it's kind
                            </h1>
                            <h1 className="LandingPage__main__cards-card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </h1>
                        </div>
                        <div className="LandingPage__main__cards-cardBase LandingPage__main__cards-card2">
                            <h1 className="LandingPage__main__cards-card-title">
                                First of it's kind
                            </h1>
                            <h1 className="LandingPage__main__cards-card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </h1>
                        </div>
                        <div className="LandingPage__main__cards-cardBase LandingPage__main__cards-card3">
                            <h1 className="LandingPage__main__cards-card-title">
                                First of it's kind
                            </h1>
                            <h1 className="LandingPage__main__cards-card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
export default LandingPage
