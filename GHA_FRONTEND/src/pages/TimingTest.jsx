import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TimingTest() {

  const navigate = useNavigate();

  const [closeR, setCloseR] = useState("");
  const [closeY, setCloseY] = useState("");
  const [closeB, setCloseB] = useState("");

  const [openR, setOpenR] = useState("");
  const [openY, setOpenY] = useState("");
  const [openB, setOpenB] = useState("");

  const [result, setResult] = useState("");

  const evaluate = () => {

    const values = [
      Number(closeR),
      Number(closeY),
      Number(closeB),
      Number(openR),
      Number(openY),
      Number(openB)
    ];

    const isSafe = values.every(
      value => !isNaN(value) && value > 0
    );

    setResult(isSafe ? "SAFE" : "NOT SAFE");

    localStorage.setItem(
      "timingTest",
      JSON.stringify({
        closeR,
        closeY,
        closeB,
        openR,
        openY,
        openB,
        result: isSafe ? "SAFE" : "NOT SAFE"
      })
    );
  };

  return (
    <div>

      <h1>Timing Test</h1>

      <input
        placeholder="Close R"
        value={closeR}
        onChange={(e) => setCloseR(e.target.value)}
      />

      <input
        placeholder="Close Y"
        value={closeY}
        onChange={(e) => setCloseY(e.target.value)}
      />

      <input
        placeholder="Close B"
        value={closeB}
        onChange={(e) => setCloseB(e.target.value)}
      />

      <input
        placeholder="Open R"
        value={openR}
        onChange={(e) => setOpenR(e.target.value)}
      />

      <input
        placeholder="Open Y"
        value={openY}
        onChange={(e) => setOpenY(e.target.value)}
      />

      <input
        placeholder="Open B"
        value={openB}
        onChange={(e) => setOpenB(e.target.value)}
      />

      <button onClick={evaluate}>
        Evaluate Timing Test
      </button>

      {result && (
        <>
          <h2>{result}</h2>

          <button
            onClick={() => navigate("/ir")}
          >
            Proceed to IR Test
          </button>
        </>
      )}

    </div>
  );
}

export default TimingTest;