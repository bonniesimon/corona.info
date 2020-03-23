import React from 'react'


//CSS
import './SearchResults.css';

const SearchResults = () => {
    return (
        <div className="search-results-container" >
            <form className="search-results-container__form">
                <input type="text" className="search-results-container__form__input"/>
                <button className="search-results-container__form__btn">Search</button>
            </form>
            <div className="results-container">
                <h3 className="results-container__heading">India</h3>
                <div className="results-container__row1">
                    <div className="col col">
                        <p className="large">396</p>
                        <p className="small small--yellow">Confirmed</p>
                    </div>
                    <div className="col col">
                        <p className="large">27</p>
                        <p className="small small--green">Recovered</p>                    
                    </div>
                    <div className="col col">
                        <p className="large">7</p>
                        <p className="small small--red">Deaths</p>                    
                    </div>
                </div>
                <div className="results-container__row2">
                    <div className="col">
                        <p className="large">0.2</p>
                        <p className="small">Growth Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
