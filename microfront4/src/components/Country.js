
import React from 'react';
import axios from 'axios';

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/countries?cname=Thailand')
      .then(response => {
        this.setState({ countries: response.data });
      })
      .catch(error => {
        console.error('Error retrieving countries:', error);
      });
  }

  render() {
    const { countries } = this.state;

    return (
      <div>      
          {countries.map((country) => (      
            <>    
              <strong>{country.name}</strong>
              <p>Total Cases: {country.totalCases}</p>
              <p>Total Deaths: {country.totalDeaths}</p>
              <p>Total Recovered: {country.totalRecovered}</p>
              <p>Active Cases: {country.activeCases}</p>
              </>
          ))}
        
      </div>
    );
  }
}

export default CountryList;


