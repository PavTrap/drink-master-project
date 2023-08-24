import React, {useState} from "react";
import { Link } from "react-router-dom";
import Modal from '../components/Modal/Modal';



const WelcomePage = () => {

  const [modalActive, setModalActive] = useState(false);
    
    return (
        <div>
            <h1> Welcome to the app! </h1>
            <p >
                <Link  to={`/singup`}>  Registration </Link>
                <Link to={`/singin`} > Sing In </Link>
            </p>
            <button onClick={() => setModalActive(true)}>open modal</button>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}
export default  WelcomePage;