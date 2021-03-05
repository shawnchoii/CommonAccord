import logo from './logo.png';
import './App.css';
import {
  Typography,
  IconButton,
  Container, 
  Grid, 
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Container>
        <p>
          Bringing the World to Agreement
        </p>
        <a
          className="App-link"
          href="http://www.commonaccord.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Compare with commonaccord.org
        </a>
      </Container>
      <Grid container className={classes.users}>
        <Typography variant='h4'>Streamlined Document Creation</Typography>
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={3}>
            <BusinessCenterRoundedIcon color='primary' />
          </Grid>
          <Grid item xs={3}>
            <BusinessCenterRoundedIcon color='primary' />
          </Grid>
          <Grid item xs={3}>
            <BusinessCenterRoundedIcon color='primary' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  users: {
    flexDirection: 'column',
    marginTop: 25,
  },
  grid: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarDisplayFlex: {
    display: `flex`,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`
  }
});

export default App;
