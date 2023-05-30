//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get('http://localhost:3000/countries?cname=India');
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        console.error('Error retrieving countries:', error);
      }
    };

    fetchData();
  }, []);
// <h1>Country List</h1>
  return (
    <div>     
     
        {countries.map((country) => (
             <><p>{country._id} </p><strong>{country.name}
             </strong><p>Total Cases: {country.totalCases}</p>
             <p>Total Deaths: {country.totalDeaths}</p>
             <p>Total Recovered: {country.totalRecovered}</p>
             <p>Active Cases: {country.activeCases}</p></>
          
        ))}
      
    </div>
  );
};

export default CountryList;