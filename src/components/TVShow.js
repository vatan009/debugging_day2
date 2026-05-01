import React from "react";

function TVShow(props) {
  const url = props.show?.image?.medium || "";
  return (
    <div>
      <br />
      <img src={url} onClick={() => props.selectShow(props.show)} alt="" />
    </div>
  );
}

export default TVShow;
