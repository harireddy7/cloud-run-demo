import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cloud Run Demo</p>
        <small>Add and update pullrequest, release, cleanup and preview workflows</small>
        <small>deploy image from project 1 with cloud run service in project 2 (github actions)</small>
        <ol>
          <li>Add project 1 authenticated user account with cloud run admin permission to project 2 IAM</li>
          <li>Create a service account in project 2</li>
          <li>Grant project 1 account the cloud run service agent access in the project 2 service account</li>
          <li>Grant project 1 account with cloud run admin access in project 2 IAM</li>
          <li>Add project 2 service account access to Artifact Registry Reader role in project 1</li>
        </ol>

        <div>Auth with both accounts</div>
      </header>
    </div>
  );
}

export default App;
