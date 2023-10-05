import React from 'react'

// custom hook --> useInput
import {useInput} from '../useInput'

function CustomHook() {
    const [colorProps , resetColor ] = useInput("")
    const [hexProps , resetHex ] = useInput("#000000")


    const submit = (e)=>{
        e.preventDefault();
        alert(`${colorProps.value} color -> hex code ${hexProps.value}`)
        resetColor();
        resetHex();
    }


  return (
    <>
        <h1>Custom Hook</h1>
        <form onSubmit={submit}>
            <input {...colorProps} type="text" placeholder='color...'/>&nbsp;
            <br/>
            <input {...hexProps} type="color" />&nbsp;

            <button>Add</button>
        </form>
    </>
  )
}

export default CustomHook