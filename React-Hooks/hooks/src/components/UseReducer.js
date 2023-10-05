import React, { useReducer } from 'react'


const initialState = {
  message : "Hiii."
}

function reducer(state , action){
  switch(action.type){
    case "greet":
      return {message : `HELLO!!!" (Previous -> ${state.message})`}
    case "yell":
      return {message :`SHUT UP!!!  (Previous -> ${state.message})`}
    case "calm":
      return {message :`SSHHHHH!!!  (Previous -> ${state.message})`}
    default :
      return {message :`No Data Found  (Previous -> ${state.message})`}
  }
}

function UseReducer() {

    const [number , setNumber ] = useReducer((number , newNum)=> number + newNum , 0);

    const [tick , setTick] = useReducer(tick => !tick , false);

    const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <h3>Counter : {number}</h3>
        <button onClick={()=>setNumber(2)}>Set Number</button>


        <br/> <br/>
        <input type="checkbox" value={tick} onChange={setTick}/>
        <label>{tick ? "Ticked" : "Unticked"}</label>


        <br/>
        <h3>Message : {state.message}</h3>
        <button onClick={()=>dispatch({type :"greet"})}>GREET</button>&nbsp;
        <button onClick={()=>dispatch({type :"yell"})}>YELL</button>&nbsp;
        <button onClick={()=>dispatch({type :"calm"})}>CALM</button>&nbsp;
        <button onClick={()=>dispatch({type :"nothing"})}>DEFAULT</button>
    </div>
  )
}

export default UseReducer