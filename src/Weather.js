import React, {Component} from 'react';

import axios from 'axios';

import CitiesList from './CitiesList';
import SearchForm from './SearchFrom';

class Weather extends Component {


    constructor() {
        super();

        this.state = {
            cities: [],
            filteredCities: []
        }
    }


    fileterCities = (event) => {
        
        let filteredCities = this.state.cities.filter(city=>{
            return city.stacja.toUpperCase().includes(event.target.value.toUpperCase());
        });

        this.setState({filteredCities: filteredCities})
    }

    componentDidMount() {
        axios.get(`https://danepubliczne.imgw.pl/api/data/synop`)
        .then(res => {
            const citiesArr = res.data;
            this.setState({ 
                cities: citiesArr, 
                filteredCities: citiesArr
            });
        });
    }

    render() {
        return (
            <div className="weather">
                <SearchForm search={this.fileterCities} />
                <CitiesList citiesArray={this.state.filteredCities} />
            </div>
        )
    }
}

export default Weather;