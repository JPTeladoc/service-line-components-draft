import BasicTabs from "./TabNav";
import LocationsTable from "./LocationsTable";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/General Medical" component={BasicTabs} />
          <Route path="/" component={LocationsTable} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
