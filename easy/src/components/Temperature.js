function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  // <BoilingVerdict celsius={parseFloat(temperature)} />

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handelChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
  // 섭씨를 화씨로
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
  // 화씨를 섭씨로
}

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  // Math.round 소수점 이하를 반올림한다
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handelCelsiusChange = this.handelCelsiusChange.bind(this);
    this.handelFahrenheitChange = this.handelFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handelCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handelFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handelCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handelFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
