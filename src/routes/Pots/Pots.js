import React, { useState, useEffect } from "react"
import "./Pots.css"

import TempData from "./TempData.json"
//Importing all 4 pot card types
import Pot from "../../components/Pot/Pot"
import EPot from "../../components/Pot/EPot"
import WPot from "../../components/Pot/Wpot"
import LPot from "../../components/Pot/Lpot"

import ScrollAnimation from "react-animate-on-scroll"
import Select from "react-select"

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

function Pots() {
    const [potSelection, setPotSelection] = useState(0)
    const [sort, setSort] = useState({ type: "Value", direction: "Descending" })
    const [rawData, setRawData] = useState(TempData)
    const [sortedData, setSortedData] = useState([{}])
    // const addr = window.zilPay.wallet.defaultAccount.bech32

    // function getBalance() {
    //     window.zilPay.blockchain.getBalance(addr).then(function (resp) {
    //         console.log(resp)
    //     })
    // }

    useEffect(() => {
        getData()
        sortData()
    }, [])

    useEffect(() => {
        sortData()
    }, [sort])

    async function getData() {}

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

    const potOptions = [
        "Active Pots",
        "All Pots",
        "Joined Pots",
        "Won Pots",
        "Lost Pots",
        "Expired Pots",
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
    function handlePotCyclebackward() {
        if (potSelection === 0) {
            setPotSelection(5)
        } else {
            setPotSelection(potSelection - 1)
        }
    }

    const pots = sortedData.map((item) =>
        item.status === 0 ? (
            <Pot data={item} />
        ) : item.status === 1 ? (
            <EPot data={item} />
        ) : item.status === 2 ? (
            <WPot data={item} />
        ) : item.status === 3 ? (
            <LPot data={item} />
        ) : null
    )

    return (
        <div
            className="Pots"
            style={{
                height: "fit-content",
                width: window.innerWidth,
                minHeight: window.innerHeight,
            }}
        >
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
                        onClick={() => handlePotCycleForward()}
                    />
                    <h1
                        className="Pots__header-bigTitle"
                        onClick={() => handlePotCycleForward()}
                    >
                        {potOptions[potSelection]}
                    </h1>
                    <KeyboardArrowRightIcon
                        sx={{ color: "white", padding: 2, cursor: "pointer" }}
                        onClick={() => handlePotCyclebackward()}
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
            <div className="Pots__container">{pots}</div>
        </div>
    )
}
export default Pots
