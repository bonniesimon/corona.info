import React, {useState} from 'react'

//CSS
import './Result.css'

const Result = ({data}) => {
    
    return (
        <div className="results-container">
            <h3 className="results-container__heading"> {data.country !== undefined ? data.country : 'Stay Home Stay Safe'} </h3>
            <div className="results-container__row1">
                <div className="col col">
                    <p className="large">{data.cases !== undefined ? data.cases : ''} </p>
                    <p className="small small--yellow">{data.cases !== undefined ? 'Confirmed ': ''}</p>
                </div>
                <div className="col col">
                    <p className="large">{data.recovered !== undefined ? data.recovered : ''}</p>
                    <p className="small small--green">{data.recovered !== undefined ? 'Recovered' : ''}</p>                    
                </div>
                <div className="col col">
                    <p className="large">{data.deaths !== undefined ? data.deaths : ''}</p>
                    <p className="small small--red">{data.deaths !== undefined ? 'Deaths' : ''}</p>                    
                </div>
            </div>
            <div className="results-container__row2">
                <div className="col">
                    <p className="large">{data.casesPerOneMillion !== undefined ? data.casesPerOneMillion : ''}</p>
                    <p className="small">{data.casesPerOneMillion !== undefined ? "Cases / 1 million" : ''}</p>
                </div>
            </div>
        </div>
    )
}

export default Result
