import React from "react"
import "./APot.css"

function APot(props) {
    return (
        <div className="APot" onClick={() => props.click(props.data)}>
            <div
                className={
                    props.data.timeLeft <= "00:00:10:00"
                        ? "APot__header-expiring"
                        : "APot__header"
                }
            >
                <h3 className="APot__header-text-lead">{`#${props.data.id}`}</h3>
                <h3
                    className={
                        props.data.timeLeft <= "00:00:10:00"
                            ? "APot__header-text-expiring"
                            : "APot__header-text"
                    }
                >
                    {props.data.timeLeft}
                </h3>
            </div>
            <div className="APot__body">
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
                            className="APot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            Pot size
                        </h3>
                        <h1
                            className="APot__body-title"
                            style={{ fontSize: "50px" }}
                        >
                            {props.data.potSize}
                        </h1>
                        <h3
                            className="APot__body-text"
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
                            className="APot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            Min. buy-in amount
                        </h3>
                        <h1
                            className="APot__body-title"
                            style={{ fontSize: "50px" }}
                        >
                            {props.data.buyIn}
                        </h1>
                        <h3
                            className="APot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            ZIL
                        </h3>
                    </div>
                </div>
                <h3 className="APot__body-text" style={{ fontWeight: 100 }}>
                    {`${props.data.deposits.length} contributions`}
                </h3>
            </div>
        </div>
    )
}
export default APot
