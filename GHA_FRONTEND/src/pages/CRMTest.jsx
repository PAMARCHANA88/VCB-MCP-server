import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CRMTest() {

  const navigate = useNavigate();

  const [crmR, setCrmR] = useState("");
  const [crmY, setCrmY] = useState("");
  const [crmB, setCrmB] = useState("");

  const [result, setResult] = useState("");

  const evaluate = () => {

    const values = [
      Number(crmR),
      Number(crmY),
      Number(crmB)
    ];

    const isSafe = values.every(
      value => !isNaN(value) && value > 0
    );

    if (isSafe) {
      setResult("SAFE");
    } else {
      setResult("NOT SAFE");
    }

    // Save CRM data
    localStorage.setItem(
      "crmTest",
      JSON.stringify({
        crmR,
        crmY,
        crmB,
        result: isSafe ? "SAFE" : "NOT SAFE"
      })
    );
  };

  return (
    <div>

      <h1>Contact Resistance Test</h1>

      <input
        placeholder="CRM R"
        value={crmR}
        onChange={(e) => setCrmR(e.target.value)}
      />

      <input
        placeholder="CRM Y"
        value={crmY}
        onChange={(e) => setCrmY(e.target.value)}
      />

      <input
        placeholder="CRM B"
        value={crmB}
        onChange={(e) => setCrmB(e.target.value)}
      />

      <button onClick={evaluate}>
        Evaluate CRM
      </button>

      {result && (
        <>
          <h2>{result}</h2>

          <button
            onClick={() => navigate("/electrical")}
          >
            Proceed to Electrical Test
          </button>
        </>
      )}

    </div>
  );
}

export default CRMTest;