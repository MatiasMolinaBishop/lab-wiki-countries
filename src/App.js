import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import jasonData from './countries.json';
import {Routes, Route, Router} from "react-router-dom"
import CountryDetails from './components/CountryDetails';
import React, { useState, useEffect } from "react"
import axios from "axios"

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'






function App() {

  const [currentCountries, setCountries] = useState([]);

  useEffect(() =>{
    const apiCall = async () => {
      const res = await axios.get(apiURL)
      console.log(res.data)
      setCountries(res.data)
    }
    apiCall()
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <img class='imgLogo' src='https://wallpaperaccess.com/full/19602.jpg' alt="imageEarth"/>
      <Routes>
        <Route path="/listCountries" element={<CountriesList countries = {currentCountries}></CountriesList>} />
        <Route path="/listCountries/:alpha3Code" element={<CountryDetails countries = {currentCountries}></CountryDetails>} />
      </Routes>
    </div>
  );
}

export default App;
