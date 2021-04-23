import React from "react";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      paddingLeft: "15px",
    },
  })
);

export default function ListTest() {
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
      <Grid item container className={classes.mainContainer}>
        <List>
          {activities.map((activity: any) => (
            <ListItem button key={activity.id}>
              <ListItemText primary={activity.title} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
