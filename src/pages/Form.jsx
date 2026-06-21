import React, { useState } from 'react'

function Form() {

const [text, settext] = useState({
    text: "",
    password: "",
}   


)

const [error, seterror] = useState(null)




 const  handleform = (e) => {
                e.preventDefault()

    console.log(text)   

    if(text.text.trim() === ""){
        seterror("Please fill in all fields") 
        alert(error)     
    } else if (text.password.length < 6){
        seterror("Password must be at least 6 characters long")
        alert(error)
    } else {
        alert("Form submitted successfully")
    }
}

const handlechange = (e) => {
    settext({
        ...text,
        [e.target.name]: e.target.value
    })
}



  return (
    <div>

        <form onSubmit={ (e) => handleform(e)}>

<label htmlFor="text"> CNIC*</label>
<br />
<input type="text" id="text" name="text" placeholder="xxxxx-xxxxxxx-x" onChange={handlechange} />
<br />


<label htmlFor="password">Password*</label>
<br />
<input type="password" id="password" name="password" placeholder="Enter your password" onChange={handlechange} />
<br />
<button >Submit</button>

</form>

    </div>
  )
}

export default Form