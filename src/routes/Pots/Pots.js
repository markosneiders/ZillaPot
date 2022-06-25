import React from "react"
import "./Pots.css"

import Pot from "../../components/Pot/Pot"
import ScrollAnimation from "react-animate-on-scroll"

function Pots() {
    // const addr = window.zilPay.wallet.defaultAccount.bech32

    // function getBalance() {
    //     window.zilPay.blockchain.getBalance(addr).then(function (resp) {
    //         console.log(resp)
    //     })
    // }
    const data = {
        id: "#3473346343",
        timeLeft: "19h 15m 6s",
        potSize: 5374,
        contributions: 17,
    }

    return (
        <div
            className="Pots"
            style={{ height: window.innerHeight * 2, width: window.innerWidth }}
        >
            <div className="Pots__container">
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
                <Pot data={data} />
            </div>
        </div>
    )
}
export default Pots
