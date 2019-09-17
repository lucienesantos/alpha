import React from "react";

import ToolBar from "../toolbar/ToolBar";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import {styled} from "../../ui-kit/styled";
import {CurrentPageContextConsumer} from "../../contexts/CurrentPageContext";

const headerGlobal = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "120px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
  color: "#9b9b9b"
};

const HeaderGlobal = () => {
  return (
    <CurrentPageContextConsumer>
      {consumerCurrentPageProps => (
        <styled.div css={headerGlobal}>
          <BreadCrumb {...{consumerCurrentPageProps}} />
          <ToolBar />
        </styled.div>
      )}
    </CurrentPageContextConsumer>
  );
};

export default HeaderGlobal;
