import './App.css';
import Main from "./Pages/Main";
import {Route, Routes} from "react-router-dom";
import DetailPage from "./Pages/detailPage";
import {Header} from "./components/Header/header";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/flat/:id' element={<DetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
