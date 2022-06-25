import { useNavigate } from "react-router-dom"
import React from "react"
import "./LandingPage.css"

//Component imports
import ConnectButton from "../../components/ConnectButton/ConnectButton"

//Package imports
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
// const { Zilliqa } = require("@zilliqa-js/zilliqa")
// const zilliqa = new Zilliqa("https://dev-api.zilliqa.com")

function LandingPage() {
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
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <h1 className="LandingPage__title">ZillaPot</h1>
            <h1 className="LandingPage__text">
                First sunk cost game on the Zilliqa chain
            </h1>
            <ConnectButton
                onClick={() => {
                    handleConnect()
                }}
            />
        </div>
    )
}
export default LandingPage
