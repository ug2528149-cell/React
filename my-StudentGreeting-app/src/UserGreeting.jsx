

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>This site is to help you after login!{props.username}</h2>
    }
    return <h2>Small reminder. Please Login!</h2>
}
export default UserGreeting;