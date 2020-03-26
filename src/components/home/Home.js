import React from 'react'


// CSS
import './Home.css';

//components
import SearchResults from '../searchResults/SearchResults';
// import Navbar from '../navbar/Navbar';


const Home = () => {
    return (
        <React.Fragment>
            {/* <Navbar/> */}
            <div className="home-container">
                <h1 className="home-container__heading">Corona Info</h1>
                <SearchResults/>
            </div>
        </React.Fragment>
    )
}

export default Home
