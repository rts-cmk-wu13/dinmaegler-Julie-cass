import React from 'react';
import PagesBg from '../components/pagesTitles/pagesBg.jsx';
import Favesearch from '../components/LittleSearch/favesearch.jsx';
import Favoritecards from '../components/favorite/Favoritecards.jsx';

function Favorite() {
    return (
        <>
            <PagesBg />
            <div>
                <Favoritecards />
            </div>
        </>
    );
}
export default Favorite;

