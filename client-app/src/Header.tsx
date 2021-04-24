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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "#fff",
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "2em",
    },

    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    groupIcon: {
      height: 50,
      width: 50,
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: theme.palette.common.black,
      fontSize: "2rem",
      marginLeft: "5px",
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
