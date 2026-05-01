import React from "react";

function Episode(props) {
  let { myEpisode } = props;

  return (
    <div>
      pisode {myEpisode.number} - {myEpisode.name}E
    </div>
  );
}

export default Episode;
