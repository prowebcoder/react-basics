import React, { useState } from "react";

function Formfields() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState("");
  function getfFormdata(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={getfFormdata}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <select onChange={(e) => setInterest(e.target.value)}>
          <option value="Select">Select</option>
          <option value="Javascript">Javascript</option>
          <option value="Node">Node</option>
          <option value="react">React</option>
        </select>
        <br></br>
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        ></input>
        <span>Please accept or you will be rejected</span>
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Formfields;
