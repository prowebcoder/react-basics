import { useState } from "react";
function Btn() {
  const [data, secondData] = useState("Rahul Dhiman");
  function clicks() {
    secondData("Sangeeta");
    alert(data);
  }
  console.log("Components Reloaded ");
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={clicks}>Click Me</button>
    </div>
  );
}
export default Btn;
