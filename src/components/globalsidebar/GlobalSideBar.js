import React, {useState} from "react";
import {styled} from "../../ui-kit/styled";
import NavContainer from "./nav/NavContainer";
import NavItem from "./nav/NavItem";
import {Link} from "react-router-dom";
import Toggle from "./Toggle";
import {GlobalSideBarContextConsumer} from "../../contexts/GlobalSideBarContext";

const GlobalSideBar = props => {
  const clickToggle = consumerProps => {
    consumerProps.setExpandedGlobalSideBar(
      !consumerProps.expandedGlobalSideBar
    );
  };

  return (
    <GlobalSideBarContextConsumer>
      {value => (
        <styled.div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            zIndex: "1040",
            top: "0",
            left: "0",
            width: value.expandedGlobalSideBar ? "200px" : "72px",
            backgroundColor: "#4a4a4a",
            overflowX: "hidden"
          }}>
          <NavContainer>
            <NavItem
              name="Projetos"
              path={`/company/${27}`}
              icon="icon-projects"
            />
            <NavItem name="Pendências" path={`/sobre`} icon="icon-occurences" />
            <NavItem
              name="Avaliações"
              path={`/sobre`}
              icon="icon-evaluations"
            />
          </NavContainer>
          {value.enabledToogle ? (
            <Toggle onClick={() => clickToggle(value)} />
          ) : null}
        </styled.div>
      )}
    </GlobalSideBarContextConsumer>
  );
};

export default GlobalSideBar;
