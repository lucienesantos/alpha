import React from "react";
import {Link} from "react-router-dom";
import NavText from "./NavText";
import NavIcon from "./NavIcon";
import {styled} from "../../../ui-kit/styled";

const NavItem = props => {
  return (
    <styled.div
      css={{
        height: "48px",
        padding: "8px 12px 8px 20px",
        fontSize: "16px",
        fontWeight: "500"
      }}>
      <Link style={{display: "flex"}} to={props.path}>
        <NavIcon glyph={props.icon} />
        <NavText name={props.name} />
      </Link>
    </styled.div>
  );
};

export default NavItem;
