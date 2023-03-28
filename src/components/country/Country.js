import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, region, population, flags} = props.country;
    
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
           <h3>Name: {name.common}</h3>
           <p>Population: {population}</p>
           <p><small>Region: {region}</small></p>
           <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;