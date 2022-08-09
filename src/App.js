import logo from './logo.png';
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h2>What word do you want to look up?</h2>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}