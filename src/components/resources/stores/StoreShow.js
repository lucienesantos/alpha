import React from "react";

const StoreShow = props => {
  const {id} = props.match.params;

  return (
    <div>
      <h3>Store Page Details!!!! {id}</h3>
    </div>
  );
};

export default StoreShow;
