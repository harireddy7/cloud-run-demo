import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cloud Run Demo</p>
        <small>Using helm template and gcloud sdk to deploy to cloud run</small>
        <small>Added cleanup workflow to delete cloud run service and preview docker image</small>
        <small>Added spinning up new cloud run service</small>
      </header>
    </div>
  );
}

export default App;
