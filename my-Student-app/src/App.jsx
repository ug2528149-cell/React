// //props = read-only properties that  are shared between components.

// //        A parent component can send data to a child component
// //         <Component key-value />


// import Student from './Student.jsx'

// function App(){
//   return(
//     <div>
//     <Student name="Spongebob" age="22" isStudent={true} known="No matter how hard the going gets, I will never give up" hobby="I love Software Engineering" />
//     </div>
//   )
// }
// export default App

import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student
        name="Spongebob"
        age={22}
        course="Software Engineering" />
      <Student
        name="Patrick"
        age={43}
        course="Github" />
      <Student
        name="Gad"
        age={22}
        course="Networking" />
      <Student
        name="Samiath"
        age={23}
        course="IT" />
    </>
  )
}
export default App