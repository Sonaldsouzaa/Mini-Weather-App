import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({

        city: "bangalore",
        temp: 22.63,
        humidity: 90,
        temp_max: 22.63,
        temp_min: 22.63,
        weather: "light rain"
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}