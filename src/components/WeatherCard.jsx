export const WeatherCard = ()=>{
    return (<>
    
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
    </>)
}