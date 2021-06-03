import { Switch, Route } from "react-router-dom";
import Table from "../components/table";
import Home from "./home";

const MyRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/table" component={Table} />
    </Switch>
  );
};

export default MyRoutes;
