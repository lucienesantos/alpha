import React, {useContext, useState} from "react";

export const GlobalSideBarContext = React.createContext();

export function GlobalSideBarContextProvider(props) {
  const [expandedGlobalSideBar, setExpandedGlobalSideBar] = useState(true);
  const [enabledToogle, setEnabledToogle] = useState(true);

  return (
    <GlobalSideBarContext.Provider
      value={{
        expandedGlobalSideBar,
        setExpandedGlobalSideBar,
        enabledToogle,
        setEnabledToogle
      }}>
      {props.children}
    </GlobalSideBarContext.Provider>
  );
}

export function GlobalSideBarContextConsumer(props) {
  return (
    <GlobalSideBarContext.Consumer>
      {props.children}
    </GlobalSideBarContext.Consumer>
  );
}
