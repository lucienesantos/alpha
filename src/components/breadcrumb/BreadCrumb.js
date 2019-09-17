import React from "react";
import {styled} from "../../ui-kit/styled";
import {Link} from "react-router-dom";
import {CurrentPageContextConsumer} from "../../contexts/CurrentPageContext";
import {urls} from "../commons/urls";

const breadCrumb = {
  top: "0",
  zIndex: "1032 !important",
  height: "50px",
  maxHeight: "50px",
  borderBottom: "2px solid #e6e4e4",
  padding: "14px 0 0 20px",
  fontWeight: "500"
};

const BreadCrumb = props => {
  var $url = {};
  urls.some(el => {
    if (el.regex.test(window.location.pathname)) {
      $url = el;
      props.consumerCurrentPageProps.setCurrentPage(el.name);
    }
  });

  return (
    <styled.div css={breadCrumb}>
      <Link to={window.location.pathname}>{$url.path} </Link>
    </styled.div>
  );
};

export default BreadCrumb;
