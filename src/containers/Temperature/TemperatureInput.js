import React from 'react';
import PropTypes from 'prop-types';
import {SCALES_NAMES} from '../constants';

const TemperatureInput = (props) => {
    return (
      <div className="">
        <form>
          <div className="">      
            <input type="text" value={props.value} onChange={(e)=> props.onChange(e.target.value)} />           
          </div>
          <div className="form-label">
            <label>{SCALES_NAMES[props.scale]}</label>
          </div>
        </form>
      </div>
    )
  }

TemperatureInput.PropTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    scale: PropTypes.string
}

export default TemperatureInput;

