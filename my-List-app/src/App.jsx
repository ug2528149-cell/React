
import List from './List.jsx'

function App(){

const fruits =[{id: 1, name:'apple',calories:95},
              {id: 2, name:'pineapple',calories:45},
              {id: 3, name:'guava',calories:105},
              {id: 4, name:'oranges',calories:159},
              {id: 5, name:'banana',calories:37},
              {id: 6, name:'coconut',calories:10}];

 const vegetables =[{id: 1, name:'apple',calories:110},
              {id: 2, name:'pineapple',calories:15},
              {id: 3, name:'guava',calories:25},
              {id: 4, name:'oranges',calories:63},
              {id: 5, name:'banana',calories:50},
              {id: 6, name:'coconut',calories:87}]; 
              
          return(
            <>
              <List items ={fruits} category="Fruits"/>
              <List items ={vegetables} category="Vegetables"/>
            </>
          )
}

export default App;