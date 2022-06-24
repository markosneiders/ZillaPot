import "./LandingPage.css"

//Component imports
import ConnectButton from "../../components/ConnectButton/ConnectButton"

function LandingPage() {
    return (
        <div
            className="LandingPage"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <h1 className="LandingPage__title">ZillaPot</h1>
            <ConnectButton />
        </div>
    )
}
export default LandingPage
