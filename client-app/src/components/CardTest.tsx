import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "30em",
      marginBottom: "1em"
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
    },
  })
);

export default function CardTest() {
  const theme = useTheme();
  const classes = useStyles();

  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <Grid container>
      <Grid container direction="column" alignItems="center">
        {activities.map((activity: any) => (
          <Grid item>
            <Card className={classes.card} variant="outlined" key={activity.id}>
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="subtitle2">
                      {activity.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{activity.date}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">
                      {activity.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">{activity.city}</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        variant="outlined"
                        className={classes.categoryButton}
                      >
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
