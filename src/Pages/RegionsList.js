import React from 'react'
import { Link } from 'react-router-dom'

export default class RegionsList extends React.Component {
    constructor() {
        super()
        this.regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
    render() {
        return <div className='regionsList'>
            <h2>Regions</h2>
            <ul>
                {this.regions.map(r => <li key={r}>
                    <Link to={`/countries/${r}`}>{r}</Link>
                </li>)}
            </ul>
        </div>
    }
}