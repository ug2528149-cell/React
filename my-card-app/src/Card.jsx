
import profilePic from './assets/aaa.PNG'

function Card(){
 return(
    <div className="card">
      <img src={profilePic} alt="my image"></img>
      <h1>Hacker</h1>
      <p>I love hacking and play pool table</p>
    </div>
 )
    

}
export default Card