import Item from '../components/Item'

export default function Items({ allitems, onToggleItem ,onDelete }){
    return (
        allitems.map((element,index)=>{
           return <Item key={index} element={element} onToggleItem={onToggleItem} onDelete={onDelete}/>
        })
    )
}