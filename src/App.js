import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

function App() {
  document.body.style.backgroundColor = '#047d80'
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-4">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App;
