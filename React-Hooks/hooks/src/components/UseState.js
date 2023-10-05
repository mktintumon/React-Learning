import React , {useState} from 'react'
import {FaStar} from 'react-icons/fa'


// for creating star rating component
function Star({selected = false , onSelect }){
  return(
    <FaStar style={{fontSize:"2rem"}}
      color={selected ? "red" : "gray"}
      onClick={onSelect}
    />
  )
}


function UseState({totalStars = 5}) {
    const [status , setStatus] = useState(false);
    const [counter , setCounter] = useState(0);
    const [check , setCheck] = useState(false);

    // for star rating 
    const [selectedStars , setSelectedStars] = useState(0)
    const createStar = (length=5)=>[...Array(length)];

  return (
    <div>
        <h1>UseState Hook</h1>
        <h3>Result : {status}
        <label>{status ? "Not declared" : "Declared"}</label></h3>

        <input type="checkbox" value={check} onChange={()=>setCheck(!check)}/>
        <label>{check ? "checked" : "unchecked"}</label>
        
        <h3>Result counter : {counter}</h3>
        <button onClick={()=>setCounter(counter+1)}>Counter</button> &nbsp;
        <button onClick={()=>setStatus(!status)}>
          {status ? "Remove Result" : "Declare Result"}</button>
        
        <hr/>

        {/* star rating */}
        
        <h2>Star Rating Reviews</h2>
          {createStar(totalStars).map((star,idx)=>(
            <>
              <Star key={idx} 
              selected={selectedStars > idx} 
              onSelect={()=>setSelectedStars(idx+1)} /> 
              &nbsp;
            </>
            
          ))}
          <h4><i>Your Rating : {selectedStars} out of {totalStars}</i></h4> 
    </div>
  )
}

export default UseState