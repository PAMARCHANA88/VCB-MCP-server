import React, { useEffect, useState } from "react";

function Reports() {

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const saveToMongo = async () => {

    try {

      const timing = JSON.parse(localStorage.getItem("timingTest"));
      const ir = JSON.parse(localStorage.getItem("irTest"));
      const crm = JSON.parse(localStorage.getItem("crmTest"));
      const electrical = JSON.parse(localStorage.getItem("electricalTest"));
      const mechanical = JSON.parse(localStorage.getItem("mechanicalTest"));

      const payload = {

        close_r: Number(timing?.closeR || 0),
        close_y: Number(timing?.closeY || 0),
        close_b: Number(timing?.closeB || 0),

        open_r: Number(timing?.openR || 0),
        open_y: Number(timing?.openY || 0),
        open_b: Number(timing?.openB || 0),

        rr: Number(ir?.rr || 0),
        yy: Number(ir?.yy || 0),
        bb: Number(ir?.bb || 0),

        ry: Number(ir?.ry || 0),
        yb: Number(ir?.yb || 0),
        br: Number(ir?.br || 0),

        re: Number(ir?.re || 0),
        ye: Number(ir?.ye || 0),
        be: Number(ir?.be || 0),

        crm_r: Number(crm?.crmR || 0),
        crm_y: Number(crm?.crmY || 0),
        crm_b: Number(crm?.crmB || 0),

        motor_operator: Number(electrical?.motorOperator || 0),
        closing_coil: Number(electrical?.closingCoil || 0),
        tripping_coil: Number(electrical?.tripCoil || 0),
        additional_trip_coil: Number(electrical?.additionalTripCoil || 0),

        open_close_operation:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        close_coil_status:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        trip_coil_status:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        spring_motor_status:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        racking_mechanism:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        rack_in_operation:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        shutter_operation:
          mechanical?.inspection === "OK"
            ? "OK"
            : "NOT OK",

        general_appearance:
          mechanical?.inspection === "OK"
            ? "GOOD"
            : "BAD"
      };

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Report Saved Successfully");

    } catch (error) {

      console.error(error);
      alert("Error Saving Report");

    }
  };

  useEffect(() => {

    const fetchReports = () => {

      fetch("http://127.0.0.1:8000/reports")
        .then((res) => res.json())
        .then((data) => {

          setReports(data.data);
          setLoading(false);

        })
        .catch((err) => {

          console.error(err);
          setLoading(false);

        });

    };

    fetchReports();

    const interval = setInterval(fetchReports, 5000);

    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return <h2>Loading Reports...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>VCB Health Assessment Reports</h1>

      <button onClick={saveToMongo}>
        Save Current Test Data To MongoDB
      </button>

      <br />
      <br />

      <table
        border="1"
        cellPadding="10"
        width="100%"
        style={{
          borderCollapse: "collapse",
          textAlign: "center"
        }}
      >

        <thead>
          <tr>
            <th>Report ID</th>
            <th>Status</th>
            <th>Timing</th>
            <th>IR</th>
            <th>CRM</th>
            <th>Accessories</th>
            <th>Mechanical</th>
            <th>Advice</th>
          </tr>
        </thead>

        <tbody>

          {reports.length === 0 ? (

            <tr>
              <td colSpan="8">
                No Reports Found
              </td>
            </tr>

          ) : (

            reports.map((report) => (

              <tr key={report._id}>

                <td>{report._id}</td>

                <td
                  style={{
                    color:
                      report.status === "SAFE"
                        ? "green"
                        : "red",
                    fontWeight: "bold"
                  }}
                >
                  {report.status}
                </td>

                <td>{report.timing_status ? "PASS" : "FAIL"}</td>
                <td>{report.ir_status ? "PASS" : "FAIL"}</td>
                <td>{report.crm_status ? "PASS" : "FAIL"}</td>
                <td>{report.accessories_status ? "PASS" : "FAIL"}</td>
                <td>{report.mechanical_status ? "PASS" : "FAIL"}</td>

                <td>
                  {report.advice || "No Advice Available"}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default Reports;