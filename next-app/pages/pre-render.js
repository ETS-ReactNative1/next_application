import React from "react";
import User from "../components/user";

const Prerender = ({ users = [] }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </>
  );
};
export default Prerender;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}
