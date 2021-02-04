import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Line, Bar ,Pie} from 'react-chartjs-2';
import './App.css'
import axios from 'axios'
import { CardContent, Grid, Typography } from '@material-ui/core';
const Chart = ({Data:{confirmed,deaths,recovered,lastUpdate},country}) => {
    // console.log(Data)

    const [dailyData,setdailyData] =useState({})
    useEffect(()=>{
        const dailydata=async()=>{
               const {data}= await axios.get('https://api.covidtracking.com/v1/us/daily.json')
               

              const document = data.map(({positive,recovered,death,dateChecked:date})=> ({positive,recovered,death,date}))
               setdailyData(document)
             
             
        }

        dailydata()

    },[])
    console.log(dailyData)
    return (
        <div>
          <Grid className="graph"  container  >
            <Grid className="bar"    item xs={12} sm={5} >
            {
                confirmed ? (
      <Pie
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              
              backgroundColor: ['#3f51b5', '#357a38', '#ff1744'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true },

        }}
      />
    ) : null
            }
            </Grid>
            <Grid item xs={12} sm={6} >
                {dailyData[0] ? (
      <Line
   style={{height:500}}
      
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.positive/1000000),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: false,
          }, {
            data: dailyData.map((data) => data.death/1000000),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: false,
          },  {
            data: dailyData.map((data) => data.recovered/1000000),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: false,
          },
          ],
        }}
      />
    ) : null

                }
            </Grid>
          </Grid>
            
        </div>
    )
}

export default Chart
