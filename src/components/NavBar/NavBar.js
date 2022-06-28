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
        console.log("Navbar connecting")
        if (window.zilPay.wallet) {
            await window.zilPay.wallet.connect()
            localStorage.setItem("isConnected", true)
            localStorage.setItem(
                "userAddress",
                window.zilPay.wallet.defaultAccount.bech32
            )
            console.log("Connect done")
            window.location.reload()
        } else {
            console.log("Connect failed")
        }
    }

    useEffect(() => {
        setUserAddress(localStorage.getItem("userAddress"))
        setIsConnected(localStorage.getItem("isConnected"))
    }, [window.localStorage])

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
                    onClick={() => navigation("/pots/create")}
                    className={
                        location.pathname === "/pots/create"
                            ? "Navbar__links-text-active"
                            : "Navbar__links-text"
                    }
                >
                    Create pot
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

                {isConnected === "true" ? (
                    <Button
                        onClick={() => navigation("/profile")}
                        text={`${userAddress.slice(0, 6)}...${userAddress.slice(
                            -6
                        )}`}
                    />
                ) : (
                    <Button
                        text="Connect with ZilPay"
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
