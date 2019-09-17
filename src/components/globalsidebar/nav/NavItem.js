import React from "react";
import {Link} from "react-router-dom";
import NavText from "./NavText";
import NavIcon from "./NavIcon";
import {styled} from "../../../ui-kit/styled";
import {CurrentPageContextConsumer} from "../../../contexts/CurrentPageContext";
import {urls} from "../../commons/urls";

const NavItem = props => {
  const changeURL = consumerCurrentPageProps => {
    var $url = {};
    urls.some(el => {
      if (el.regex.test(window.location.pathname)) {
        $url = el;
        consumerCurrentPageProps.setCurrentPage(el.name);
      }
    });
  };

  return (
    <CurrentPageContextConsumer>
      {consumerCurrentPageProps => (
        <styled.div
          css={{
            height: "48px",
            padding: "8px 12px 8px 20px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: props.active ? "#393939" : "#4A4A4A"
          }}
          onClick={() => changeURL(consumerCurrentPageProps)}>
          <Link style={{display: "flex"}} to={props.path}>
            <NavIcon glyph={props.icon} />
            <NavText name={props.name} />
          </Link>
        </styled.div>
      )}
    </CurrentPageContextConsumer>
  );
};

export default NavItem;
