function StatusCard({ title, status }) {

  return (
    <div className="status-card">

      <h3>{title}</h3>

      <div
        className={
          status === "SAFE"
            ? "status safe"
            : status === "NOT SAFE"
            ? "status not-safe"
            : "status pending"
        }
      >
        {status}
      </div>

    </div>
  );
}

export default StatusCard;