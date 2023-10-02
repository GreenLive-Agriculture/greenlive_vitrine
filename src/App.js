import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/lading";
import LogIn from "./pages/login";
import SignUp from "./pages/signUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
