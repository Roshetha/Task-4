import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from the API
  }, []);

  return <Profile user={user} />;
};

export default ProfilePage;
