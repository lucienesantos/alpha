import React from "react";
import {styled} from "../../ui-kit/styled";

const PageContent = props => {
  return (
    <styled.div
      css={{
        backgroundColor: "white",
        border: "1px solid red",
        width: "100%",
        height: "100%"
      }}>
      {props.children}
    </styled.div>
  );
};

export default PageContent;
