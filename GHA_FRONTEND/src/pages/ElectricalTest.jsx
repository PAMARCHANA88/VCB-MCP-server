import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ElectricalTest() {

  const navigate = useNavigate();

  const [motorOperator, setMotorOperator] = useState("");
  const [closingCoil, setClosingCoil] = useState("");
  const [tripCoil, setTripCoil] = useState("");
  const [additionalTripCoil, setAdditionalTripCoil] = useState("");

  const [result, setResult] = useState("");

  const evaluate = () => {

    const values = [
      Number(motorOperator),
      Number(closingCoil),
      Number(tripCoil),
      Number(additionalTripCoil)
    ];

    const isSafe = values.every(
      value => !isNaN(value) && value > 0
    );

    if (isSafe) {
      setResult("SAFE");
    } else {
      setResult("NOT SAFE");
    }

    localStorage.setItem(
      "electricalTest",
      JSON.stringify({
        motorOperator,
        closingCoil,
        tripCoil,
        additionalTripCoil,
        result: isSafe ? "SAFE" : "NOT SAFE"
      })
    );
  };

  return (
    <div>

      <h1>Electrical Accessories</h1>

      <input
        placeholder="Motor Operator"
        value={motorOperator}
        onChange={(e) => setMotorOperator(e.target.value)}
      />

      <input
        placeholder="Closing Coil"
        value={closingCoil}
        onChange={(e) => setClosingCoil(e.target.value)}
      />

      <input
        placeholder="Trip Coil"
        value={tripCoil}
        onChange={(e) => setTripCoil(e.target.value)}
      />

      <input
        placeholder="Additional Trip Coil"
        value={additionalTripCoil}
        onChange={(e) => setAdditionalTripCoil(e.target.value)}
      />

      <button onClick={evaluate}>
        Evaluate
      </button>

      {result && (
        <>
          <h2>{result}</h2>

          <button
            onClick={() => navigate("/mechanical")}
          >
            Proceed to Mechanical Test
          </button>
        </>
      )}

    </div>
  );
}

export default ElectricalTest;