import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const API_KEY = "d92e8b671c3634af28ca2920cd0337fb"
    const api = "http://api.openweathermap.org/data/2.5/weather"

    let getData = async () => {
        let weather = await fetch(`${api}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await weather.json();
        let result = {
            city: city,
            temp: data.main.temp,
            humidity: data.main.humidity,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value)
        console.log(event.target.value)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getData();
        updateInfo(info)
    }


    return (
        <div className='weather'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined"
                    value={city} onChange={handleChange} onSubmit={handleSubmit} />
                <Button variant="outlined" type="submit">Get weather</Button>
            </form>
        </div>
    )
}