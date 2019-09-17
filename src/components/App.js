import React, {useState} from "react";
import ReactDom from "react-dom";
import {Router, Route, Switch, Link} from "react-router-dom";
import history from "../history";

import GlobalContent from "./containers/GlobalContent";
import GlobalSideBar from "./globalsidebar/GlobalSideBar";

import {GlobalSideBarContextProvider} from "../contexts/GlobalSideBarContext";
import {CurrentPageContextProvider} from "../contexts/CurrentPageContext";

import StoreList from "./resources/stores/StoreList";
import StoreShow from "./resources/stores/StoreShow";
import ReportList from "./resources/reports/ReportList";
import Sobre from "./Sobre";
import HeaderGlobal from "./headerglobal/HeaderGlobal";

const App = () => {
  const company_id = 27;

  return (
    <Router history={history}>
      <GlobalSideBarContextProvider>
        <>
          <CurrentPageContextProvider>
            <GlobalSideBar />
            <GlobalContent>
              <HeaderGlobal />
              <Switch>
                <Route path="/stores/:id" component={StoreShow} />
                <Route path="/stores" exact component={StoreList} />
                <Route path="/clients" exact component={Sobre} />
              </Switch>
            </GlobalContent>
          </CurrentPageContextProvider>
        </>
      </GlobalSideBarContextProvider>
    </Router>
  );
};
export default App;
