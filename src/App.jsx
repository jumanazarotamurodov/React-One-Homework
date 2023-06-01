import './App.css';
import Feature from './page/Feature';
import Menu from './page/Menu';
import Navbar from './page/Navbar';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Feature />
      <Menu / >
    </div>
  );
}

export default App;
