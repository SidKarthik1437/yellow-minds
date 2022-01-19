/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import * as ROUTES from "./constants/routes"

const Dashboard = lazy(() => import("./pages/dashboard"));
const About = lazy(() => import("./pages/about"));
const Register = lazy(() => import("./pages/register"));
const Contact = lazy(() => import("./pages/contact"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <div className="App select-none bg-bg">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
          <Switch>
            //New Pages
            <Route path={ROUTES.REGISTER} component={Register} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            //End New Pages
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={notfound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
