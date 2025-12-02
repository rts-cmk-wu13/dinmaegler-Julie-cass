import React from 'react';
import PagesBg from '../components/pagesTitles/pagesBg.jsx';
import Littlesearch from '../components/search/littlesearch.jsx';
import Favoritecards from '../components/favorite/Favoritecards.jsx';

function Favorite() {
    return (
        <>
            <PagesBg />
            <div>
                <Littlesearch />
                <hr className='searchhr' />
                <Favoritecards />
            </div>
        </>
    );
}
export default Favorite;

