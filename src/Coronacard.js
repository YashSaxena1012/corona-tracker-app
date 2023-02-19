import React from 'react'
import "./style.css"
const Coronacard = ({ ctdata }) => {
    const { Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = ctdata;
    return (
        <>
            <div className="ct-widget">
                <div className="ct-head">
                    <div className="ct-icon"><i class="fa-solid fa-virus icon fa-spin"></i></div>
                    <div className="ct-icon"><i class="fa-solid fa-virus icon2  fa-flip"></i></div>
                    <div className="ct-country">{Country}</div>
                </div>
                <div className="ct-info">
                        <div className="aclass">New Confirmed: {NewConfirmed}</div>
                        <div className="bclass">Total Confirmed: {TotalConfirmed}</div>
                        <div className="aclass">New Recovered: {NewRecovered}</div>
                        <div className="bclass">Total Recovered: {TotalRecovered}</div>
                        <div className="aclass">New Deaths: {NewDeaths}</div>
                        <div className="bclass">Total Deaths: {TotalDeaths}</div>
                        <p>data updated on: <br/>{Date}</p>
                        <a href="https://www.worldometers.info/coronavirus/" rel="noreferrer" target="_blank"><button className="morebtn">Click Here</button></a>
                    </div>
            </div>
        </>
    )
}

export default Coronacard;