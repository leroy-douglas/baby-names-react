import React, { useState } from "react";
import './BabyNames.css';
import DisplayBabyNames from "./DisplayBabyNames";
import DisplayFavourites from "./DisplayFavourites";

const BabyNames = ( { babyNames } ) => {
    const [nameList, setNameList] = useState(babyNames);
    const [favourites, setFavourites] = useState([]);

    const nameSearch = e => {
        let searchText = e.target.value.toLowerCase();
        let babyList = [];

            let found = [];
            if(favourites.length > 0){
                babyList = babyNames.filter( name => favourites.indexOf(name) === -1 ) ;
            }
            else
                babyList = babyNames.slice();

            babyList.forEach( babyName => {
                if (babyName.name.toLowerCase().includes(searchText))
                    found = found.concat(babyName);
            });

        if (found) {
            setNameList(found);
        }
    };

    const removeFavourite = e => {
        let selectedName = "";
        let nameSearch = document.getElementById("search-box").value;
        console.log("nameSearch", nameSearch)
        favourites.forEach(baby => {
            if (baby.name === e.target.textContent) {
                selectedName = baby.name;
                console.log("***removeFavourite***", baby.name, nameSearch)
                if (baby.name.includes(nameSearch))
                    setNameList(nameList.concat(baby));
            }
        });

        setFavourites(favourites.filter(name => name.name === selectedName ? false : true));
    };

    const addFavourite = e => {
        let selectedName = "";
        
        nameList.forEach(baby => { 
            if(baby.name === e.target.textContent){
                selectedName = baby.name;
                setFavourites(favourites.concat(baby));
            }
        });
    
         setNameList( nameList.filter( name => name.name === selectedName ? false : true ) );
    };  

    return(
        <>
            <DisplayFavourites names={favourites} handler={removeFavourite} />
            <input id="search-box" type="text" onChange={nameSearch}/>
            <DisplayBabyNames names={nameList} handler={addFavourite} />  
        </>   
    );
};

export default BabyNames;