import React, {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const [companyId, setCompanyId] = useState(27);
  return (
    <div style={{display: "flex", border: "1px solid blue"}}>
      <Link to="/" style={{margin: "20px 10px"}}>
        Home
      </Link>
      <Link to={`/company/${companyId}`} style={{margin: "20px 10px"}}>
        Projetos
      </Link>
    </div>
  );
};

export default Header;
