import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams(); // to access the dynamic routing parameters from the current url
  return (
    <div>
      <h1>User Profile for ID: {id}</h1>
    </div>
  );
}

export default UserProfile;
