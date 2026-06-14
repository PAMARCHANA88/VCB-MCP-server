import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TimingTest from "./pages/TimingTest";
import IRTest from "./pages/IRTest";
import CRMTest from "./pages/CRMTest";
import ElectricalTest from "./pages/ElectricalTest";
import MechanicalTest from "./pages/MechanicalTest";
import Reports from "./pages/Reports";

import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">

        <Sidebar />

        <div className="content">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timing" element={<TimingTest />} />
            <Route path="/ir" element={<IRTest />} />
            <Route path="/crm" element={<CRMTest />} />
            <Route path="/electrical" element={<ElectricalTest />} />
            <Route path="/mechanical" element={<MechanicalTest />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;