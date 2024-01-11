import React, { useState } from "react";

function Formdata() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      {print ? <div>{data}</div> : null}
      <input type="text" onChange={getData}></input>
      <button onClick={() => setPrint(true)}>Print</button>
    </div>
  );
}

export default Formdata;
