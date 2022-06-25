import "./Pots.css"

function Pots() {
    const addr = window.zilPay.wallet.defaultAccount.bech32

    function getBalance() {
        window.zilPay.blockchain.getBalance(addr).then(function (resp) {
            console.log(resp)
        })
    }

    return (
        <div
            className="Pots"
            style={{ height: window.innerHeight, width: window.innerWidth }}
        >
            <button
                onClick={() => {
                    getBalance()
                }}
            >
                Get your acc balance!
            </button>
        </div>
    )
}
export default Pots
