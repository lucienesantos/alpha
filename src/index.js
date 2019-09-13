import React from "react";
import ReactDOM from "react-dom";
import {RendererProvider} from "react-fela";
import {createRenderer} from "fela";

import App from "./components/App";

const renderer = createRenderer();

ReactDOM.render(
  <RendererProvider renderer={renderer}>
    <App />
  </RendererProvider>,
  document.querySelector("#root")
);
