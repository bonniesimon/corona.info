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
                <h3 className="resuts-container__heading">India</h3>
                <div className="resutls-container__row1">
                    <div className="col1">
                        <p className="large">396</p>
                    <p className="small">Confirmed</p>
                    </div>
                    <div className="col2">
                        <p className="large">27</p>
                    <p className="small">Recovered</p>                    
                    </div>
                    <div className="col3">
                        <p className="large">7</p>
                    <p className="small">Deaths</p>                    
                    </div>
                </div>
                <div className="resutls-container__row">
                    <p className="large">0.2</p>
                    <p className="small">Growth Rate</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
