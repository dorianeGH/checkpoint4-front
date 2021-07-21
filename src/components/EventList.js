import Grid from "@material-ui/core/Grid";
import EventCard from "./EventCard";

export default function EventList({ eventList }) {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        style={{ marginTop: "1em" }}
      >
        {eventList.map(({ id, title, description, imgUrl }) => (
          <EventCard
            key={id}
            title={title}
            id={id}
            description={description}
            imgUrl={imgUrl}
          />
        ))}
      </Grid>
    </>
  );
}
