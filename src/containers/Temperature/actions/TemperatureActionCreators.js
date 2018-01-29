
let TemperatureActionCreators = {

  convertTemperature(type, payload) {
    return {
      type: type,
      payload: payload
    }
  }
};

export default TemperatureActionCreators;
