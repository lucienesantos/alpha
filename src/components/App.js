import React, {useState} from "react";
import ReactDom from "react-dom";
import {Router, Route, Switch, Link} from "react-router-dom";
import history from "../history";

import GlobalContent from "./containers/GlobalContent";
import GlobalSideBar from "./globalsidebar/GlobalSideBar";

import {
  GlobalSideBarContextProvider,
  GlobalSideBarContextConsumer
} from "../contexts/GlobalSideBarContext";

import CompanyShow from "./resources/companies/CompanyShow";
import ReportList from "./resources/reports/ReportList";
import Sobre from "./Sobre";

const App = () => {
  const company_id = 27;

  return (
    <Router history={history}>
      <GlobalSideBarContextProvider>
        <>
          <GlobalSideBar />
          <GlobalContent>
            <Switch>
              <Route path="/company/:id" component={CompanyShow} />
              <Route path="/sobre" exact component={Sobre} />
              <Route path="/reports" exact component={ReportList} />
            </Switch>
          </GlobalContent>
        </>
      </GlobalSideBarContextProvider>
    </Router>
  );
};
export default App;
