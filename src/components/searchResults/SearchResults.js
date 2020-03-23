import React, {useState, useEffect} from 'react';

//CSS
import './SearchResults.css';

//Children
import Result from "../result/Result";



const SearchResults = () => {
    const [value, setValue] = useState('');
    const [dataSet, setDataSet] = useState({});


    /**
     * TODO: get data from api and return json data from this function. 
     * @param : countryName
     */
    const getApiData = async (country) => {
        const results = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
        const data = await results.json();
        console.log(data);
        setDataSet(data);
        
    }

    const updateValue = (e) => {
        const textInput = e.target.value;
        // console.log(textInput)
        setValue(textInput);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!value){
            console.log("No Search input!!");
            return;
        }
        getApiData(value.toLowerCase());
        
    }

    /**
     * *Runs first time the page loads
     */
    // useEffect(() => {
    //     getApiData();
    // }, [])

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
            <Result data={dataSet}/>
        </div>
    )
}

export default SearchResults
