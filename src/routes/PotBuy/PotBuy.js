import React, { useEffect, useState } from "react"
import "./PotBuy.css"

//Component imports
import Button from "../../components/Button/Button"
import InfoModal from "../../components/InfoModal/InfoModal"
import NavBar from "../../components/NavBar/NavBar"

import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { Modal } from "@mui/material"

function PotBuy() {
    const location = useLocation()
    const navigation = useNavigate()

    const [deposit, setDeposit] = useState()
    const [infoModal, setInfoModal] = useState(false)

    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    const history = location.state.deposits.map((item) => (
        <div className="PotBuy__container-body-historyList-item">
            <h1 className="PotBuy__container-body-historyList-item-text">
                {formatAddress(item.address)}
            </h1>
            <h1 className="PotBuy__container-body-historyList-item-text">
                {`+${item.deposited} ZIL`}
            </h1>
            <h1 className="PotBuy__container-body-historyList-item-text">
                {`${item.newTotal} ZIL`}
            </h1>
        </div>
    ))

    function openInfo() {
        setInfoModal(true)
    }
    function closeInfo() {
        setInfoModal(false)
    }
    function handleDeposit() {
        console.log(
            `${localStorage.getItem("userAddress")} wants to deposit ${
                location.state.buyIn
            } ZIL to ${location.state.id}`
        )
    }
    function handleClaim() {
        console.log(
            `${localStorage.getItem("userAddress")} wants to claim ${
                location.state.potSize
            } ZIL from ${location.state.id}`
        )
    }
    useEffect(() => {
        console.log(location.state.status)
    }, [])
    return (
        <div
            className="PotBuy"
            style={{
                height: window.innerHeight,
                width: window.innerWidth,
            }}
        >
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
                <NavBar />
            </div>
            <Modal open={infoModal} onClose={() => closeInfo()}>
                <InfoModal
                    headerLeftText={"Info"}
                    headerRightText={"#337474458"}
                />
            </Modal>
            <div
                className="PotBuy__container"
                style={{ width: "40%", height: "80%", marginRight: 64 }}
            >
                <div className="PotBuy__container-header">
                    <h1 className="PotBuy__container-header-title">Overview</h1>
                    <h1 className="PotBuy__container-header-title">
                        {`#${location.state.id}`}
                    </h1>
                </div>
                <div className="PotBuy__container-body">
                    <div style={{ position: "absolute", right: 16, top: 24 }}>
                        <InfoOutlinedIcon
                            onClick={() => openInfo()}
                            onClose={() => window.alert("close")}
                            fontSize="large"
                            sx={{
                                color: "rgb(33, 238, 235, 0.5)",
                                cursor: "pointer",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "rgb(33, 238, 235, 0.8)",
                                },
                                "&:active": {
                                    transform: " scale(0.8)",
                                },
                            }}
                        />
                    </div>
                    <div style={{ position: "absolute", left: 16, top: 24 }}>
                        <KeyboardArrowLeftIcon
                            onClick={() => navigation(-1)}
                            fontSize="large"
                            sx={{
                                color: "rgb(33, 238, 235, 0.5)",
                                cursor: "pointer",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "rgb(33, 238, 235, 0.8)",
                                },
                                "&:active": {
                                    transform: " scale(0.8)",
                                },
                            }}
                        />
                    </div>
                    <div className="PotBuy__container-body-textContainer">
                        <h1 className="PotBuy__container-body-text">
                            Pot value
                        </h1>
                        <h1 className="PotBuy__container-body-title">
                            {location.state.potSize}
                        </h1>
                        <h1 className="PotBuy__container-body-text">ZIL</h1>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-around",
                        }}
                    >
                        {location.state.status === 0 ||
                        location.state.status === 4 ? (
                            <>
                                <div className="PotBuy__container-body-textContainer">
                                    <h1 className="PotBuy__container-body-text">
                                        Time left
                                    </h1>
                                    <h1 className="PotBuy__container-body-title">
                                        {location.state.timeLeft}
                                    </h1>
                                    <h1 className="PotBuy__container-body-text">
                                        hh:mm:ss
                                    </h1>
                                </div>

                                <div className="PotBuy__container-body-textContainer">
                                    <h1 className="PotBuy__container-body-text">
                                        Minimum deposit
                                    </h1>
                                    <h1 className="PotBuy__container-body-title">
                                        {location.state.buyIn}
                                    </h1>
                                    <h1 className="PotBuy__container-body-text">
                                        ZIL
                                    </h1>
                                </div>
                            </>
                        ) : (
                            <div className="PotBuy__container-body-textContainer">
                                <h1 className="PotBuy__container-body-text">
                                    Won by
                                </h1>
                                <h1 className="PotBuy__container-body-title">
                                    zil1ng...lr4907
                                </h1>
                            </div>
                        )}
                    </div>
                    {location.state.status === 0 ||
                    location.state.status === 4 ? (
                        <Button
                            text={"Deposit minimum"}
                            logo={false}
                            onClick={() => handleDeposit()}
                        />
                    ) : location.state.status === 2 ? (
                        <Button
                            golden={true}
                            text={"Claim reward"}
                            logo={false}
                            onClick={() => handleClaim()}
                        />
                    ) : null}
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "80%",
                    width: "40%",
                }}
            >
                <div
                    className="PotBuy__container"
                    style={{ width: " 100%", height: "100%" }}
                >
                    <div className="PotBuy__container-header">
                        <h1 className="PotBuy__container-header-title">
                            History
                        </h1>
                        <h1 className="PotBuy__container-header-title">
                            {`${location.state.deposits.length} contributions`}
                        </h1>
                    </div>
                    <div
                        className="PotBuy__container-body"
                        style={{ justifyContent: "flex-start" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <h1 className="PotBuy__container-body-text">
                                Address
                            </h1>
                            <h1 className="PotBuy__container-body-text">
                                Amount
                            </h1>
                            <h1 className="PotBuy__container-body-text">
                                Pot value
                            </h1>
                        </div>
                        <div className="PotBuy__container-body-historyList">
                            {history}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PotBuy
