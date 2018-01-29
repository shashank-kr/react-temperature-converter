import update from 'immutability-helper';
import { SCALES_NAMES } from '../../constants';

const intialState = {
  scale: SCALES_NAMES.Celsius,
  value: '0'
}
const temperature = (state = intialState, action) => {
  switch (action.type) {
    case SCALES_NAMES.Celsius:
      return update(state, {
        scale: { $set: SCALES_NAMES.Celsius },
        value: { $set: action.payload }
      });
    case SCALES_NAMES.Fahrenheit:
      return update(state, {
        scale: { $set: SCALES_NAMES.Fahrenheit },
        value: { $set: action.payload }
      });
    default:
      return state;
  }
};

export default temperature;