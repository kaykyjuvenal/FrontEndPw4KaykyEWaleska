import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {

  const currentPath = window.location.pathname
  if (currentPath === '/admin') {
    return <Admin />;
  }
  
  return (
    <div className="App">
      <header className='App-header'>
        <Login/>
      </header>

    </div>

  );
}

export default App;
