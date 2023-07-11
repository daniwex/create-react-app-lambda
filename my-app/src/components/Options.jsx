export default function Options({options,onchange}){
    return (
        <select className="option-container" onChange={onchange}>
           {options.map((element,index)=>{
               return <option key={index} value={element.value}>{element.value}</option>
           })}
        </select>
    )
}

