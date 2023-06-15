import Register from "./Register";
import Login from "./login";
import { Switch } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Login />
      <Switch>
        <Route path="/Register" component={Register} />
      </Switch>
    </main>
  );
}

export default App;
