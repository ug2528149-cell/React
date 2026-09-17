
function List(){
 
    const list1 ="drinks"
    const list2 ="spices"
 return(
    <ul>
        <li>Names</li>
        <li>{list1}</li>
        <li>{list2.toUpperCase()}</li>
    </ul>

 )    
}
export default List