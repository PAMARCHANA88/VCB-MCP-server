import { useState } from "react";
import { useNavigate } from "react-router-dom";

function IRTest() {

  const navigate = useNavigate();

  const [rr, setRR] = useState("");
  const [yy, setYY] = useState("");
  const [bb, setBB] = useState("");

  const [ry, setRY] = useState("");
  const [yb, setYB] = useState("");
  const [br, setBR] = useState("");

  const [re, setRE] = useState("");
  const [ye, setYE] = useState("");
  const [be, setBE] = useState("");

  const [result, setResult] = useState("");

  const evaluate = () => {

    const values = [
      Number(rr),
      Number(yy),
      Number(bb),
      Number(ry),
      Number(yb),
      Number(br),
      Number(re),
      Number(ye),
      Number(be)
    ];

    const isSafe = values.every(
      value => !isNaN(value) && value >= 100
    );

    if (isSafe) {
      setResult("SAFE");
    } else {
      setResult("NOT SAFE");
    }

    localStorage.setItem(
      "irTest",
      JSON.stringify({
        rr,
        yy,
        bb,
        ry,
        yb,
        br,
        re,
        ye,
        be,
        result: isSafe ? "SAFE" : "NOT SAFE"
      })
    );
  };

  return (
    <div>

      <h1>IR Test</h1>

      <input
        placeholder="R-R'"
        value={rr}
        onChange={(e) => setRR(e.target.value)}
      />

      <input
        placeholder="Y-Y'"
        value={yy}
        onChange={(e) => setYY(e.target.value)}
      />

      <input
        placeholder="B-B'"
        value={bb}
        onChange={(e) => setBB(e.target.value)}
      />

      <input
        placeholder="R-Y"
        value={ry}
        onChange={(e) => setRY(e.target.value)}
      />

      <input
        placeholder="Y-B"
        value={yb}
        onChange={(e) => setYB(e.target.value)}
      />

      <input
        placeholder="B-R"
        value={br}
        onChange={(e) => setBR(e.target.value)}
      />

      <input
        placeholder="R-E"
        value={re}
        onChange={(e) => setRE(e.target.value)}
      />

      <input
        placeholder="Y-E"
        value={ye}
        onChange={(e) => setYE(e.target.value)}
      />

      <input
        placeholder="B-E"
        value={be}
        onChange={(e) => setBE(e.target.value)}
      />

      <button onClick={evaluate}>
        Evaluate IR Test
      </button>

      {result && (
        <>
          <h2>{result}</h2>

          <button
            onClick={() => navigate("/crm")}
          >
            Proceed to CRM Test
          </button>
        </>
      )}

    </div>
  );
}

export default IRTest;