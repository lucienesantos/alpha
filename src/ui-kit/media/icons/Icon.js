import React from "react";
import {styled} from "../../styled";
import {PropTypes} from "prop-types";

export const glyphs = {
  "icon-stores": require("./svg/icon-stores.svg").default,
  "icon-clients": require("./svg/icon-clients.svg").default,
  "icon-evaluations": require("./svg/icon-evaluations.svg").default
};

export function Icon(props) {
  const {glyph} = props;
  const glyphIcon = glyphs[props.glyph];

  return glyphIcon ? (
    <styled.svg
      css={{
        width: "24px",
        height: "24px"
      }}
      viewBox={glyphIcon.viewBox}>
      <use xlinkHref={`#${glyphIcon.id}`} />
    </styled.svg>
  ) : null;
}

Icon.propType = {
  glyph: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};
