import React from "react"
import "./Help.css"
import NavBar from "../../components/NavBar/NavBar"
import InfoCard from "../../components/InfoCard/InfoCard"
function Help() {
    return (
        <div
            className="Help"
            style={{ height: "fit-content", width: window.innerWidth }}
        >
            <NavBar />
            <h1 className="Help__title">ZillaPot</h1>
            <h1 className="Help__text">
                First sunk cost game on the Zilliqa chain
            </h1>
            <h1 className="Help__text">
                Developed by Zappingmadnnes and markosneiders
            </h1>
            <h1 className="Help__text">for GR14 ZILHIVE challenge</h1>
            <div className="Help__cards">
                <InfoCard
                    variant={1}
                    title="First of it's kind"
                    text="ZillaPot is the first casino game of it's
                            kind on the Zilliqa blockchain. Sporting sleek astethics and 
                            engaging gameplay ZillaPot will have you coming back
                            for more. We are proud to be the trailblazers of the casino world
                            in this new frontier."
                />
                <InfoCard
                    variant={2}
                    title="How to play ZillaPot"
                    text="The main goal of ZillaPot is to be the last 
                            person to deposit money into the pot before the time runs out.
                            The last person to deposit will win the whole content of the pot.
                            Every time someone deposits, the minimum deposit goes up and the 
                            time increases."
                />
                <InfoCard
                    variant={3}
                    title="How to get started"
                    text="It's simple! Scroll up and connect with your ZillPay wallet. 
                            After that head over to the pots section and find one which suits you best, 
                            or create your own. If you're ever unsure or get stuck reffer to the help page."
                />
                <InfoCard
                    variant={4}
                    title="Pot mechanics"
                    text="Each pot has a starting value which the owner pays in.
                            When the pot is created the timer starts, the last person to deposit wins. Each deposit must be 
                            greater than the minimum deposit amount. Every deposit increases 
                            the remaining time and the minimum deposit amount. "
                />
                <InfoCard
                    variant={1}
                    title="Creating a pot"
                    text='Creating a pot on ZillaPot is easy. In the pots tab 
                    select "create new pot" and then customize it to your liking 
                    if you are unsure about what each proprty does simply click 
                    the question mark to see an explanation. To start the pot you must 
                    pay the starting deposit.'
                />
                <InfoCard
                    variant={2}
                    title="Winning and losing"
                    text="If you're the last person to deposit into a pot you win it's contents. 
                    If not you lose, so keep a close eye on the pots at the end. After winning you 
                    can claim your prize through the pot menu. In your profile you'll be able to see your stats such as 
                    how many pots you have won or lost."
                />
            </div>
        </div>
    )
}
export default Help
