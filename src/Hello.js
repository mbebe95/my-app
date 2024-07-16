import logo from './logo.svg';
import './Hello.css';


function Hello(props) {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {props.name}</h1>
      </header>
    </div>
    );
  }

export default Hello;
