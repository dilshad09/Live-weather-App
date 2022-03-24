import { useEffect, useState } from 'react';
import './Weather.css'
import { WeatherCard } from './WeatherCard';

export const Weather = ()=>{
    const [searchValue, setSearchValue] = useState("allahabad")
    const [weatherInfo, setWeatherInfo] = useState({})
    const getWeatherInfo = async ()=>{
        try {
            let key = "248611b4874cf10cdfdace96277712c7"
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${key}&units=metric`
            let res = await fetch(url)
            let data = await res.json();
            console.log("data", data)
            const {temp, pressure, humidity} = data.main;
            const {main:weathermood} = data.weather[0]
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            
            const myNewWeatherInfo = {
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            }
            setWeatherInfo(myNewWeatherInfo)
            console.log(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getWeatherInfo()
    },[])
    return (
        <>
          <div className="wrap">
            <div className="search">
              <input
                type="search"
                placeholder="search..."
                autoFocus
                id="search"
                className="searchTerm"
                value={searchValue || ""}
                onChange={(e)=>setSearchValue(e.target.value)}
               
              />
    
              <button
                className="searchButton"
                type="button" onClick={()=>{
                    getWeatherInfo()
                    setSearchValue("")
                }}
                >
                Search
              </button>
            </div>
          </div>
    
          {/* our temp card  */}
          <WeatherCard weatherInfo={weatherInfo}/>
        </>
      );
    };