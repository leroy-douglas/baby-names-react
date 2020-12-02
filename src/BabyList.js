import React from "react";

const BabyList = ({ babyList, handler }) => {
    const compareNames = (baby1, baby2) => {
        if (baby1.name === baby2.name) return 0;
        if (baby1.name > baby2.name) return 1;
        return -1;
    };
    //console.log("render(BabyList)", babyList)
    return(
        <>
        {
                babyList.sort(compareNames).map(babyName => {
                let bgColour = (babyName.sex === "f")  ? "pink" : "lightblue";

                let bkey = `${babyName.name}${babyName.id}`
//console.log("bkey", bkey)
                return (
                    <div className="baby-name" style={{ backgroundColor: bgColour }} key={bkey} onClick={handler}>
                        {babyName.name}
                    </div>
                )
            })
        }
    </>
    );
};

export default BabyList;