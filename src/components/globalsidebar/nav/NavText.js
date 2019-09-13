import React from "react";
import {styled} from "../../../ui-kit/styled";
import {GlobalSideBarContextConsumer} from "../../../contexts/GlobalSideBarContext";

const NavText = props => {
  return (
    <GlobalSideBarContextConsumer>
      {value => (
        <styled.div
          css={{
            marginLeft: "5px",
            color: "white",
            marginTop: "2px",
            marginLeft: "16px",
            fontWeight: "400",
            display: value.expandedGlobalSideBar ? "block" : "none"
          }}>
          {props.name}
        </styled.div>
      )}
    </GlobalSideBarContextConsumer>
  );
};

export default NavText;
