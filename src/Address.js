import React from "react";

function Address(props) {
  console.log(props);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>City: {props.city}</h2>
      <h2>
        Complete Address: {props.completeAddress.state} ,{" "}
        {props.completeAddress.pincode}
      </h2>
    </div>
  );
}

export default Address;
