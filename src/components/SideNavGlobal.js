import React from "react";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SideNavGlobal = () => {
  return (
    <SideNav
      onSelect={selected => {
        const to = "/" + selected;
          history.push(to);
        }
      }}
      style={{backgroundColor: "#4a4a4a"}}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{fontSize: "1.75em"}} />
          </NavIcon>
          <NavText>Conslog</NavText>
        </NavItem>
        <NavItem eventKey="projects">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{fontSize: "1.75em"}}
            />
          </NavIcon>
          <NavText>Projetos</NavText>
        </NavItem>
        <NavItem eventKey="company/:id">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{fontSize: "1.75em"}}
            />
          </NavIcon>
          <NavText>Pendências</NavText>
        </NavItem>
        <NavItem eventKey="pendencias">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{fontSize: "1.75em"}}
            />
          </NavIcon>
          <NavText>Avaliaçãoes</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavGlobal;
