/*component import*/
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState, useContext } from "react";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import clsx from "clsx";
import { useParams } from "react-router";
import { EventContext } from "../contexts/eventContext";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1em",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    maxWidth: 600,
    height: 300,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
    bottom: 0,
    width: "100%",
    margin: 0,
  },
  mediaStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
export default function EventInfo() {
  const { eventList } = useContext(EventContext);
  const { eventId, title, imgUrl, description } = eventList;
  const { id } = useParams();
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });

  const currentEvent = eventList[0];
  return (
    <>
      <h2>{currentEvent.title}</h2>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='center'
      />

      <Card className={clsx(styles.card)}>
        <CardMedia
          className={clsx(styles.mediaStyle)}
          classes={mediaStyles}
          image={currentEvent.imgUrl}
        />
      </Card>

      <div className={styles.content}>
        <h3>Details :</h3>
        <div>{currentEvent.description}</div>
      </div>
    </>
  );
}
