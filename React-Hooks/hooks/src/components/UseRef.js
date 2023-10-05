import React , {useRef} from 'react'

function UseRef() {
    const color = useRef()
    const hex = useRef()

    const submit = (e)=>{
        e.preventDefault();

        const colorVal = color.current.value;
        const hexVal = hex.current.value;
        alert(`${colorVal} color has hex code of ${hexVal}`)
        color.current.value = "";
       hex.current.value = "";
    }

  return (
    <>
        <h1>UseRef Hook</h1>
        <form onSubmit={submit}>
            <input ref={color} type="text" placeholder='color...'/>&nbsp;
            <br/>
            <input ref={hex} type="color" />&nbsp;
            <button>Add</button>
        </form>
        
    </>
    
  )
}

export default UseRef