import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import history from "../history";
import CompanyShow from "./companies/CompanyShow";
import Header from "./Header";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const App = () => {
  const company_id = 27;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid blue"
      }}>
      <Router history={history}>
        <Route
          render={() => (
            <React.Fragment>
              <SideNav
                onSelect={selected => {
                  history.push(selected);
                }}
                style={{
                  backgroundColor: "#4a4a4a",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                <div>
                  <SideNav.Nav defaultSelected="/company/:id">
                    <NavItem eventKey={`/company/${company_id}`}>
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{fontSize: "1.75em"}}
                        />
                      </NavIcon>
                      <NavText>Conslog</NavText>
                    </NavItem>
                  </SideNav.Nav>
                  <SideNav.Nav defaultSelected="/company/:id">
                    <NavItem eventKey={`/company/${company_id}`}>
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{fontSize: "1.75em"}}
                        />
                      </NavIcon>
                      <NavText>Projects</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </div>
                <SideNav.Toggle>
                  <div>Teste</div>
                </SideNav.Toggle>
              </SideNav>
              <div
                className="container-global"
                style={{
                  border: "1px solid red",
                  width: "600px",
                  height: "600px"
                }}>
                <Switch>
                  <Route path="/company/:id" exact component={CompanyShow} />
                </Switch>
              </div>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
};
export default App;
