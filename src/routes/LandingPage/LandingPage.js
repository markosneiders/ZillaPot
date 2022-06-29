import React, { useState, useEffect } from "react"
import "./LandingPage.css"

//Component imports
import Button from "../../components/Button/Button"
import NavBar from "../../components/NavBar/NavBar"
import InfoCard from "../../components/InfoCard/InfoCard"

//Package imports
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import ScrollAnimation from "react-animate-on-scroll"
import { useSpring, animated } from "react-spring"
import { useNavigate } from "react-router-dom"
// const { Zilliqa } = require("@zilliqa-js/zilliqa")
// const zilliqa = new Zilliqa("https://dev-api.zilliqa.com")

function LandingPage() {
    const fade = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 1000 },
    })

    const navigate = useNavigate()

    const connectZilPay = async () => {
        if (window.zilPay.wallet) {
            await window.zilPay.wallet.connect()
            localStorage.setItem("isConnected", true)
            localStorage.setItem(
                "userAddress",
                window.zilPay.wallet.defaultAccount.bech32
            )
            navigate("/pots")
        }
    }

    return (
        <div
            className="LandingPage"
            style={{ height: window.innerHeight * 2, width: window.innerWidth }}
        >
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
                <NavBar />
            </div>
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
                    text={"Connect with ZilPay"}
                    logo={true}
                    logoSize={"50px"}
                    onClick={() => connectZilPay()}
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
                <div className="LandingPage__main__cards">
                    <ScrollAnimation animateIn="fadeIn">
                        <div style={{ marginBottom: 400 }}>
                            <InfoCard
                                variant={1}
                                title="First of it's kind"
                                text="ZillaPot is the first casino game of it's
                            kind on the Zilliqa blockchain. Sporting sleek astethics and 
                            engaging gameplay ZillaPot will have you coming back
                            for more. We are proud to be the trailblazers of the casino world
                            in this new frontier."
                            />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn">
                        <InfoCard
                            variant={2}
                            title="How to play ZillaPot"
                            text="The main goal of ZillaPot is to be the last 
                            person to deposit money into the pot before the time runs out.
                            The last person to deposit will win the whole content of the pot.
                            Every time someone deposits, the minimum deposit goes up and the 
                            time increases."
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <div style={{ marginBottom: 400 }}>
                            <InfoCard
                                variant={3}
                                title="How to get started"
                                text="It's simple! Scroll up and connect with your ZillPay wallet. 
                            After that head over to the pots section and find one which suits you best, 
                            or create your own. If you're ever unsure or get stuck reffer to the help page."
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
export default LandingPage
