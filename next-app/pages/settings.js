import React from "react";
import { getSession } from "next-auth/react";

function Settings({ data }) {
  return (
    <div>
      <h1>Settings page</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default Settings;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session)
    return {
      props: {
        data: session ? "Yes session! :D" : "No session! :(",
        // we can send the session to the pageProps in the _app.js
        session,
      },
    };
  return {
    redirect: {
      destination: `/api/auth/signin?callbackUrl=http://localhost:3000/settings`,
      permanent: false,
    },
  };
}
