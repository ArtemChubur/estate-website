import React, {useEffect, useState} from "react";
import './App.css';
import Main from "./Pages/Main";
import {Route, Routes} from "react-router-dom";
import DetailPage from "./Pages/detailPage";
import {Header} from "./components/Header/header";

function App() {
    const [activePage, setActivePage] = useState(false);
    const page2 = sessionStorage.getItem('page')
    useEffect(() => {
        if (page2 === 'about') {
            setActivePage(false)
        } else {
            setActivePage(true)
        }
    });
    return (
    <div className="App">
        <Header
            page={activePage}
        />
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/flat/:id' element={<DetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
