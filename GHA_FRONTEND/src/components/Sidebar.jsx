import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>VCB System</h2>

      <Link to="/">Dashboard</Link>

      <Link to="/timing">Timing Test</Link>

      <Link to="/ir">IR Test</Link>

      <Link to="/crm">CRM Test</Link>

      <Link to="/electrical">Electrical</Link>

      <Link to="/mechanical">Mechanical</Link>

      <Link to="/reports">Reports</Link>

    </div>
  );
}

export default Sidebar;