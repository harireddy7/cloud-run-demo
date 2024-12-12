import './App.css';

function App() {
  console.log(process.env.NODE_ENV, process.env.REACT_APP_VERSION)
  return (
    <div className="App">
      <header className="App-header">
        <p>Cloud Run Demo - Release - v{process.env.REACT_APP_VERSION} ({process.env.NODE_ENV}) </p>
      </header>
    </div>
  );
}

export default App;
