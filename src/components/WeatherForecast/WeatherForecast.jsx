import "./WeatherForecast.css"
import WeatherData from "./WeatherData/WeatherData"
import WeatherIcon from "./WeatherIcon/WeatherIcon"

function WeatherForecast (oneWeather) {

    return (
        <div>
            <WeatherIcon {...oneWeather}/>
            <WeatherData {...oneWeather}/>
        </div>
)}

export default WeatherForecast