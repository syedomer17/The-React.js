import React, { useEffect } from 'react'

const withTimer = (wrappedComponent) => {
    return(props) => {
        useEffect(()=>{
            const now = new Date().toLocaleTimeString();
            console.log(`[withTimer] Component mounted at: ${now}`)
        },[])
    }
    return <wrappedComponent {...props} />
}

export default withTimer
