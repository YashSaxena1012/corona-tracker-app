import React, { useState, useEffect } from 'react';
import Coronacard from './Coronacard';
import "./style.css"
const App = () => {
  const [SearchedCountry, setSearchedCountry] = useState("india");
  const [ctdata, setCtdata] = useState({});

  const handleClick = async () => {
    try {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      console.log(data.Countries);
      console.log(SearchedCountry);
      const info = data.Countries.find(item => item.Country.toLowerCase() === SearchedCountry.toLowerCase());
      if (info) {
        const { Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = info;
        const requiredData = { Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date };
        setCtdata(requiredData);
        console.log(ctdata);
      } else {
        alert("Not Found...Try Again");
      }
    } catch (error) {
      console.log(error);
      alert("Not Found...Try Again");
    }
  };
  useEffect(() => {
    handleClick();
  }, [])
  return (
    <>
      <div className='searchbar'>
        <input type="search" className='ct-search' placeholder='ENTER COUNTRY TO BE SEARCHED' onChange={(e) => { setSearchedCountry(e.target.value) }} value={SearchedCountry} />
        <i class="fa-solid fa-magnifying-glass search-icon" onClick={handleClick} ></i>
      </div>
      <Coronacard ctdata={ctdata} />
    </>
  )
};

export default App;
