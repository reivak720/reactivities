import React from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      paddingLeft: "15px",
    },
    categoryButton: {
      ...theme.typography.button,
      color: "black",
      height: "30px",
    },
    deleteButton: {
      ...theme.typography.button,
      marginRight: "5px",
    },
    viewButton: {
      ...theme.typography.button,
      width: "75px",
    },
  })
);

interface Activity {
  id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  city: string;
  venue: string;
}

interface Props {
  activity: Activity;
}

function MyList({ activity }: Props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item container direction="column" style={{ padding: "1em" }}>
      <Grid item>
        <Typography variant="subtitle2">{activity.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{activity.date}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">{activity.description}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">{`${activity.city}, ${activity.venue}`}</Typography>
      </Grid>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Button variant="outlined" className={classes.categoryButton}>
            {activity.category}
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.deleteButton}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.viewButton}
          >
            View
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function ActivityPage() {
  const classes = useStyles();
  const [activities, setActivities] = React.useState<Activity[]>([]);

  React.useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      });
  }, []);

  return (
    <Grid container style={{ backgroundColor: "#e0e0e0", paddingTop: "5em" }}>
      <Grid item container justify="flex-end" xs={7}>
        <Paper style={{ minWidth: "40em", marginTop: "2em" }}>
          {activities.map((activity: any) => (
            <>
              <MyList activity={activity} />
              <Divider variant="middle" />
            </>
          ))}
        </Paper>
      </Grid>
      <Grid item container justify="center" xs={5}>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
}
