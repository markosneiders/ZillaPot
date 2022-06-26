import React from "react"
import "./Profile.css"

import Container from "../../components/Container/Container"
import NavBar from "../../components/NavBar/NavBar"

function Profile() {
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
    return (
        <div
            className="Profile"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <NavBar />
            <div className="Profile__container">
                <Container />
                <div className="Profile__container-cards">
                    <div className="WPot" style={{ margin: 0 }}>
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
                                    style={{ fontWeight: 100, margin: 0 }}
                                >
                                    times
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="LPot" style={{ margin: 0 }}>
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
                    <div className="Pot" style={{ margin: 0 }}>
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
                </div>
            </div>
        </div>
    )
}
export default Profile
