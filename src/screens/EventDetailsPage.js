import EventInfo from "../components/EventInfo";
export default function EventDetailsPage({ id, title, description, imgUrl }) {
  return (
    <>
      <EventInfo poster={imgUrl} title={title} description={description} />
    </>
  );
}
