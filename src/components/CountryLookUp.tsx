'use client'
import {useEffect, useState} from "react";
import {CountryLookUpResponse} from "@/types";

const CountryLookUp = () => {
    const [country, setCountry] = useState<string>('United States');
    useEffect(() => {
        fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            .then((res) => res.json())
            .then((data:CountryLookUpResponse) => setCountry(data.country))
    }, [])
    return (
        <div>
            {country}
        </div>
    )
}

export default CountryLookUp;