import "./Container.css"

function Container(props) {
    return (
        <div className="Container" style={{ height: props.height }}>
            <div className="Container__header">
                <h1 className="Container__header-title">
                    {props.headerTitleLeft}
                </h1>
                <h1 className="Container__header-title">
                    {props.headerTitleRight}
                </h1>
            </div>
            <div className="Container__body">{props.content}</div>
        </div>
    )
}

export default Container
