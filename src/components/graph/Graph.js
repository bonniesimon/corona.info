import React,{useState, useEffect} from 'react'

// import {XYPlot, YAxis, XAxis, HorizontalGridLines, VerticalGridLines,LineMarkSeries, VerticalBarSeries, LineSeries } from 'react-vis';
import {Line} from 'react-chartjs-2';

//CSS
import './Graph.css';
import './../../../node_modules/react-vis/dist/style.css'

/*
*<Graph/> Component
 */
const Graph = () => {
    const [dataSetGraph, setDataSetGraph] = useState({});
    const [chartData, setchartData] = useState({});


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
        let yAxisData = [];
        let xAxisData = [];
        dataArr.forEach(day => {
            
            if(day.confirmed !== 0){
                // dataSet.push({x:day.date, y:day.confirmed});
                xAxisData.push(day.date);
                yAxisData.push(day.confirmed);
                console.log(day);
            }
            
        })  
        setDataSetGraph({x:xAxisData, y:yAxisData});
        
        // setDataSetGraph(dataSet);

    }
    

    const chart = () => {
        setchartData({
            labels:dataSetGraph.x,
            datasets: [
                {
                    label:'Fatalities',
                    data:dataSetGraph.y,
                }
            ]
        })
    }

    useEffect(() => {
        chart();
    }, [dataSetGraph])

    /*
    *TODO : Remove react-vis with chartjs  https://www.youtube.com/watch?v=A5KaLpqzRi4
     */


    return (
        <div className="graph-container">
            <h1 className="graph-container__heading">Curve</h1>

            <div className="graph-container__graph-wrapper">
                <Line 
                    data={chartData} 
                    options={{

                        responsive: true,
                    }
                    }
                />
            </div>
        </div>
    )
}

export default Graph;
