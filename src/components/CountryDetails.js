import { useParams } from "react-router-dom";

function CountryDetails(props) {
    const countries = props.countries
    const {alpha3Code} = useParams()

    const selectedCountry = countries.find((country)=> {
        return country.alpha3Code === alpha3Code
     })

    return(
        
        <div className='list-group'>
         <h1>COUNTRY DETAILS</h1>
         <h3>{alpha3Code}</h3>
         Name: {selectedCountry.name.common}
         <br></br>
         Region: {selectedCountry.region}
         <br></br>
         Subregion: {selectedCountry.subregion}

        </div>
    )
}

export default CountryDetails


// "region": "Americas",
//     "subregion": "Caribbean",