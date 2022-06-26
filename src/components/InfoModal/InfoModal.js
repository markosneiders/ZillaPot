import "./InfoModal.css"

function InfoModal(props) {
    return (
        <div className="InfoModal">
            <div className="InfoModal__header">
                <h1 className="InfoModal__header-title">Info</h1>
                <h1 className="InfoModal__header-title">#337474458</h1>
            </div>
            <div className="InfoModal__body">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <h1 className="InfoModal__body-text">
                            Time increase per deposit
                        </h1>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "right",
                        }}
                    >
                        <h1 className="InfoModal__body-text">3m 0s</h1>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <h1 className="InfoModal__body-text">
                            Min. deposit increase per deposit
                        </h1>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "right",
                        }}
                    >
                        <h1 className="InfoModal__body-text">5%</h1>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <h1 className="InfoModal__body-text">
                            Pot starting amount
                        </h1>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "right",
                        }}
                    >
                        <h1 className="InfoModal__body-text">100 ZIL</h1>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <h1 className="InfoModal__body-text">Pot age</h1>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "right",
                        }}
                    >
                        <h1 className="InfoModal__body-text">17h 45m 16s</h1>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <h1 className="InfoModal__body-text">Created by</h1>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "right",
                        }}
                    >
                        <h1 className="InfoModal__body-text">0x731e...9aCE</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal
