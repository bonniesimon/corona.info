import React from 'react'


// CSS
import './Home.css';

//components
import SearchResults from '../searchResults/SearchResults';


const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-container__heading">Corona Info</h1>
            <SearchResults/>
        </div>
    )
}

export default Home
