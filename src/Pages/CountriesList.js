import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CountriesList(props) {
    const { region } = props.match.params
    const [countries, setCountries] = React.useState([])

    React.useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(res => setCountries(res.data))
    }, [])

    return <div className='regionsList'>
        <h2>Countries of {region}</h2>
        <ul>
            {countries.map(c => <li key={c.alpha3Code}>
                <img src={c.flag} />
                <Link to={`/country/${c.alpha3Code}`}>{c.name}</Link>
            </li>)}
        </ul>
    </div>
}