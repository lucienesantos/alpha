import React, {useEffect} from "react";
import {styled} from "../../ui-kit/styled";
import {GlobalSideBarContext} from "../../contexts/GlobalSideBarContext";

const ProjectContentInner = props => {
  useEffect(() => {
    props.setEnabledToogle(false);
    props.setExpandedGlobalSideBar(false);

    return () => {
      props.setEnabledToogle(true);
    };
  }, []);

  return (
    <styled.div
      css={{
        backgroundColor: "orange",
        width: "100%",
        height: "100%",
        display: "flex"
      }}>
      {props.children}
    </styled.div>
  );
};

const ProjectContent = props => {
  return (
    <GlobalSideBarContext.Consumer>
      {value => <ProjectContentInner {...value} />}
    </GlobalSideBarContext.Consumer>
  );
};

export default ProjectContent;
