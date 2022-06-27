import React, { useEffect, useState } from "react"
import "./NavBar.css"

import Button from "../Button/Button"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function NavBar() {
    const location = useLocation()
    const navigation = useNavigate()
    const [userAddress, setUserAddress] = useState(
        localStorage.getItem("userAddress")
    )
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
                <Button
                    onClick={() => navigation("/profile")}
                    text={`${userAddress.slice(0, 6)}...${userAddress.slice(
                        -6
                    )}`}
                />
            </div>
        </div>
    )
}
export default NavBar
