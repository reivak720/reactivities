import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      maxHeight: "4em",
      background: "linear-gradient(44deg, #230482 30%, #66b6c4 90%)",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "2em",
    },
    toolbar: {
      maxHeight: "3em",
    },

    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    groupIcon: {
      color: "#fff",
      height: 50,
      width: 50,
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "1.25rem",
      color: "#fff",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Button className={classes.logoContainer}>
            <GroupIcon className={classes.groupIcon} />
          </Button>
          <Tabs>
            <Tab label="Reactivities" className={classes.tab} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbarMargin} />
    </>
  );
}
