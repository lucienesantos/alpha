import React from "react";
import {styled} from "../../ui-kit/styled";

const GlobalContent = props => {
  return (
    <styled.div
      css={{
        display: "block",
        border: "1px solid blue",
        width: "100%",
        height: "100%",
        ...props.css
      }}>
      {props.children}
    </styled.div>
  );
};

export default GlobalContent;
