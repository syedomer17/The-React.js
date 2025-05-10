import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props,ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref,()=>({
        focus : () => {
            inputRef.current.focus();
        },
        clear : () => {
            inputRef.current.value = "";
        }
    }))
    return(
        <>
        <input type="text" ref={inputRef} placeholder='Type SomeThing' />
        </>
    )
})

export default MyInput
