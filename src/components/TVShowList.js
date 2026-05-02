import React from "react";
import { Grid } from "semantic-ui-react";
import  TVShow  from "./TVShow.js";
function TVShowList(props) {
  function mapAllShows() {
    let filtered = props.shows;
    if (props.searchTerm) {
      filtered = props.shows.filter((s) =>
        s.name.toLowerCase().includes(props.searchTerm),
      );
    }
    return filtered.map((s) => (
      <TVShow show={s} key={s.id} selectShow={props.selectShow} />
    ));
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
