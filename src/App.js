import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cloud Run Demo</p>
        <small>Using gcloud commands to build and deploy</small>
        <div style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
          <div>REACT_APP_BE_API_URL: {process.env.REACT_APP_BE_API_URL}</div>
          <div>REACT_APP_ENV: {process.env.REACT_APP_ENV}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
