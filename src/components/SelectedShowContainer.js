import React, { useEffect, useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {
  const [selectedSeason,setSelectedSeason] = useState(1);


  function mapSeasons() {
    console.log('inside the map seeason function')
    console.log(props)
    let arr = props.allEpisodes;
    console.log (arr)

    console.log(typeof(arr))
    if ( props.allEpisodes) {
      let seasons = props.allEpisodes.map((e) => e.season).unique();

      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
    else {
         console.log("no valid seasonsm found");

    }

  }
  // console.log(props)

  function mapEpisodes() {
    console.log("inside the mapEpisodes : ", props)
    console.log(selectedSeason)
    return props.allEpisodes?.map((e) => {
      if (e.season == selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
      return null;
    });
      console.log("outsied the mapEpisodes : ", props);
  }
  // useEffect(() => {
  //   mapEpisodes();
  // },[selectedSeason])
  function handleSelectionChange(e) {
    setSelectedSeason(e.target.value);
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      {console.log("props oi selected/s : ",props)}
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes( )}
    </div>
  );
}

export default SelectedShowContainer;

Array.prototype.unique = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
