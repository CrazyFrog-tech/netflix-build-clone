import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import Nav from '../Nav'
import PlansScreen from './PlansScreen';
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);
    const history = useNavigate();

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <PlansScreen></PlansScreen>
                        <p></p>
                        <button onClick={() => {auth.signOut(); history('/');}} className='profileScreen__signOut'>sign out</button>
                    </div>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default ProfileScreen