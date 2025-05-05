import React, { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  function updateName(newName: string) {
    setProfile((prevProfile) => ({ ...prevProfile, name: newName }));
  }

  function updateAge(newAge: number) {
    
    setProfile((profile) => ({ ...profile, age: newAge }));
  }

  function updateEmail(newEmail: string) {
    setProfile((profile) => ({ ...profile, email: newEmail }));
  }
  return (
    <div>
      <h2>Name: {profile.name}</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <h2>Age: {profile.age}</h2>
      <input
        type="number"
        placeholder="Age"
        value={profile.age>0? profile.age:""}
        onChange={(e) => updateAge(Number(e.target.value))}
      />

      <h2>Email: {profile.email}</h2>
      <input
        type="text"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
    </div>
  );
};

export default UserProfile;
