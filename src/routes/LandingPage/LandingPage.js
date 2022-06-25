import React from "react"
import "./LandingPage.css"

//Component imports
import ConnectButton from "../../components/ConnectButton/ConnectButton"

//Package imports
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"

function LandingPage() {
    return (
        <div
            className="LandingPage"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <h1 className="LandingPage__title">ZillaPot</h1>
            <h1 className="LandingPage__text">
                First sunk cost game on the Zilliqa chain
            </h1>
            <ConnectButton />
        </div>
    )
}
export default LandingPage
