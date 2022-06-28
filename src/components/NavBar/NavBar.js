import React, { useEffect, useState } from "react"
import "./NavBar.css"

import Button from "../Button/Button"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function NavBar() {
    const location = useLocation()
    const navigation = useNavigate()
    const [userAddress, setUserAddress] = useState("")
    const [isConnected, setIsConnected] = useState(false)

    const connectZilPay = async () => {
        if (window.zilPay.wallet) {
            await window.zilPay.wallet.connect()
            sessionStorage.setItem("isConnected", true)
            sessionStorage.setItem(
                "userAddress",
                window.zilPay.wallet.defaultAccount.bech32
            )
            console.log("Connect done")
        } else {
            console.log("Connect failed")
        }
    }

    useEffect(() => {
        setUserAddress(sessionStorage.getItem("userAddress"))
        setIsConnected(sessionStorage.getItem("isConnected"))
    }, [window.sessionStorage])

    // function checkWallet() {
    //     if (window.zilPay) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // async function connectWallet() {
    //     return await window.zilPay.wallet.connect()
    // }

    // async function handleConnect() {
    //     const check1 = checkWallet()
    //     const check2 = await connectWallet()
    //     if (check1 && check2) {
    //         localStorage.setItem(
    //             "userAddress",
    //             window.zilPay.wallet.defaultAccount.bech32
    //         )
    //         console.log("Connected")
    //     } else {
    //         alert("Please connect to Zilla")
    //     }
    // }

    return (
        <div className="NavBar">
            <div className="Navbar__logo">ZillaPot</div>
            <div className="Navbar__links">
                <h1
                    onClick={() => navigation("/")}
                    className={
                        location.pathname === "/"
                            ? "Navbar__links-text-active"
                            : "Navbar__links-text"
                    }
                >
                    Home
                </h1>
                <h1
                    onClick={() => navigation("/pots")}
                    className={
                        location.pathname === "/pots"
                            ? "Navbar__links-text-active"
                            : "Navbar__links-text"
                    }
                >
                    Pots
                </h1>
                <h1
                    onClick={() => navigation("/help")}
                    className={
                        location.pathname === "/help"
                            ? "Navbar__links-text-active"
                            : "Navbar__links-text"
                    }
                >
                    Help/About
                </h1>

                {isConnected ? (
                    <Button
                        onClick={() => navigation("/profile")}
                        text={`${userAddress.slice(0, 6)}...${userAddress.slice(
                            -6
                        )}`}
                    />
                ) : (
                    <Button
                        text="Log in with ZilPay"
                        logo={true}
                        logoSize={"35px"}
                        onClick={() => connectZilPay()}
                    />
                )}
            </div>
        </div>
    )
}
export default NavBar
