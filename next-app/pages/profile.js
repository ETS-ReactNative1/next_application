import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";

const Profile = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      console.log({ session });
      if (!session) {
        signIn();
      } else {
        setloading(false);
      }
    };
    securePage();
  }, []);
  if (loading) return <h3>Loading...</h3>;
  return <h1>Profile page</h1>;
};

export default Profile;
