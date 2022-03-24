import { useEffect, useState } from 'react';
import './Weather.css'

export const Weather = ()=>{
    const [searchValue, setSearchValue] = useState("allahabad")
   
    const getWeatherInfo = async ()=>{
        try {
            let key = "248611b4874cf10cdfdace96277712c7"
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${key}`
            fetch(url)
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
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
               
              />
    
              <button
                className="searchButton"
                type="button" onClick={getWeatherInfo}
                >
                Search
              </button>
            </div>
          </div>
    
          {/* our temp card  */}
         <article className='widget'>
            <div className='weatherIcon'>
                <i className='wi wi-day-sunny'></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>25.5&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>Sunny</div>
                    <div className='place'>Allahabad, India</div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            {/* our 4 columns section */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-sunset'></i></p>
                        <p className='extra-info-leftside'>19:16PM <br /> Sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-humidity'></i></p>
                        <p className='extra-info-leftside'>19:16PM <br /> Humidity</p>
                    </div>
                   
                </div>

                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-rain'></i></p>
                        <p className='extra-info-leftside'>19:16PM <br /> Pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-strong-wind'></i></p>
                        <p className='extra-info-leftside'>19:16PM <br /> Speed</p>
                    </div>
                    </div>
            </div>
         </article>
        </>
      );
    };