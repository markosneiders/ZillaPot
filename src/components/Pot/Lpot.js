import React from "react"
import "./LPot.css"

function LPot(props) {
    return (
        <div
            className="LPot"
            onClick={() => props.click(props.data.id, props.data.status)}
        >
            <div className="LPot__header">
                <h3 className="LPot__header-text">{`#${props.data.id}`}</h3>
                <h3 className="LPot__header-text">Lost</h3>
            </div>
            <div className="LPot__body">
                <h1 className="LPot__body-title" style={{ fontSize: "30px" }}>
                    Lost to
                </h1>
                <h1 className="LPot__body-title" style={{ fontSize: "30px" }}>
                    {/* {props.data.winner} */} 0x5364...5363
                </h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h1
                        className="LPot__body-title"
                        style={{ fontSize: "40px" }}
                    >
                        {props.data.potSize}
                    </h1>
                    <h3 className="LPot__body-text" style={{ fontWeight: 600 }}>
                        ZIL
                    </h3>
                </div>

                <h3 className="LPot__body-text" style={{ fontWeight: 600 }}>
                    Better luck next time!
                </h3>
            </div>
        </div>
    )
}
export default LPot
