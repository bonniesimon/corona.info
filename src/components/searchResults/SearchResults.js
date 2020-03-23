import React, {useState, useEffect} from 'react';

//CSS
import './SearchResults.css';

// //Apollo
// import ApolloClient from 'apollo-boost';
// import {gql} from 'apollo-boost';


// const client = new ApolloClient({
//     uri: 'https://covid19-graphql.now.sh/',
// });







const SearchResults = () => {
    const [value, setValue] = useState('');
    const [dataSet, setDataSet] = useState({});
    const [countryDetails, setCountryDetails] = useState([]);


    /**
     * TODO: get data from api and return json data from this function. 
     * @param : countryName
     */
    const getApiData = async () => {
        const results = await fetch('https://pomber.github.io/covid19/timeseries.json');
        const data = await results.json();
        console.log(data);
        setDataSet(data);
        // return {country:'india', confirmed:'376', recovered:'27', death:'7', growthRate:'0.2'};
    }

    const updateValue = (e) => {
        const textInput = e.target.value;
        console.log(textInput)
        setValue(textInput);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        // const data = getApiData();
        // setDetails(data);
        Object.keys(dataSet).map(country =>  {
            if(country.toLowerCase() === value.toLowerCase()){
                console.log(dataSet[country].slice(-1)[0].recovered);
                 setCountryDetails(dataSet[country]);
            }
          });
        
    }

    /**
     * *Runs first time the page loads
     */
    useEffect(() => {
        getApiData();
    }, [])

    return (
        <div className="search-results-container" >
            <form className="search-results-container__form" onSubmit={formSubmit}>
                <input
                 type="text" 
                 value={value}
                 placeholder="Search Country..." 
                 className="search-results-container__form__input"
                 onChange={updateValue}
                 />
                <button className="search-results-container__form__btn">Search</button>
            </form>
            {countryDetails !== undefined ? 
            <div className="results-container">
            <h3 className="results-container__heading">India</h3>
            <div className="results-container__row1">
                <div className="col col">
                    <p className="large">{dataSet.confirmed ? dataSet.confirmed : 396}</p>
                    <p className="small small--yellow">Confirmed</p>
                </div>
                <div className="col col">
                    <p className="large">{countryDetails.slice(-1)[0].recovered === undefined ? 27: countryDetails.slice(-1)[0].recovered } </p>
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
        :
        <h1>Hello WOrld</h1>
        }
            
        </div>
    )
}

export default SearchResults
