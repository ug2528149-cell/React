//conditional rendering = allows you to control what gets rendered 
//                      in your application based on certain conditions
//                      (show, hide, or change components)

import StudentGreeting from "./StudentGreeting.jsx"

function App(){
  return(
    <>
     <StudentGreeting isLoggedIn={true} />
    </>
  )
}
export default App