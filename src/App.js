import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));

      } else {
        dispatch(logout());

      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? <Routes><Route path='/' element={<LoginScreen></LoginScreen>}>
        </Route> </Routes>:
          <Routes>
            <Route path='/' element={<HomeScreen></HomeScreen>}>
            </Route>
            <Route path='/profile' element={<ProfileScreen></ProfileScreen>}></Route>

           {/* <Route path='/login' element={<LoginScreen></LoginScreen>}>
          </Route> */}
          </Routes>
        }
      </Router>



    </div>
  );
}

export default App;
