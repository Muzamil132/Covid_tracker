import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

  export const fetchdata =async(country)=>{
   let changeurl =url
   if(country){
       changeurl = `${url}/countries/${country}`;
   }

      try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } =await axios.get(changeurl)
        return { confirmed, recovered, deaths, lastUpdate }
      }
      catch(error){
          return error
      }

   
    
   
     
}