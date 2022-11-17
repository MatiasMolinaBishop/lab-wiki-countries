import { Link } from "react-router-dom";


function CountriesList (props) {

    const country = props.countries

    return (

        <div className='list-group'>

            {country.map((countries)=>{
                return(
                    <div>
                        <Link to={`/listCountries/${countries.alpha3Code}`} className="list-group-item list-group-item-actio" >{countries.name.common}</Link>
                    </div>   
                )
            })}
        </div>
)}
export default CountriesList

// "/:alpha3Code"