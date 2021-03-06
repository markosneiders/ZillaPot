import React, { useState, useEffect } from "react"
import "./Pots.css"

import TempData from "./TempData.json"

//Importing all 5 pot card types and navbar
import Pot from "../../components/Pot/Pot"
import APot from "../../components/Pot/APot"
import EPot from "../../components/Pot/EPot"
import WPot from "../../components/Pot/Wpot"
import LPot from "../../components/Pot/Lpot"
import NavBar from "../../components/NavBar/NavBar"

import ScrollAnimation from "react-animate-on-scroll"
import Select from "react-select"
import { useNavigate } from "react-router-dom"

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

function Pots() {
    const [potSelection, setPotSelection] = useState(0)
    const [sort, setSort] = useState({ type: "Value", direction: "Descending" })
    const [rawData, setRawData] = useState(TempData)
    const [sortedData, setSortedData] = useState([{}])

    const navigate = useNavigate()

    useEffect(() => {
        getData()
        sortData()
    }, [])

    useEffect(() => {
        sortData()
    }, [sort])

    async function getData() {
        addStatus()
    }
    async function addStatus() {
        var data = rawData
        for (var i = 0; i < data.length; i++) {
            if (
                data[i].timeLeft !== "00:00" &&
                data[i].deposits.some(
                    (e) => e.address === localStorage.getItem("userAddress")
                )
            ) {
                data[i].status = 4
            } else if (data[i].timeLeft !== "00:00") {
                data[i].status = 0
            } else if (
                data[i].wonBy !== localStorage.getItem("userAddress") &&
                data[i].deposits.some(
                    (e) => e.address === localStorage.getItem("userAddress")
                )
            ) {
                data[i].status = 3
            } else if (data[i].wonBy === localStorage.getItem("userAddress")) {
                data[i].status = 2
            } else {
                data[i].status = 1
            }
        }
        setRawData(data)
    }

    async function sortData() {
        if (sort.type === "Value" && sort.direction === "Descending") {
            const numDescending = [...rawData].sort(
                (a, b) => b.potSize - a.potSize
            )
            setSortedData(numDescending)
        } else if (sort.type === "Value" && sort.direction === "Ascending") {
            const numAscending = [...rawData].sort(
                (a, b) => a.potSize - b.potSize
            )
            setSortedData(numAscending)
        } else if (sort.type === "Buy-in" && sort.direction === "Descending") {
            const numDescending = [...rawData].sort((a, b) => b.buyIn - a.buyIn)
            setSortedData(numDescending)
        } else if (sort.type === "Buy-in" && sort.direction === "Ascending") {
            const numAscending = [...rawData].sort((a, b) => a.buyIn - b.buyIn)
            setSortedData(numAscending)
        } else if (sort.type === "Time" && sort.direction === "Descending") {
            const strDescending = [...rawData].sort((a, b) =>
                a.timeLeft > b.timeLeft ? -1 : 1
            )
            setSortedData(strDescending)
        } else if (sort.type === "Time" && sort.direction === "Ascending") {
            const strAscending = [...rawData].sort((a, b) =>
                a.timeLeft > b.timeLeft ? 1 : -1
            )
            setSortedData(strAscending)
        } else if (
            sort.type === "Contributions" &&
            sort.direction === "Descending"
        ) {
            const numDescending = [...rawData].sort(
                (a, b) => b.contributions - a.contributions
            )
            setSortedData(numDescending)
        } else if (
            sort.type === "Contributions" &&
            sort.direction === "Ascending"
        ) {
            const numAscending = [...rawData].sort(
                (a, b) => a.contributions - b.contributions
            )
            setSortedData(numAscending)
        }
    }

    //Pot status meaning
    //Status is added after the data is fetched and is related to the user for display pourpuses
    //A status of:
    //0 means the pot is active and not joined
    //1 the pot is expired without participating
    //2 the user has won the pot
    //3 the user has lost the pot
    //4 the user has joined the pot and it's on going
    const potOptions = [
        {
            label: "Active Pots",
            value: [0],
        },
        {
            label: "All Pots",
            value: [0, 1, 2, 3, 4],
        },
        {
            label: "Joined Pots",
            value: [4],
        },
        {
            label: "Won Pots",
            value: [2],
        },
        {
            label: "Lost Pots",
            value: [3],
        },
        {
            label: "Expired Pots",
            value: [1],
        },
    ]

    function handleSort(type) {
        if (type === sort.type) {
            setSort({
                type: type,
                direction:
                    sort.direction === "Descending"
                        ? "Ascending"
                        : "Descending",
            })
        } else {
            setSort({
                type: type,
                direction: "Descending",
            })
        }
    }
    function handlePotCycleForward() {
        if (potSelection === 5) {
            setPotSelection(0)
        } else {
            setPotSelection(potSelection + 1)
        }
    }
    function handlePotCycleBackward() {
        if (potSelection === 0) {
            setPotSelection(5)
        } else {
            setPotSelection(potSelection - 1)
        }
    }

    const pots = sortedData
        .filter(
            (data) =>
                data.status === potOptions[potSelection].value[0] ||
                potOptions[potSelection].value[1] ||
                potOptions[potSelection].value[2] ||
                potOptions[potSelection].value[3]
        )
        .map((item) =>
            item.status === 0 ? (
                <Pot data={item} click={handlePotClick} />
            ) : item.status === 1 ? (
                <EPot data={item} click={handlePotClick} />
            ) : item.status === 2 ? (
                <WPot data={item} click={handlePotClick} />
            ) : item.status === 3 ? (
                <LPot data={item} click={handlePotClick} />
            ) : item.status === 4 ? (
                <APot data={item} click={handlePotClick} />
            ) : null
        )

    function handlePotClick(item) {
        navigate(`buy/${item.id}`)
    }

    return (
        <div
            className="Pots"
            style={{
                height: "fit-content",
                width: window.innerWidth,
                minHeight: window.innerHeight,
            }}
        >
            <NavBar />
            <div className="Pots__header">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <KeyboardArrowLeftIcon
                        sx={{ color: "white", padding: 2, cursor: "pointer" }}
                        onClick={() => handlePotCycleBackward()}
                    />
                    <h1
                        className="Pots__header-bigTitle"
                        onClick={() => handlePotCycleForward()}
                    >
                        {potOptions[potSelection].label}
                    </h1>
                    <KeyboardArrowRightIcon
                        sx={{ color: "white", padding: 2, cursor: "pointer" }}
                        onClick={() => handlePotCycleForward()}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h1 className="Pots__header-title">Sort by:</h1>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            style={{ opacity: sort.type === "Value" ? 1 : 0.5 }}
                            className="Pots__header-text"
                            onClick={() => handleSort("Value")}
                        >
                            Value
                        </h3>
                        {sort.type === "Value" ? (
                            sort.direction === "Descending" ? (
                                <KeyboardArrowDownIcon
                                    sx={{ color: "white" }}
                                />
                            ) : (
                                <KeyboardArrowUpIcon sx={{ color: "white" }} />
                            )
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            style={{
                                opacity: sort.type === "Buy-in" ? 1 : 0.5,
                            }}
                            className="Pots__header-text"
                            onClick={() => handleSort("Buy-in")}
                        >
                            Buy-in
                        </h3>
                        {sort.type === "Buy-in" ? (
                            sort.direction === "Descending" ? (
                                <KeyboardArrowDownIcon
                                    sx={{ color: "white" }}
                                />
                            ) : (
                                <KeyboardArrowUpIcon sx={{ color: "white" }} />
                            )
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            style={{ opacity: sort.type === "Time" ? 1 : 0.5 }}
                            className="Pots__header-text"
                            onClick={() => handleSort("Time")}
                        >
                            Time
                        </h3>
                        {sort.type === "Time" ? (
                            sort.direction === "Descending" ? (
                                <KeyboardArrowDownIcon
                                    sx={{ color: "white" }}
                                />
                            ) : (
                                <KeyboardArrowUpIcon sx={{ color: "white" }} />
                            )
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            style={{
                                opacity:
                                    sort.type === "Contributions" ? 1 : 0.5,
                            }}
                            className="Pots__header-text"
                            onClick={() => handleSort("Contributions")}
                        >
                            Contributions
                        </h3>
                        {sort.type === "Contributions" ? (
                            sort.direction === "Descending" ? (
                                <KeyboardArrowDownIcon
                                    sx={{ color: "white" }}
                                />
                            ) : (
                                <KeyboardArrowUpIcon sx={{ color: "white" }} />
                            )
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="Pots__container">
                {pots.length === 0 ? (
                    <div className="Pots__container-noneFound">
                        <h1 className="Pots__container-noneFound-title">
                            No pots matching the criteria found
                        </h1>
                    </div>
                ) : (
                    pots
                )}
            </div>
        </div>
    )
}
export default Pots
