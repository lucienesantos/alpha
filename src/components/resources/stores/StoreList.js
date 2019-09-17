import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import dados from "../../../apis/api";
import {styled} from "../../../ui-kit/styled";
import ReportList from "../reports/ReportList";
import BreadCrumb from "../../breadcrumb/BreadCrumb";

const storeList = {
  marginLeft: "40px",
  display: "fle",
  height: "100%"
};

const storeBox = {
  padding: "10px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  color: "#9b9b9b",
  fontSize: "14px",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
  marginLeft: "0",
  marginRight: "0",
  margin: "20px 0 8px 0",
  minHeight: "50px"
};

const StoreList = props => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dados.get("/api/v1/stores");
      setStores(result.data.stores);
    };

    fetchData();
  }, []);

  const renderList = () => {
    if (stores.length > 0)
      return stores.map(store => {
        return (
          <styled.div css={storeBox} key={`${store.id}`}>
            <Link to={`/stores/${store.id}`}>{store.name}</Link>
          </styled.div>
        );
      });
  };

  return <styled.div css={storeList}>{renderList()}</styled.div>;
};

export default StoreList;
