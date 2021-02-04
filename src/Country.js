import React from 'react'
import  { useState, useEffect } from 'react';
import { NativeSelect, FormControl, AppBar } from '@material-ui/core';
import { CardContent, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';
import Apppbar from './Apppbar';

const Country = ({handleCountry}) => {
    const url = 'https://covid19.mathdro.id/api';
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const fetchCountry = async () => {
         const {data} =await Axios.get(`${url}/countries`)
         const Datta =data.countries
        setCountries(Datta)
      
        };
    
        fetchCountry()
      }, []);
    return (
        <div className="country_picker">
        <Grid container justify ='center'>
     
        <FormControl >
        <Apppbar name="SELECT THE COUNTRY" color="rgba(255, 255, 255, 0.08)"/>
      <NativeSelect   className="picker" defaultValue=""   onChange={(e)=>handleCountry(e.target.value)} >
        <option value="">United States</option>
        {countries.map((country, i) => <option className="option"  key={i} value={country.name}>{country.name}</option>)}
      </NativeSelect>
    </FormControl>
        </Grid>

    
        </div>
    )
}

export default Country
