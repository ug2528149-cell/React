//defaultProps = default values for props in case they are not 
//                 passed from the parent component
//                  name: "Guest"


import PropTypes from 'types'

function Student(props){
     return(
        <div className="card">
            <p className="name ">Name: {props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
     )
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    Course: PropTypes.string,
}


export default Student