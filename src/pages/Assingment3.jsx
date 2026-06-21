import React, { useState } from "react";



export const Assingment3 = () => {
  let [text, settext] = useState("");

  let [password, setpassword] = useState("");

  let [checkbox, setcheckbox] = useState(false);

  function handleform(e) {
    e.preventDefault();
  }

  let update = () => {
    console.log(text);
    console.log(password);
    console.log(checkbox);
  };

  return (
    <div className="main">
      <img src="logo.6lrMPvRL.png" width="150" height="100" alt="Description" />

      <h3>Student Portal</h3>

      <form onSubmit={(e) => handleform(e)}>
        <h1>Login </h1>

        <p>
          Kindly provide the CNIC and password used during SMIT course
          registration.
        </p>

        <label htmlFor="text"> CNIC*</label>
        <br />
        <input
          className="input1"
          type="text"
          id="text"
          placeholder="xxxxx-xxxxxxx-x"
          onChange={(e) => settext(e.target.value)}
        />

        <br />
        <label htmlFor="password">Password*</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password                                             show"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />

        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            
            onChange={(e) => setcheckbox(e.target.checked)}
          />

          <label htmlFor="checkbox">Remember me</label>
          <p className="forget">forget password ?</p>
          <br />
        </div>
        <button onClick={update}> Login</button>
      </form>
    </div>
  );
};
