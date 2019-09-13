import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import dados from "../../../apis/api";
import {styled} from "../../../ui-kit/styled";
import ReportList from "../reports/ReportList";

const CompanyShow = props => {
  const [projects, setProjects] = useState([]);

  // useEffect(async () => {
  //   console.log("fetchhhh");
  //   const result = await dados.get(
  //     "/br/companies/27/projects.json?page=1&regions%5B%5D=N%2FA&regions%5B%5D=NE&regions%5B%5D=Ne&regions%5B%5D=Oeste&regions%5B%5D=SE&regions%5B%5D=SO&regions%5B%5D=tes&q=&sort=name&filter%5B%5D=active&filter%5B%5D=completed"
  //   );
  //   setProjects(result.data.resources);

  //   return () => console.log("cleannnn");
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("entrou no fetch");
      const result = await dados.get(
        "/br/companies/27/projects.json?page=1&regions%5B%5D=N%2FA&regions%5B%5D=NE&regions%5B%5D=Ne&regions%5B%5D=Oeste&regions%5B%5D=SE&regions%5B%5D=SO&regions%5B%5D=tes&q=&sort=name&filter%5B%5D=active&filter%5B%5D=completed"
      );
      console.log(result);
      setProjects(result.data.resources);
    };

    fetchData();
  }, []);

  const renderList = () => {
    if (projects)
      return projects.map(project => {
        return <li>{project.name}</li>;
      });
  };

  return (
    <styled.div
      css={{
        display: "flex"
      }}>
      <Link to="/reports">Shopping Iguatemi</Link>
      <styled.ul
        css={{width: "200px", height: "400px", backgroundColor: "green"}}>
        {renderList}
      </styled.ul>
    </styled.div>
  );
};

export default CompanyShow;
