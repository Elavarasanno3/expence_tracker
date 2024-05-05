import Header from "./components/header_components/Header";
import LeftMenu from "./components/left_menu_components/LeftMenu";
import Add from "./routes/add_content/Add";
import Balance from "./routes/balance_content/Balance";
import Expences from "./routes/expences_content/Expences";
import Income from "./routes/income_content/Income";
import Records from "./routes/records_content/Records";
import Reports from "./routes/reports_content/Reports";
import Home from "./routes/home_components/Home";
import Authentication from "./routes/authentication/Authentication"
import "./app.css"
import {BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/add" element={<Add/>} />
            <Route path="/balance" element={<Balance/>} />
            <Route path="/expences" element={<Expences />} />
            <Route path="/incomes" element={<Income />} />
            <Route path="/records" element={<Records />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element = {<Authentication/>} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
