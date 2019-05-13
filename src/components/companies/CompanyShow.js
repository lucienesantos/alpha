import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import conslog from "../../apis/conslog";

const CompanyShow = props => {
  console.log("Chegou aqui");

  const [projects, setProjects] = useState([]);

  // useEffect(async () => {
  //   console.log("fetchhhh");
  //   const result = await conslog.get(
  //     "/br/companies/27/projects.json?page=1&regions%5B%5D=N%2FA&regions%5B%5D=NE&regions%5B%5D=Ne&regions%5B%5D=Oeste&regions%5B%5D=SE&regions%5B%5D=SO&regions%5B%5D=tes&q=&sort=name&filter%5B%5D=active&filter%5B%5D=completed"
  //   );
  //   setProjects(result.data.resources);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch");
      const result = await conslog.get(
        "/br/companies/27/projects.json?page=1&regions%5B%5D=N%2FA&regions%5B%5D=NE&regions%5B%5D=Ne&regions%5B%5D=Oeste&regions%5B%5D=SE&regions%5B%5D=SO&regions%5B%5D=tes&q=&sort=name&filter%5B%5D=active&filter%5B%5D=completed"
      );
      setProjects(result.data.resources);
    };

    fetchData();
  }, []);

  const renderList = () => {
    console.log(projects);
    if (projects)
      return projects.map(project => {
        return <li>{project.name}</li>;
      });
  };

  return (
    <div className="container-show">
      <h1>Lista todos os Projetos</h1>
      <ul style={{width: "500px", height: "300px", border: "1px solid red"}}>
        {renderList()}
      </ul>
    </div>
  );
};

export default CompanyShow;
