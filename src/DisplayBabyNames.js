import React from "react";
import BabyList from "./BabyList";

const DisplayBabyNames = ( { names, handler } ) => {
    return(
        <>
        <h2>Baby Names</h2>
        <div id="baby-names-container">
            <BabyList babyList={names} handler={handler} />
        </div>
        </>
    );
};

export default DisplayBabyNames;