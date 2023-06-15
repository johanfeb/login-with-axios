import Register from "./Register.jsx";
import Login from "./Login.jsx";

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
