/*component import*/
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import clsx from "clsx";
import { useParams } from "react-router";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1em",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    maxWidth: 200,
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
  genreList: {
    listStyle: "none",
    "& > li": {
      color: "var(--text-primary)",
    },
  },
  genreListItem: {
    display: "inline-block",
    marginRight: "1em",
  },
}));
export default function EventInfo({ event_id, title, description, imgUrl }) {
  const { id } = useParams();
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });

  const [eventList, setEventDetails] = useState();
  console.log(eventList);

  // const test = eventList[0].title;
  return (
    <>
      <h2>{title}</h2>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='center'
      />
      <Grid item xs={10} sm={6} md={6} lg={3} xl={2}>
        <Card className={clsx(styles.card)}>
          <CardMedia
            className={clsx(styles.mediaStyle)}
            classes={mediaStyles}
            image={imgUrl}
          />
        </Card>
      </Grid>
      <Grid item xs={10} sm={6} md={6} lg={3} xl={2}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <h3>Details :</h3>
          <div>{description}</div>
        </div>
      </Grid>
    </>
  );
}
