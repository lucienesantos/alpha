import React, {useContext, useState} from "react";

export const CurrentPageContext = React.createContext();

export function CurrentPageContextProvider(props) {
  const [currentPage, setCurrentPage] = useState("stores");

  return (
    <CurrentPageContext.Provider
      value={{
        currentPage,
        setCurrentPage
      }}>
      {props.children}
    </CurrentPageContext.Provider>
  );
}

export function CurrentPageContextConsumer(props) {
  return (
    <CurrentPageContext.Consumer>{props.children}</CurrentPageContext.Consumer>
  );
}
