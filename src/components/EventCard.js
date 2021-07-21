import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles({
  card: {
    borderRadius: "1em",
    position: "relative",
    margin: "1em",
    width: 200,
    height: 300,
    "&:after": {
      content: '""',
      bottom: 0,
      zIndex: 1,
    },
  },
  media: {
    height: 140,
  },
});

export default function EventCard({ id, title, description, imgUrl }) {
  const { card, classes, media } = useStyles();

  return (
    <Card className={clsx(card)}>
      <CardActionArea>
        <CardMedia className={media} image={imgUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
