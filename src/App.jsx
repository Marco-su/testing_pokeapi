import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import Navbar from "./common/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MyRoutes />
      </Router>
    </div>
  );
}

export default App;
