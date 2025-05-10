import React, { forwardRef } from 'react'

const MeInput = forwardRef((props,ref) => {
    return(
        <>
        <input type="text" ref={ref} />
        </>
    )
}) 

export default MeInput
