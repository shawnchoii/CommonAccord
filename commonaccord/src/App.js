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
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bringing the World to Agreement
        </p>
        <a
          className="App-link"
          href="http://www.commonaccord.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
