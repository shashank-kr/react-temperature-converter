import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SCALES_NAMES } from '../constants';
import './style.css'
import TemperatureInput from './TemperatureInput';
import {convertTemperature,tryConvert} from '../Utility/temperature'

class TemperatureConverter extends Component {

    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      }
    
      handleCelsiusChange(value) {
        this.props.onChange(SCALES_NAMES.Celsius,value);
      }
    
      handleFahrenheitChange(value) {
        this.props.onChange(SCALES_NAMES.Fahrenheit,value);
      }
    

    render() {
        const scale = this.props.scale;
        const value = this.props.value;
        const fahrenheit = scale === SCALES_NAMES.Celsius ? tryConvert(value, convertTemperature.toFahrenheit) : value;
        const celsius = scale === SCALES_NAMES.Fahrenheit ? tryConvert(value, convertTemperature.toCelsius) : value;

        return (
          <div className ="container-main">
            <div className="tcontainer">
              <div className="tcontainer-header">
              Temperature
            </div>
              <div className="tcontainer-item">
                <TemperatureInput
                  scale= {SCALES_NAMES.Celsius}
                  value={celsius}
                  onChange={this.handleCelsiusChange} />
              </div>
              <div className="separator"> = </div>
              <div className="tcontainer-item">
                <TemperatureInput
                  scale= {SCALES_NAMES.Fahrenheit}
                  value={fahrenheit}
                  onChange={this.handleFahrenheitChange} />
              </div>           
            </div> 
          </div>
                 
        );
    }
}

TemperatureConverter.PropTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    scale: PropTypes.string
}

export default TemperatureConverter;