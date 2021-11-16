import './App.css';
import {useState} from 'react';
import { authentication } from './firebase-config';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import SignInScreen from './SignInScreen';

function App() {
    const [signedIn,setSignedIn] = useState(false);

    // firebase authentication listener
    authentication.onAuthStateChanged((user)=>{
      if(user){
        setSignedIn(true);
      }else{
        setSignedIn(false);
      }
    })


    // if user is signed in, allow user to view page/component
    const protectedRoute = (component)=>{
      if(signedIn === true){
         return component
      }

      return <SignInScreen />
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="/Dashboard" element={protectedRoute(<Dashboard/>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
