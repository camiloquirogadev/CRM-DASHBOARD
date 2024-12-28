import React from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <UserProfile />
            </div>
            <p>Welcome to your profile!</p>
        </div>
    );
};

export default Profile;