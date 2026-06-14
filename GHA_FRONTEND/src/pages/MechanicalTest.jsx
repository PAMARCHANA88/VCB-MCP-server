import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MechanicalTest() {

  const navigate = useNavigate();

  const [inspection, setInspection] = useState("OK");
  const [result, setResult] = useState("");

  const evaluate = () => {

    const isSafe = inspection === "OK";

    if (isSafe) {
      setResult("SAFE");
    } else {
      setResult("NOT SAFE");
    }

    localStorage.setItem(
      "mechanicalTest",
      JSON.stringify({
        inspection,
        result: isSafe ? "SAFE" : "NOT SAFE"
      })
    );
  };

  return (
    <div>

      <h1>Mechanical Inspection</h1>

      <select
        value={inspection}
        onChange={(e) => setInspection(e.target.value)}
      >
        <option value="OK">OK</option>
        <option value="NOT OK">NOT OK</option>
      </select>

      <button onClick={evaluate}>
        Evaluate
      </button>

      {result && (
        <>
          <h2>{result}</h2>

          <button
            onClick={() => navigate("/reports")}
          >
            View Final Report
          </button>
        </>
      )}

    </div>
  );
}

export default MechanicalTest;