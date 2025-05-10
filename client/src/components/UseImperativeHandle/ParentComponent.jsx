import { useRef } from "react";
import MyInput from "./MyInput";

const ParentComponent = () => {
    const inputRef = useRef();

    return(
        <>
        <MyInput ref={inputRef} />
        <div>
            <button onClick={()=> inputRef.current.focus()}>focus Input</button>
            <button onClick={() => inputRef.current.clear()}>clear Input</button>
        </div>
        </>
    )
}

export default ParentComponent;