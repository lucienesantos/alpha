import React from "react";
import {styled} from "../../../ui-kit/styled";

const NavText = props => {
  return (
    <styled.div
      css={{
        marginLeft: "5px",
        color: "white",
        marginTop: "2px",
        marginLeft: "16px",
        fontWeight: "400"
      }}>
      {props.name}
    </styled.div>
  );
};

export default NavText;
