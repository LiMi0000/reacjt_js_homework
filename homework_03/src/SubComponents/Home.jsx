import React from "react";
import CustomInput from "./CustomInput";
import CountryList from "./CountryList";
import { CountryListInformation } from "./CountryList";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      countries: [],
      people: [],
      total: null,
      renderPeoplesList: true,
      renderPeoplesInfos: false,
    };

    // setTimeout(() => {
    //   this.setState({
    //     countries: ["albania", "turkey"],
    //   });
    // }, 6000);
  }

  componentDidMount() {
    this.fetchSwapiPeople();
    // console.log(`component did mount`);
  }

  fetchSwapiPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const fetchedResponse = await response.json();
    this.setState({
      people: fetchedResponse.results,
      total: fetchedResponse.count,
      next: fetchedResponse.next,
      previous: fetchedResponse.previous,
    });
  };

  changeCountryName = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  addCountryName() {
    const { country, countries } = this.state;

    if (
      country.length > 0 &&
      !countries.some(
        (currentCountry) =>
          currentCountry.toLowerCase() === country.toLowerCase()
      )
    ) {
      this.setState({
        country: "",
        countries: [...countries, country],
      });
    } else {
      alert("you should input a not existing country inside the input field");
    }
  }

  deleteCountry = (countryName) => {
    this.setState({
      countries: this.state.countries.filter(
        (country) => country !== countryName
      ),
    });
  };

  handlePeoplesList = () => {
    this.setState({
      renderPeoplesList: !this.state.renderPeoplesList,
    });
  };

  handlePeoplesInfos = () => {
    this.setState({
      renderPeoplesInfos: !this.state.renderPeoplesInfos,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <CustomInput
          countryName={this.state.country}
          onNameChange={this.changeCountryName}
        />
        <button onClick={this.addCountryName.bind(this)}>Add Country</button>
        <hr />
        {this.state.renderPeoplesList && (
          <CountryList
            people={this.state.people}
            total={this.state.total}
            onCountryDelete={this.deleteCountry}
          />
        )}
        <button onClick={this.handlePeoplesList}>
          {this.state.renderPeoplesList ? "HIDE" : "SHOW"}
        </button>

        <div>
          {this.state.renderPeoplesInfos && (
            <CountryListInformation people={this.state.people} />
          )}

          <button onClick={this.handlePeoplesInfos}>
            {this.state.renderPeoplesInfos
              ? "HIDE information about peoples above"
              : "SHOW information about peoples above"}
          </button>
        </div>
      </div>
    );
  }
}

CountryList.defaultProps = {
  people: [],
};
