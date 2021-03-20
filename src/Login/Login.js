import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { Button } from 'react-bootstrap';
import { UserContext } from '../App'
import { useForm } from 'react-hook-form';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import { faUserTie, faGuitar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../images/unnamed.png'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    
    // ===
    const { register, handleSubmit, watch, errors } = useForm();
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        massage:false
    })
    const onSubmit = data => {
        setUser(data)
        setLoggedInUser(data)
        console.log(data);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const newUser = {...user}
                    newUser.massage = true;
                    newUser.error = '';
                    setUser(newUser)
                    setLoggedInUser(newUser)
                    setLoggedInUser(user)
                    history.replace(from);
                    console.log('user')
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    setUser(newUserInfo)
                    console.log(errorMessage, errorCode)
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    const newUser = {...user}
                    newUser.massage = true;
                    newUser.error = '';
                    setUser(newUser);
                    setLoggedInUser(newUser)
                    history.replace(from);
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
    };
    // =========

    // =========
    const handelGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const singedInUser = { name: displayName, email }
                setLoggedInUser(singedInUser);
                history.replace(from);
                console.log(singedInUser)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage)
            });
    }
    return (

       <div className='mainDiv'>
            <div className='container'>
            <div className='list'>
                <h1>{user.name}</h1>
                <h1 style={{ color: 'red' }}>{user.error}</h1>
                {
                    user.massage && <h3>{user.name} {newUser? 'created' : 'logged in'} successfully</h3>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    {newUser && <input name="name" ref={register({ required: true })} placeholder='Enter Name' />}
                    <br />
                    {errors.exampleRequired && <span>Name is required</span>}
                    <br />
                    <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Enter Email' />
                    <br />
                    {errors.exampleRequired && <span>Email is required</span>}
                    <br />
                    <input type='password' name="password" ref={register({ required: true, pattern: /\d{1}/ })} placeholder='Enter Password' />
                    <br />
                    {errors.exampleRequired && <span>Password is required</span>}
                    <br />
                    <input type='password' name="confirm password" ref={register({ required: true })} placeholder='Re Enter Password' />
                    <br />
                    {errors.exampleRequired && <span>Re write the password</span>}
                    <br />
                    <Button type="submit" variant="success">{newUser ? 'Sign Up' : 'Sign In'}</Button>
                    <Button onClick={() => setNewUser(!newUser)} variant="info">Create Account</Button>
                    <br/>
                    {/* <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                    <br/>
                    <input onClick={() => setNewUser(!newUser)} type="checkbox" name="newUser" id="" /> <label htmlFor="newUser">Create Account</label> */}
                    {/* <button onClick={()=> setNewUser(!newUser)}>oldUser</button> */}
                </form>
                <br/>
            <div className='googleBtn'>
                <Button onClick={handelGoogleSignIn} variant="dark"> <img src={Logo} alt=""/> Google Sign In</Button>
            </div>
            </div>
            
        </div>
       </div>
    );
};

export default Login;