export default function Checkbox({ handlechange,checkedStatus }){
    return (
        <input className="checkBox" type="checkbox" onChange={handlechange} checked={checkedStatus} />
    )
}