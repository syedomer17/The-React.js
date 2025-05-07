import React, { useMemo, useState } from 'react'

const slowCountA = (text) => {
    console.log("Slow function running...");
    let count = 0;
    for(let i = 0; i <  1_000_000_000; i++){
        if(i ===  1_000_000_000 - 1){
            for(const char of text.toLowerCase()){
                if(char === "a")count++;
            }
        }
    }
    return count
}
const SlowCountComponent = () => {
    const [inputValue,setInputValue] = useState("");
    const [unrelatedCounter,setUnrelatedCounter] = useState(0);

    const aCount = useMemo(()=> slowCountA(inputValue),[inputValue])
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Type'/>
      <p>Number of "a": <strong>{aCount}</strong></p>
      <button onClick={()=> setUnrelatedCounter((prev)=> prev + 1)}>Increase Unrelated Counter</button>
      <p>Unrelated Counter: {unrelatedCounter}</p>
    </div>
  )
}

export default SlowCountComponent
