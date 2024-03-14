import React from 'react';
import profilePic from './Resized_20220621_204443.jpg';

const Profile = () => {
  return (
    <div className="profile">
      <img src={profilePic} alt="Profile" />
      <p>Hello, my name is Parys.</p>
    </div>
  );
};

export default Profile;
