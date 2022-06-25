import React from "react"
import "./Pot.css"

function Pot(props) {
    return (
        <div className="Pot">
            <div className="Pot__header">
                <h3 className="Pot__header-text">{`#${props.data.id}`}</h3>
                <h3 className="Pot__header-text">{props.data.timeLeft}</h3>
            </div>
            <div className="Pot__body">
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            className="Pot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            Pot size
                        </h3>
                        <h1
                            className="Pot__body-title"
                            style={{ fontSize: "50px" }}
                        >
                            {props.data.potSize}
                        </h1>
                        <h3
                            className="Pot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            ZIL
                        </h3>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            className="Pot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            Min. buy-in amount
                        </h3>
                        <h1
                            className="Pot__body-title"
                            style={{ fontSize: "50px" }}
                        >
                            {props.data.buyIn}
                        </h1>
                        <h3
                            className="Pot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            ZIL
                        </h3>
                    </div>
                </div>
                <h3 className="Pot__body-text" style={{ fontWeight: 100 }}>
                    {`${props.data.contributions} contributions`}
                </h3>
            </div>
        </div>
    )
}
export default Pot
