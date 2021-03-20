import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Destination from './Destination/Destination';
import NoMatch from './NoMatch/NoMatch';
import SelectArea from './SelectArea/SelectArea'
import Login from './Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
   const [loggedInUser, setLoggedInUser] = useState({})
  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p>name:{loggedInUser.name} {loggedInUser.email}</p>  */}
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
           <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/destination/:vehicleId'>
          <Destination></Destination>
        </PrivateRoute>
        <Route path='/selectArea'>
          <SelectArea></SelectArea>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
