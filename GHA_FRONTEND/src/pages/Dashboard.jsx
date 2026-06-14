import StatusCard from "../components/StatusCard";

function Dashboard() {

  const timing = JSON.parse(localStorage.getItem("timingTest"));
  const ir = JSON.parse(localStorage.getItem("irTest"));
  const crm = JSON.parse(localStorage.getItem("crmTest"));
  const electrical = JSON.parse(localStorage.getItem("electricalTest"));
  const mechanical = JSON.parse(localStorage.getItem("mechanicalTest"));

  const resetTests = () => {

    localStorage.removeItem("timingTest");
    localStorage.removeItem("irTest");
    localStorage.removeItem("crmTest");
    localStorage.removeItem("electricalTest");
    localStorage.removeItem("mechanicalTest");

    window.location.reload();

  };

  return (
    <div>

      <h1>VCB Health Dashboard</h1>

      <button
        onClick={resetTests}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Reset All Tests
      </button>

      <div className="cards">

        <StatusCard
          title="Timing Test"
          status={timing?.result || "PENDING"}
        />

        <StatusCard
          title="IR Test"
          status={ir?.result || "PENDING"}
        />

        <StatusCard
          title="CRM Test"
          status={crm?.result || "PENDING"}
        />

        <StatusCard
          title="Electrical"
          status={electrical?.result || "PENDING"}
        />

        <StatusCard
          title="Mechanical"
          status={mechanical?.result || "PENDING"}
        />

      </div>

    </div>
  );
}

export default Dashboard;