// import React, { useState } from "react";
// // useState
// function Main() {
//     // const count = 0 
//     const [count, setCount] = useState(0)

//     function inc() {
//         setCount(count + 1)
//     }

//     function dec() {
//         setCount(count === 0 ? 0 : count - 1)
//     }

//     return <div>
//         <button onClick={dec} >Minus</button>
//         <h1>{count}</h1>
//         <button onClick={inc} >Plus</button>

//     </div>
// }

// export default Main




import React, { useEffect, useState } from "react";

function Main() {
    let names = [
        "ozodbek",
        "bahromjon",
        "kamoldin",
        "otabek",
        "sarvar",
        "islom",
        "hamidulllo",
        "olim",
        "pozil",
        "muzaffar"
    ]
    const [search,setSearch] = useState("")
    const [data,setData] = useState(names)
    
    useEffect(()=>{
        let filteredData = names.filter(i=>i.includes(search))
        setData(filteredData)        
    },[search])



   return <div>
        <input type="text" placeholder="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />

        <ol>
            {
                data.map((item,index)=>
                    <li key={index} >{item}</li>
                )
            }
        </ol>


    </div>
}

export default Main