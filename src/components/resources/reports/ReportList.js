import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import ProjectContent from "../../containers/ProjectContent";
import ProjectSidebar from "../../projectsidebar/ProjectSidebar";
import PageContent from "../../containers/PageContent";
import {GlobalSideBarContextConsumer} from "../../../contexts/GlobalSideBarContext";

const ReportListInner = props => {
  const [project, setProject] = useState([]);

  useEffect(() => {}, []);

  return (
    <ProjectContent>
      <ProjectSidebar />
      <PageContent />
    </ProjectContent>
  );
};

const ReportList = props => {
  return (
    <GlobalSideBarContextConsumer>
      {value => <ReportListInner />}
    </GlobalSideBarContextConsumer>
  );
};

export default ReportList;
