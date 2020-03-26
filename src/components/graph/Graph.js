import React,{useState, useEffect} from 'react'

import {XYPlot, YAxis, XAxis, HorizontalGridLines, VerticalGridLines,LineMarkSeries, VerticalBarSeries, LineSeries } from 'react-vis';

//CSS
import './Graph.css';
import './../../../node_modules/react-vis/dist/style.css'


const Graph = () => {
    const [dataSetGraph, setDataSetGraph] = useState([]);


    useEffect(() => {
        getDataApi();
    }, [])

    const getDataApi = async () => {
        const res = await fetch('https://pomber.github.io/covid19/timeseries.json');
        const data = await res.json();
        const dataIndia = data['India'];
        // console.log(dataIndia)
        extractDataForGraph(dataIndia);
    }

    /**@params : dataArr :: Array of Objects*/
    const extractDataForGraph = (dataArr) => {
        let dataSet = [];
        dataArr.forEach(day => {
            console.log(day.confirmed)
            if(day.confirmed !== 0){
                dataSet.push({x:day.date, y:day.confirmed});
                // console.log(day.date);
            }
            
        })  
        console.log(dataSet)
        setDataSetGraph(dataSet);
    }
    

    /*
    *TODO : Remove react-vis with chartjs  https://www.youtube.com/watch?v=A5KaLpqzRi4
     */


    return (
        <div className="graph-container">
            <h1 className="graph-container__heading">Curve</h1>

            <div className="graph-container__graph-wrapper">
                <XYPlot
                stackBy="x"
                xType="ordinal"
                width={900}
                height={500}>
                    {/* <VerticalGridLines /> */}
                    {/* <HorizontalGridLines /> */}
                    <XAxis title="Period of time" />
                    <YAxis title="Fatalities" />
                        <LineMarkSeries
                            data={dataSetGraph}
                            color="#9B287B"
                            curve={'curveMonotoneX'}
                            onSeriesMouseIn={(e) => {
                                console.log(e.target.value)
                            }}
                            />
                    {/* <VerticalBarSeries
                        
                        data={dataSetGraph}
                        color="#9B287B"
                        onSeriesMouseOut={(event)=>{
                            console.log(event.target.value)
                          }}
                    /> */}
                </XYPlot>
            </div>
        </div>
    )
}

export default Graph;
