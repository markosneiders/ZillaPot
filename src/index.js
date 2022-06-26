import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./routes/LandingPage/LandingPage"
import Pots from "./routes/Pots/Pots"
import PotBuy from "./routes/PotBuy/PotBuy"

import NavBar from "./components/NavBar/NavBar"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Routes className="index">
            <Route path="/" element={<LandingPage />} />
            <Route path="pots" element={<Pots />} />
            <Route path="pots/buy" element={<PotBuy />} />
        </Routes>
    </BrowserRouter>
)
