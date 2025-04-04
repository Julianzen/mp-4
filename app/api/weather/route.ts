import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${WEATHER_API_KEY}&contentType=json`;
    console.log(url)
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch weather");

        const data = await res.json();
        const descript = data.days[0].description;
        const city = data.resolvedAddress;
        const mintemp = data.days[0].tempmin;
        const maxtemp = data.days[0].tempmax;
        return NextResponse.json({ description: descript, citty: city , minntemp: mintemp, maxxtemp: maxtemp });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ description: "Weather data unavailable" , citty: "Unknown City", minntemp: 0, maxxtemp: 0});
    }
}