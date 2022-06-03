import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import data from './components/data'

function App() {
  const journalData = data.map((entry) => {
    return <Main 
    key={entry.id}
    {...entry}
    />
  })
  return (
    <div className="App">
    <Navbar />
    {journalData}
    </div>
  );
}

export default App;
