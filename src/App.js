import "./App.css";
import {
  Typography,
  IconButton,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/CommonAccord" component={Home} />
        <Route exact path="/test" component={Test} />
      </Router>
    </div>
  );
}

const useStyles = makeStyles({
  users: {
    flexDirection: "column",
    marginTop: 25,
  },
  grid: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "top",
  },
  navbarDisplayFlex: {
    display: `flex`,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  button1: {
    fontWeight: "bold",
    marginTop: 30,
  },
  button2: {
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  text1: {
    fontSize: 30,
    marginTop: 25,
  },
  text2: {
    fontSize: 20,
    color: "grey",
  },
  image: {
    width: "50%",
    height: "30",
  },
  rowFlex: {
    flexDirection: "row",
  },
  flex: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "top",
    marginTop: 50,
  },
});

export default App;
