import { useState } from "react"

let Assingment2 = () => {

    const [name, setName] = useState('')

    const [val , setVal] = useState(false)

function handleInputChange(e){
    setName(e.target.value)
    setVal(false)
}
function getresult(){
    setVal(true)
     
}
function hide(){
    setVal(
false
    )
}



    return( 
        <>
        <h1> {val ? name : ''} </h1>
        <input type="text" placeholder='Enter your name' onChange={handleInputChange}  />
        <button onClick={getresult}>Submit</button>
        <button onClick={hide}>Hide</button>
      
        </>
    )




}

export default Assingment2