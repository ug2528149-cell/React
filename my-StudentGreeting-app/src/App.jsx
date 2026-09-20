//conditional rendering = allows you to control what gets rendered 
//                      in your application based on certain conditions
//                      (show, hide, or change components)

import StudentGreeting from "./StudentGreeting.jsx"

import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <>
      <StudentGreeting
        isLoggedIn={true}
        username="Manzi Prince"
      />
      <UserGreeting
        isLoggedIn={false}
        username="React Users" />
    </>
  )
}
export default App