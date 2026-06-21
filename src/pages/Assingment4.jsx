import React, { useState } from "react";
import "../App.css"

import { IoPerson } from "react-icons/io5";

export default function Assingment4() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    sellector: "",
    mobile: "",
    email: "",

    password: "",
  });
  const [data,setData]=useState(null)
  

  const handleform = (e) => {
    e.preventDefault();

    console.log(form);

  
      const storeValue  = JSON.stringify(form)
          
            localStorage.setItem("userData",storeValue )
           const getVlaue =  localStorage.getItem("userData")
         const parseValue =   JSON.parse(getVlaue)
        
         setData(parseValue)





  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="main4">
      <form onSubmit={(e) => handleform(e)}>
        <h5>Alerady have an acount? <span className="green">sign in to LMS</span> </h5>

        <h3>creat a new account</h3>

        <label htmlFor="name">First Name</label>

      <input
        
        
          type="text"
          name="firstName"
          id="name"
          placeholder="enter your first name  " 
          onChange={handleChange}
        />
        <br />

        <label htmlFor="name2">Last Name</label>
        
        <input
          type="text"
          name="lastName"
          id="name2"
          placeholder="enter your last name "
          onChange={handleChange}
        />
        <br />
     
        <label htmlFor="number" >Mobile No</label>
        
           <div className="mobile">
        <button>+92</button>
        <select name="sellector" id="mobile" onChange={handleChange}>
          <option value="operator"> opertaor</option>
        </select>
        <input

        id="number"
          type="text"
          name="mobile"
          placeholder="7 digit number"
          onChange={handleChange}
        />
        </div>
        <br />
        <label htmlFor="email">Email Adrees</label>
      
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email "
          onChange={handleChange}
        />
        <br />
        <label htmlFor="pass"> Password</label>
      
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
        />
        <br />
<p>7-6 charcters start with Alphabets then NUmbers OR characters !@#$</p>
        <button className="button2">Submit</button>
<div className="data">

                        {data ? <h4>Welcome : {data.email}</h4> : "data is not found"}
</div>
        </form>

      
    </div>
  );
}
 