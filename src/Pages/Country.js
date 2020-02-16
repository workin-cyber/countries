import React from 'react'
import axios from 'axios'

export default function Country(props) {
    const { countryCode } = props.match.params
    const [country, setCountry] = React.useState({})

    React.useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then(res => setCountry(res.data))
    }, [])

    return <div className='regionsList'>
        <h2>{country.name}</h2>
        <h3>Capital: {country.capital}</h3>
        <img src={country.flag} />
    </div>
}