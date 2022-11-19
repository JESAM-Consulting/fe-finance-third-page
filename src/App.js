import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/mixins/global.scss";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";
import FeFinanceCalendly from "./components/feFinanceCalendly";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <RouteWrapper
            exact={true}
            path="/"
            component={Home}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/fe-finance-calendly"
            component={FeFinanceCalendly}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/impressum"
            component={Impressum}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/datenschutz"
            component={Datenschutz}
            layout={DefaultLayout}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

const DefaultLayout = ({ children, match }) => <>{children}</>;
