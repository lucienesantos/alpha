import React from "react";
import {styled} from "../../ui-kit/styled";
import iconToggle from "./icon-side-menu-close-grey.png";
import {GlobalSideBarContextConsumer} from "../../contexts/GlobalSideBarContext";

const Toggle = props => {
  const toggle = {
    width: "100%",
    height: "48px",
    fontSize: "16px",
    color: "#bbbbbb",
    textAlign: "right",
    backgroundColor: "#393939",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    cursor: "pointer",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end"
  };

  const toggleText = {
    margin: "0"
  };

  const handleClick = () => {
    props.onClick();
  };

  return (
    <GlobalSideBarContextConsumer>
      {value => (
        <styled.div css={toggle}>
          <styled.div id="toogle" onClick={handleClick}>
            <styled.div
              css={{
                width: "24px",
                height: "24px",
                transform: value.expandedGlobalSideBar ? "rotate(180deg)" : 0
              }}>
              <styled.img src={iconToggle} alt="Toggle" />
            </styled.div>
          </styled.div>
        </styled.div>
      )}
    </GlobalSideBarContextConsumer>
  );
};

export default Toggle;
