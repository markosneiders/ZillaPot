import React from "react"
import "./NavBar.css"

import Button from "../Button/Button"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function NavBar() {
    const location = useLocation()
    const navigation = useNavigate()
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
                    Help
                </h1>
                <Button
                    onClick={() => navigation("/profile")}
                    text={"Account address"}
                />
            </div>
        </div>
    )
}
export default NavBar
