
function Student(props){
     return(
        <div className="card">
            <p className="name ">Name: {props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
     )
}
export default Student