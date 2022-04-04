import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}>
          </Route>
          <Route path='/login' element={<LoginScreen></LoginScreen>}>
          </Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
