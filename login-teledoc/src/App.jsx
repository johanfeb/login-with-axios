import Register from "./Register";
import Login from "./login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
