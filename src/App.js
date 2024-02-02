import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './data';

function App() {
  const entries = data.map(item => {
  return <Card key={item.id} item={item} />
  })
  return (
    <div className="App">
      <Navbar />
      {entries}
    </div>
  );
}

export default App;
