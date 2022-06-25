import React from "react"
import "./WPot.css"

function WPot(props) {
    return (
        <div className="WPot">
            <div className="WPot__header">
                <h3 className="WPot__header-text">{`#${props.data.id}`}</h3>
                <h3 className="WPot__header-text">Winner!</h3>
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
                            style={{ fontSize: "50px" }}
                        >
                            Winner!
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
                        {props.data.potSize}
                    </h1>
                    <h3 className="WPot__body-text" style={{ fontWeight: 100 }}>
                        ZIL
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default WPot
