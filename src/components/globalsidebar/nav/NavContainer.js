import React from "react";
import {styled} from "../../../ui-kit/styled";

const NavContainer = props => {
  return (
    <styled.div
      css={{
        height: "300px",
        fontSize: "16px",
        color: "#bbbbbb",
        textAlign: "center",
        margin: "2px",
        display: "flex",
        flexDirection: "column",
        ":hover": {
          color: "#007bff"
        },
        transition: "width 1s",
        ...props.css
      }}>
      {props.children}
    </styled.div>
  );
};

export default NavContainer;
