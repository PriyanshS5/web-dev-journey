import { alignProperty } from "@mui/material/styles/cssUtils";
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 19.65,
        humidity: 14,
        temp: 21.12,
        tempMax: 21.12,
        tempMin: 21.12,
        weather: "clear sky",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(<diiv>
        <br />
        <h2 style={{textAlign: "center"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </diiv>
        )
}