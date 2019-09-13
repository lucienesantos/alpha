import React from "react";

import {FelaComponent} from "react-fela";
import {tagNames} from "./tagNames";

function felaComponentGenerator(item) {
  function elementCreator({css, children, innerRef, ...restProps}) {
    return (
      <FelaComponent as={item} style={css ? css : {}}>
        {({className}) => {
          const componentProps = {
            ...restProps,
            ref: innerRef,
            className
          };
          return React.createElement(item, componentProps, children);
        }}
      </FelaComponent>
    );
  }
  return elementCreator;
}

export const styled = tagNames.reduce((acc, item) => {
  acc[item] = felaComponentGenerator(item);
  return acc;
}, {});
