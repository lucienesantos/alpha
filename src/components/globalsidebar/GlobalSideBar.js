import React, {useState} from "react";
import {styled} from "../../ui-kit/styled";
import NavContainer from "./nav/NavContainer";
import NavItem from "./nav/NavItem";
import {Link} from "react-router-dom";
import Toggle from "./Toggle";
import {GlobalSideBarContextConsumer} from "../../contexts/GlobalSideBarContext";
import {CurrentPageContextConsumer} from "../../contexts/CurrentPageContext";

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
            overflowX: "hidden",
            paddingTop: "20px"
          }}>
          <CurrentPageContextConsumer>
            {consumerCurrentPageProps => (
              <NavContainer>
                <NavItem
                  name="Lojas"
                  path={`/stores`}
                  icon="icon-stores"
                  active={consumerCurrentPageProps.currentPage === "stores"}
                />
                <NavItem
                  name="Clientes"
                  path={`/clients`}
                  icon="icon-clients"
                  active={consumerCurrentPageProps.currentPage === "clients"}
                />
                <NavItem
                  name="Avaliações"
                  path={`/clients`}
                  icon="icon-evaluations"
                  active={
                    consumerCurrentPageProps.currentPage === "evaluations"
                  }
                />
              </NavContainer>
            )}
          </CurrentPageContextConsumer>
          {value.enabledToogle ? (
            <Toggle onClick={() => clickToggle(value)} />
          ) : null}
        </styled.div>
      )}
    </GlobalSideBarContextConsumer>
  );
};

export default GlobalSideBar;
