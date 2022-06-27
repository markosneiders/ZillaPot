import React, { useEffect, useState } from "react"
import "./Profile.css"

import Container from "../../components/Container/Container"
import NavBar from "../../components/NavBar/NavBar"
import Button from "../../components/Button/Button"

function Profile() {
    const [userData, setUserData] = useState({
        address: localStorage.getItem("userAddress"),
        balance: "",
    })

    const winnerData = {
        id: 12,
        potSize: 12,
    }
    const loserData = {
        id: 8,
        potSize: 8,
    }
    const regularData = {
        id: 20,
        potSize: 20,
    }
    async function getUserData() {
        console.log(window.zilPay)
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div
            className="Profile"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
                <NavBar />
            </div>
            <div className="Profile__container">
                <Container
                    width={"fit-content"}
                    height={"fit-content"}
                    headerTitleLeft="Profile"
                    headerTitleRight={`${userData.address.slice(
                        0,
                        6
                    )}...${userData.address.slice(-6)}`}
                    content={
                        <div className="Profile__container-cards">
                            <div className="Pot" style={{ cursor: "default" }}>
                                <div className="Pot__header">
                                    <h3 className="Pot__header-text">{`#${regularData.id}`}</h3>
                                    <h3 className="Pot__header-text">Joined</h3>
                                </div>
                                <div className="Pot__body">
                                    <h3
                                        className="Pot__body-title"
                                        style={{ fontSize: 40 }}
                                    >
                                        You have joined
                                    </h3>
                                    <h1
                                        className="Pot__body-title"
                                        style={{ fontSize: "50px" }}
                                    >
                                        {regularData.potSize}
                                    </h1>
                                    <h3
                                        className="Pot__body-text"
                                        style={{ fontWeight: 100, margin: 0 }}
                                    >
                                        pots
                                    </h3>
                                </div>
                            </div>
                            <div className="WPot" style={{ cursor: "default" }}>
                                <div className="WPot__header">
                                    <h3 className="WPot__header-text">{`#${winnerData.id}`}</h3>
                                    <h3 className="WPot__header-text">Won</h3>
                                </div>
                                <div className="WPot__body">
                                    <div style={{ display: "flex" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <h1
                                                className="WPot__body-title"
                                                style={{ fontSize: "45px" }}
                                            >
                                                You have won
                                            </h1>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h1
                                            className="WPot__body-title"
                                            style={{ fontSize: "50px" }}
                                        >
                                            {winnerData.potSize}
                                        </h1>
                                        <h3
                                            className="WPot__body-text"
                                            style={{
                                                fontWeight: 100,
                                                margin: 0,
                                            }}
                                        >
                                            times
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="LPot" style={{ cursor: "default" }}>
                                <div className="LPot__header">
                                    <h3 className="LPot__header-text">{`#${loserData.id}`}</h3>
                                    <h3 className="LPot__header-text">Lost</h3>
                                </div>
                                <div className="LPot__body">
                                    <h1
                                        className="LPot__body-title"
                                        style={{ fontSize: "45px" }}
                                    >
                                        You have lost
                                    </h1>
                                    <h1
                                        className="LPot__body-title"
                                        style={{ fontSize: "50px" }}
                                    >
                                        {loserData.potSize}
                                    </h1>
                                    <h3
                                        className="LPot__body-text"
                                        style={{ fontWeight: 100, margin: 0 }}
                                    >
                                        times
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
export default Profile
