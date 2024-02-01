import React from 'react'

export default function Alert(props) {

  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); // So here we are making the all the characters to lower case and then picking up the first character then making it into uppercase. Then we are slicing the first letter from the variable lower as we already have an capitalized version of it . Then we join using Arithmetic Operation
  }

  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
    </div>
  )
}


// props.alert && 
//We use this as we have set the props.alert property to null initially so if the value is null the code below won't run and if it gets a value then it till run immediately