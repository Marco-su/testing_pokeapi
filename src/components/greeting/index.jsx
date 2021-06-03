import "./styles.css";
import { Link } from "react-router-dom";

const Greeting = () => {
  return (
    <div id="greeting">
      <h1>This app uses pokeapi.co</h1>
      <p>
        The application was built using react-create-app and the axios and
        react-router-dom packages.
      </p>
      <Link to="/table">See table</Link>
    </div>
  );
};

export default Greeting;
