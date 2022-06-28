import React, { useState } from "react"
import "./PotCreate.css"
import TempData from "../Pots/TempData.json"

import Container from "../../components/Container/Container"
import NavBar from "../../components/NavBar/NavBar"
import Button from "../../components/Button/Button"

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { useNavigate } from "react-router-dom"
import { Modal } from "@mui/material"

import ConnectModal from "../../components/ConnectModal/ConnectModal"

function PotCreate() {
    const [potConfig, setPotConfig] = useState({
        initialValue: 100,
        potTime: 12000,
        depositIncrease: 10,
    })
    const [info, setInfo] = useState(false)
    const [connectModal, setConnectModal] = useState(false)

    const newId = () => {
        for (var x = false; x == false; x = false) {
            const newId =
                Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000
            const found = TempData.find((obj) => {
                return obj.id === newId
            })
            if (found === undefined) {
                x = true
                return newId
            }
        }
    }
    const navigation = useNavigate()

    function openInfo() {
        setInfo(true)
    }
    function closeInfo() {
        setInfo(false)
    }
    function openConnect() {
        setConnectModal(true)
    }
    function closeConnect() {
        setConnectModal(false)
    }
    function handleCreate() {
        if (localStorage.getItem("isConnected") === "true") {
            console.log("deposit")
        } else {
            openConnect()
        }
    }

    return (
        <div
            className="PotCreate"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <Modal open={connectModal} onClose={() => closeConnect()}>
                <ConnectModal />
            </Modal>
            <Modal open={info} onClose={() => closeInfo()}>
                <div className="Modal">
                    <Container
                        headerTitleLeft={"Variable info"}
                        scroll={true}
                        content={
                            <>
                                <h1 className="Modal__container-title">
                                    Pot starting amount
                                </h1>
                                <h2 className="Modal__container-text">
                                    The amount the pot will start out with in
                                    ZIL. When creating the pot you will have to
                                    deposit this amount.
                                </h2>
                                <h1 className="Modal__container-title">
                                    Pot time
                                </h1>
                                <h2 className="Modal__container-text">
                                    Governs for how many blocks the pot will be
                                    active for. Value is given in blocks for
                                    absolute precision. Each block is mined
                                    roughly every 50 seconds. The default value
                                    is 1 week. An estimation in hours is given
                                    to help visualize the timespan.
                                </h2>
                                <h1 className="Modal__container-title">
                                    Minimum deposit increase
                                </h1>
                                <h2 className="Modal__container-text">
                                    A value given in percent by which the
                                    minimum deposit amount increases after every
                                    deposit in relation to the previous deposit.
                                </h2>
                            </>
                        }
                    />
                </div>
            </Modal>
            <NavBar />
            <div className="PotCreate__container">
                <Container
                    headerTitleLeft={"Pot creation"}
                    headerTitleRight={`#${newId()}`}
                    width={"fit-content"}
                    height={"fit-content"}
                    content={
                        <div className="Container__content">
                            <div
                                style={{
                                    position: "absolute",
                                    right: 16,
                                    top: 64,
                                }}
                            >
                                <QuestionMarkIcon
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
                            <div
                                style={{
                                    position: "absolute",
                                    left: 16,
                                    top: 64,
                                }}
                            >
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
                            <div>
                                <div className="Container__content-inputLine">
                                    <h1 className="Container__content-inputLine-title">
                                        Pot starting amount (ZIL)
                                    </h1>

                                    <form className="PotCreate__container-form">
                                        <input
                                            className="PotCreate__container-input"
                                            type="number"
                                            value={potConfig.initialValue}
                                            onChange={(e) =>
                                                setPotConfig({
                                                    initialValue:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </form>
                                </div>
                                <div className="Container__content-inputLine">
                                    <h1 className="Container__content-inputLine-title">
                                        {`Pot time (${
                                            Math.round(
                                                ((potConfig.potTime * 50) /
                                                    3600) *
                                                    100
                                            ) / 100
                                        } hours)`}
                                    </h1>

                                    <form className="PotCreate__container-form">
                                        <input
                                            className="PotCreate__container-input"
                                            type="number"
                                            value={potConfig.potTime}
                                            onChange={(e) =>
                                                setPotConfig({
                                                    potTime: e.target.value,
                                                })
                                            }
                                        />
                                    </form>
                                </div>
                                <div className="Container__content-inputLine">
                                    <h1 className="Container__content-inputLine-title">
                                        Min. deposit increase %
                                    </h1>

                                    <form className="PotCreate__container-form">
                                        <input
                                            className="PotCreate__container-input"
                                            type="number"
                                            value={potConfig.depositIncrease}
                                            onChange={(e) =>
                                                setPotConfig({
                                                    depositIncrease:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </form>
                                </div>
                            </div>
                            <Button
                                text={"Create pot"}
                                onClick={() => handleCreate()}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default PotCreate
