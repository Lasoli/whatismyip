import React from "react";
import "./showcard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { DateTime, Info } from "luxon";
//import MyDate from "../Currentdate/currentdate.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    // top: 120,
    // left: 60,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ ipAddress, country, flag, city }) {
  const classes = useStyles();

  const localDatetime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  console.log("Flag", flag);

  return (
    <div
      className="showcard"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <h3 className="intro font"> Your IP address is </h3>
          <div className="IP font">{ipAddress}</div>
          {flag && (
            <CardMedia
              id="img"
              className={classes.media}
              image={flag}
              title="Country flag"
            />
          )}
          <CardContent>
            <div className="intro font">You are currently located in</div>
            <div className="location font">
              {city}, {country}
            </div>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="date font">{localDatetime}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Copy IP
          </Button>
          <Button size="small" color="primary">
            Location Info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
