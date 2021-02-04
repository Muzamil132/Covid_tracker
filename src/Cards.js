import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import Apppbar, {Appbar} from './Apppbar'
import CountUp from 'react-countup';
const Cards = ({Data}) => {

    const useStyles = makeStyles({
        grid:{
            marginTop:5,
            marginLeft:5,
            backgroundColor:'#424242'
          
            
            
        
        },
        text:{
            //  color:'green'
        },
        recovered:{
            color:'green'
        }
        ,death:{
            color:'red'
        }


    })





    const classes = useStyles();

    return (
        <div className="container">
        <Grid container justify="center">
           <Grid className={classes.grid} item  xs={12} sm={3} component={Card}>
           <Apppbar color="#357a38"  name=" RECOVERIES"/>
            <CardContent>
               
              
              
                <Typography className={classes.recovered} variant="h5" >
                
                {Data?.recovered?.value}
                </Typography>
                <Typography  variant="body2"  >
                  {  new Date(Data?.lastUpdate).toDateString()}
                </Typography>
            </CardContent>
           </Grid>
           <Grid className={classes.grid} item  xs={12} sm={3} component={Card}>
           <Apppbar  color=""  name=" INFECTED"/>
            <CardContent className="great">
              
              
              
                <Typography variant="h5"  className={classes.confirmed}    >
              
                {Data?.recovered?.value}
                </Typography>
                <Typography  variant="body2"  >
                  {  new Date(Data?.lastUpdate).toDateString()}
                </Typography>
            </CardContent>
           </Grid>
           <Grid className={classes.grid} item  xs={12} sm={3} component={Card}>
           <Apppbar color="#ff1744 "  name=" DEATHS"/>
            <CardContent>
             
              
                <Typography variant="h5"  className={classes.death}  >
            
                {Data?.deaths?.value}
                </Typography>
                <Typography  variant="body2"  >
                  {  new Date(Data?.lastUpdate).toDateString()}
                </Typography>
            </CardContent>
           </Grid>
           
      
           
        </Grid>
            
        </div>
    )
}

export default Cards
