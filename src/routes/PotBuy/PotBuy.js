import React, { useState } from "react"
import "./PotBuy.css"
import TempData from "./TempData.json"

//Component imports
import Button from "../../components/Button/Button"
import InfoModal from "../../components/InfoModal/InfoModal"

import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { Modal } from "@mui/material"

function PotBuy() {
    const location = useLocation()
    const navigation = useNavigate()

    const [historyData, setHistoryData] = useState(TempData)
    const [deposit, setDeposit] = useState()
    const [infoModal, setInfoModal] = useState(false)

    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    const history = historyData.map((item) => (
        <div className="PotBuy__container-body-historyList-item">
            <h1 className="PotBuy__container-body-historyList-item-text">
                {formatAddress(item.address)}
            </h1>
            <h1 className="PotBuy__container-body-historyList-item-text">
                {`+${item.amount} ZIL`}
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
    return (
        <div
            className="PotBuy"
            style={{
                height: window.innerHeight,
                width: window.innerWidth,
            }}
        >
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
                        #337474458
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
                            9858.95
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
                        <div className="PotBuy__container-body-textContainer">
                            <h1 className="PotBuy__container-body-text">
                                Time left
                            </h1>
                            <h1 className="PotBuy__container-body-title">
                                15:53:13
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
                                583.93
                            </h1>
                            <h1 className="PotBuy__container-body-text">ZIL</h1>
                        </div>
                    </div>
                    <Button
                        text={"Deposit minimum"}
                        logo={false}
                        onClick={() => {}}
                    />
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
                    style={{ width: " 100%", height: "70%" }}
                >
                    <div className="PotBuy__container-header">
                        <h1 className="PotBuy__container-header-title">
                            History
                        </h1>
                        <h1 className="PotBuy__container-header-title">
                            17 contributions
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
                <div
                    className="PotBuy__container"
                    style={{ width: " 100%", height: "25%", marginTop: 32 }}
                >
                    <div className="PotBuy__container-header">
                        <h1 className="PotBuy__container-header-title">
                            Deposit
                        </h1>
                        <div style={{ display: "flex" }}>
                            <h1 className="PotBuy__container-header-title">
                                583.93
                            </h1>
                            <h1 className="PotBuy__container-header-text">
                                ZIL
                            </h1>
                        </div>
                    </div>
                    <div
                        className="PotBuy__container-body"
                        style={{ flexDirection: "row" }}
                    >
                        <form
                            // onSubmit={handleSubmit}
                            // onAbort={() => props.setAddress(address)}
                            className="PotBuy__container-body-form"
                        >
                            <input
                                className="PotBuy__container-body-input"
                                type="number"
                                placeholder="Enter deposit amount..."
                                value={deposit}
                                onChange={(e) => setDeposit(e.target.value)}
                            />
                        </form>
                        <Button
                            text={"Deposit"}
                            logo={false}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PotBuy
