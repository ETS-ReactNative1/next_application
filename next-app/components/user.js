import React from "react";

const User = ({ user }) => {
  return (
    <p>
      <span>{user.name}</span> - <span>{user.email}</span>
    </p>
  );
};

export default User;
