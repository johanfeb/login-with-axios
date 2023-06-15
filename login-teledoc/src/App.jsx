import Register from "./Register";
import Login from "./login";

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
