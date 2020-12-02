import React  from "react";
import BabyList from "./BabyList";

const DisplayFavourites = ( { names, handler } ) => {
    return (
        <>
        <h2>Favourites</h2>
      <div id="favourites-container">
        
        <div id="favourites-names-container">
          <BabyList babyList={names} handler={handler} />
        </div>
      </div>
      </>
    );
};

export default DisplayFavourites;