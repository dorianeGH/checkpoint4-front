import { useState, useContext } from "react";
import EventList from "../components/EventList";
import SearchInput from "../components/SearchInput";
import { EventContext } from "../contexts/eventContext";

export default function HomePage() {
  const { eventList } = useContext(EventContext);
  return (
    <>
      <h2>Event Lists</h2>
      <SearchInput />
      <EventList eventList={eventList} />
    </>
  );
}
