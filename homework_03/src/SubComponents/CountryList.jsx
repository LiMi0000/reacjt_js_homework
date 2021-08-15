import React from "react";

export default class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      total: null,
      next: null,
      previous: null,
    };

    // console.log("C - TOR");
  }
  // deprecated
  componentWillMount() {
    // console.log(`component will mount`);
  }

  // deprecated
  componentWillReceiveProps(nextProps) {
    // console.log(`component will receive props`, nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(`should component update, by default always yes`);
    return true;
  }
  // deprecated
  componentWillUpdate(nextProps, nextState) {
    // console.log(`component will update`);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`component did update `, prevProps, prevState);
    if (prevProps.people.length !== this.props.people.length) {
    }
  }

  componentWillUnmount() {
    // console.log(`component will die :(`);
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

  render() {
    console.log(`RENDERING....`);

    console.log(this.state);

    return (
      <div>
        <h3>Total people: {this.state.people.length}</h3>
        <ol>
          {this.props.people.map((person) => (
            <li>
              <strong>{person.name}</strong>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export class CountryListInformation extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.people.map((person) => (
            <li>
              Birth Year: <strong> {person.birth_year} </strong> - Gender:
              <strong> {person.gender} - </strong>
              Height: {person.height} - Hair Color: {person.hair_color}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

CountryList.defaultProps = {
  people: [],
};
