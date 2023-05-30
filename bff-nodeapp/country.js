const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.a6lfvtu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
//mongodb+srv://admin:<password>@cluster0.a6lfvtu.mongodb.net/?retryWrites=true&w=majority
const db = mongoose.connection;

// const covid19db = new mongoose.Schema({
//   name: String,
//   totalCases: Number,
//   totalDeaths: Number,
//   totalRecovered: Number,
//   activeCases: Number
// });

// const Country = mongoose.model('Country', covid19db);

const app = express();
const port = 3000;
var countries ={};

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Retrieve all countries
const getCountries1 = async () => {
  try {
    console.log('getCountries');
     countries1 = await  db.covid19db.find();
    console.log('All countries:', countries1);
  } catch (error) {
    console.error('Error retrieving countries:', error);
  }
};

app.get('/countries', async (req, res) => {
  try {
    console.log('/countries');
    getCountries(req.query.cname);
    res.json(countries);
  } catch (error) {
    console.error('Error retrieving countries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// Define a schema
const countrySchema = new mongoose.Schema({
  name: String,
  totalCases: Number,
  totalDeaths: Number,
  totalRecovered: Number,
  activeCases: Number
});

// Create a model based on the schema
const Country = mongoose.model('Country', countrySchema);

// Create a new country
const createCountry = async (countryData) => {
  try {
    const country = new Country(countryData);
    const savedCountry = await country.save();
    console.log('Country created:', savedCountry);
  } catch (error) {
    console.error('Error creating country:', error);
  }
};

// Retrieve all countries
const getCountries = async (cname) => {
  try {
    console.log('get countries:', cname);
    countries = await Country.find({name : cname});
    console.log('get countries:', countries);
  } catch (error) {
    console.error('Error retrieving countries:', error);
  }
};

const getAllCountries = async () => {
  try {
   
    countries = await Country.find({});
    console.log('All countries:', countries);
  } catch (error) {
    console.error('Error retrieving countries:', error);
  }
};

// Update country statistics
const updateCountryStats = async (countryId, newData) => {
  try {
    const updatedCountry = await Country.findByIdAndUpdate(countryId, newData, { new: true });
    console.log('Country updated:', updatedCountry);
  } catch (error) {
    console.error('Error updating country:', error);
  }
};

// Delete a country
const deleteCountry = async (countryId) => {
  try {
    const deletedCountry = await Country.findByIdAndDelete(countryId);
    console.log('Country deleted:', deletedCountry);
  } catch (error) {
    console.error('Error deleting country:', error);
  }
};

//Usage examples:
// createCountry({
//   name: 'Thailand',
//   totalCases: 6000000,
//   totalDeaths: 10000,
//   totalRecovered: 800000,
//   activeCases: 20000
// });
//getCountries('United States');
//getAllCountries();
// updateCountryStats('60ad7a07b9e0d54a74b7856d', {
//   totalCases: 1200000,
//   totalDeaths: 55000,
//   totalRecovered: 900000,
//   activeCases: 160000
// });
//deleteCountry('60ad7a07b9e0d54a74b7856d');
