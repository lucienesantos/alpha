import React from "react";
import {styled} from "../../ui-kit/styled";

const GlobalContent = props => {
  return (
    <styled.div
      css={{
        display: "flex",
        direction: "row",
        border: "1px solid blue",
        background: "yellow",
        width: "100%",
        height: "100%",
        ...props.css
      }}>
      {props.children}
    </styled.div>
  );
};

export default GlobalContent;
