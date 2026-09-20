

// function List(){

//     const fruits =[{id: 1, name:'apple',calories:95},
//                   {id: 2, name:'pineapple',calories:45},
//                   {id: 3, name:'guava',calories:105},
//                   {id: 4, name:'oranges',calories:159},
//                   {id: 5, name:'banana',calories:37},
//                   {id: 6, name:'coconut',calories:10}]

//         //fruits.sort((a,b) =>a.name.localCompare(b.name)); //ALPHABETICAL
//         //fruits.sort((a,b) =>b.name.localCompare(a.name)); //REVERSE ALPHABETICAL

//         fruits.sort((a,b) =>a.calories -b.calories); //NUMERIC

//         const listItems = fruits.map(fruit =><li key={fruit.id}>{fruit.name}&nbsp;<b>{fruit.calories}</b></li>)


//     return(<ol>{listItems}</ol>)
// }
// export default List

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map( item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
}
export default List