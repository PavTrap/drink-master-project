import { Link } from "react-router-dom";



export default function WelcomePage() {
  
    
    return <div >
    <h1> Welcome to the app! </h1>

        <p >
            <Link  to={`/singup`}>  Registration </Link>
            <Link to={`/singin`} > Sing In </Link>
         </p>
    </div>
  
}