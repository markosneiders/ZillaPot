import React from "react"
import "./EPot.css"

function EPot(props) {
    return (
        <div className="EPot" onClick={() => props.click(props.data)}>
            <div className="EPot__header">
                <h3 className="EPot__header-text">{`#${props.data.id}`}</h3>
                <h3 className="EPot__header-text">Expired</h3>
            </div>
            <div className="EPot__body">
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
                            className="EPot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            Final pot size
                        </h3>
                        <h1
                            className="EPot__body-title"
                            style={{ fontSize: "50px" }}
                        >
                            {props.data.potSize}
                        </h1>
                        <h3
                            className="EPot__body-text"
                            style={{ fontWeight: 100 }}
                        >
                            ZIL
                        </h3>
                    </div>
                </div>
                <h3 className="EPot__body-text" style={{ fontWeight: 100 }}>
                    {`${props.data.deposits.length} total contributions`}
                </h3>
            </div>
        </div>
    )
}
export default EPot
