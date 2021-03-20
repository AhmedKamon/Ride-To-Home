import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';import './Header.css'
import Home from '../Home/Home';
import { UserContext } from '../App';



const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div >
            <div className='container ml-5 ml-5 containers'>
                    <div className='row justify-content-md-between '>
                                <div>
                                    <h2 className='link'>Ride To Home</h2>
                                </div>
                                <div className='row px-2 mx-2 '>
                                    <Link to="/"><h2 className='link'>Home</h2></Link>
                                    <Link to="/login"><h2 className='link'>Login</h2></Link>
                                    <Link to="/Destination"><h2 className='link'>{loggedInUser.name}</h2></Link>
                                    <Link to="/area"><h2 className='link'>area</h2></Link>
                                </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Header;