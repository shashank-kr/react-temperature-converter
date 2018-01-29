import { connect } from 'react-redux';
import TemperatureConverter from './TemperatureConverter';
import TemperatureActionCreators from './actions/TemperatureActionCreators';

const mapStateToProps = (state) => (
    {
        scale: state.temperature.scale,
        value: state.temperature.value
    }
);
const mapDispatchToProps = (dispatch) => (
    {
        onChange: (type, payload) => dispatch(TemperatureActionCreators.convertTemperature(type, payload))
    }
);

const TemperatureConverterContainer = connect(mapStateToProps, mapDispatchToProps)(TemperatureConverter);

export default  TemperatureConverterContainer ;