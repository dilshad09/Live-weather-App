import { useEffect, useState } from "react";

export const WeatherCard = ({weatherInfo})=>{
    // const [sunsetTime, setSunsetTime] = useState(null)
    const [weatherState, setWeatherState] = useState()
    console.log("weath", weatherState)
          const {
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            } = weatherInfo;
            let sec = sunset;
            let date = new Date(sec*1000)
            let timeStr = `${date.getHours()}:${date.getMinutes()}`
            console.log("weathermood", weathermood)
            useEffect(()=>{
                if(weathermood){
                    switch(weathermood){
                        case "Clouds" : setWeatherState("wi-cloudy")
                        break;
                        case "Haze" : setWeatherState("wi-fog")
                        break;
                        case "Clear" : setWeatherState("wi-day-sunny")
                        break;
                        default:  setWeatherState("wi-day-sunny")
                    }
                }
                // setSunsetTime(timeStr)
            },[weathermood])
    return (<>
    
    <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>{weathermood}</div>
                    <div className='place'>{name}, {country}</div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            {/* our 4 columns section */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-sunset'></i></p>
                        <p className='extra-info-leftside'>{timeStr}<br /> Sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-humidity'></i></p>
                        <p className='extra-info-leftside'>{humidity} <br /> Humidity</p>
                    </div>
                   
                </div>

                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-rain'></i></p>
                        <p className='extra-info-leftside'>{pressure} <br /> Pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-strong-wind'></i></p>
                        <p className='extra-info-leftside'>{speed} <br /> Speed</p>
                    </div>
                    </div>
            </div>
         </article>
    </>)
}