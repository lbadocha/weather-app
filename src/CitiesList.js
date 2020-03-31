import React from 'react';

const CitiesList = props => {

    let citiesList = props.citiesArray.map(city=>{
        return (
            <div className="city" key={city.id_stacji}>
                <h2>{city.stacja}</h2>
                <p>Temperatura: {city.temperatura} st. C.</p>
                <p>Ciniśenie: {city.cisnienie} hPa</p>
            </div>
        );
    });


    return (
        <div className="cities-list">
            {citiesList}
        </div>
    );

}

export default CitiesList;