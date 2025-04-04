"use client";

import { useState } from "react";
import PostPreview from "./Post-Preview";

export default function WeatherPost() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("Click the button to get weather");
    const [citty, cityAddress] = useState("N/A");
    const [mint, tempmin] = useState("Min ");
    const [maxt, tempmax] = useState("Max ");
    async function fetchWeather() {
        try {
            const res = await fetch(`/api/weather?city=${city}`);
            const data = await res.json();
            setWeather(data.description);
            cityAddress(data.citty);
            tempmin(data.minntemp);
            tempmax(data.maxxtemp);
        } catch (error) {
            setWeather("Weather data unavailable");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center bg-blue-200 p-4">
            <input
                className="p-2 border rounded mb-2"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="p-2 bg-blue-500 text-white rounded mb-4"
                onClick={fetchWeather}
            >
                Get Weather
            </button>
            <PostPreview
                post={{
                    id: "id",
                    title: `${citty}- Weather Today:`,
                    content: weather,
                    temp: `${mint}F ~ ${maxt}F`,
                }}
            />
        </div>
    );
}