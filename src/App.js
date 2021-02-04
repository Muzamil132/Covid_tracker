
import Cards from "./Cards"
import Chart from "./Chart"
import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import Country from './Country'
import {fetchdata} from './Fetch'
import './App.css'

import  { Component } from 'react'

export default class App extends Component {

  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const data = await fetchdata();

    this.setState({ data });
  }
  handleCountry = async (country) => {
    const data = await fetchdata(country);
     
    this.setState({ data, country: this.state.country });
  }
 
  
  render() {
    console.log(this.state.country)
    return (
      <div className="App">

<Country handleCountry={this.handleCountry}/>

     <Cards Data={this.state.data}/>
     <Chart   Data={this.state.data} country={this.state.country} />
 
   
    </div>
    )
  }
}
