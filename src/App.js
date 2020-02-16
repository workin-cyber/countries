import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Switch, Route } from 'react-router-dom'
import RegionsList from './Pages/RegionsList'
import CountriesList from './Pages/CountriesList'
import Country from './Pages/Country'

function App() {
  return <main>
    <Header />
    <Switch>
      <Route path='/' exact component={RegionsList} />{/* Home: List Of Regions */}
      <Route path='/countries/:region' component={CountriesList} /> {/*List Of Countries By Region*/}
      <Route path='/country/:countryCode' component={Country} /> {/* Country Page By Country Code */}
    </Switch>
    <Footer />
  </main>
}

export default App
