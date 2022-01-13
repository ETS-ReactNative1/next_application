import React, { useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log({ user, password });

  return {
    props: {
      eventList: data,
    },
  };
}

const Events = ({ eventList }) => {
  const fetchSports = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  return (
    <div>
      <h1>Events</h1>
      <button onClick={fetchSports}>Sports</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Events;
