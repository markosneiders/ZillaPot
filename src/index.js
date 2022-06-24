import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./routes/LandingPage/LandingPage"
import Pots from "./routes/Pots/Pots"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Routes className="index">
            <Route path="/" element={<LandingPage />} />
            <Route path="Pots" element={<Pots />} />
        </Routes>
    </BrowserRouter>
)
