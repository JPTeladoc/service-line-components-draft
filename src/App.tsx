import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InjectFont } from "@intouchhealth/cig-components";
import { GlobalStyles } from './globalStyle';
import TabsNavigator from "./TabsNavigator";
import LocationsTable from "./LocationsTable";

function App() {
  return (
    <div>
    <GlobalStyles />
      <InjectFont family="Montserrat" />
      <BrowserRouter>
        <Switch>
          <Route path="/General Medical" component={TabsNavigator} />
          <Route path="/" component={LocationsTable} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
