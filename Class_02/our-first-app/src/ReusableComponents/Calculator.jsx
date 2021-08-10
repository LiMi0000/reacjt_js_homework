import React from "react";

// here i just added more buttons and made it work with all buttons for each operation...

// export default class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstNumber: "",
//       secondNumber: "",
//       result: null,
//     };
//   }

//   changeFirstNumber = (event) => {
//     this.setState({
//       firstNumber: parseInt(event.target.value),
//     });
//   };

//   changeSecondNumber = (event) => {
//     this.setState({
//       secondNumber: parseInt(event.target.value),
//     });
//   };

//   performOperation = (operator) => {
//     if (operator === this.state.sum) {
//       this.setState({
//         result: this.state.firstNumber + this.state.secondNumber,
//         firstNumber: "",
//         secondNumber: "",
//       });
//     }
//     if (operator === "-") {
//       this.setState({
//         result: this.state.firstNumber - this.state.secondNumber,
//         firstNumber: "",
//         secondNumber: "",
//       });
//     }
//     if (operator === "*") {
//       this.setState({
//         result: this.state.firstNumber * this.state.secondNumber,
//         firstNumber: "",
//         secondNumber: "",
//       });
//     }
//     if (operator === "/") {
//       this.setState({
//         result: this.state.firstNumber / this.state.secondNumber,
//         firstNumber: "",
//         secondNumber: "",
//       });
//     }
//   };

// here i did it with each button for every operation...

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <input
//             value={this.state.firstNumber}
//             onChange={this.changeFirstNumber}
//             type="number"
//           />
//           <input
//             value={this.state.secondNumber}
//             onChange={this.changeSecondNumber}
//             type="number"
//           />

//           <button onClick={() => this.performOperation("+")}>+</button>
//           <button onClick={() => this.performOperation("-")}>-</button>
//           <button onClick={() => this.performOperation("*")}>*</button>
//           <button onClick={() => this.performOperation("/")}>/</button>
//         </div>
//         <div>{this.state.result}</div>
//       </React.Fragment>
//     );
//   }
// }

// here just tried some ways to make it work but didn't manage to do it so i don't know if this was a way or i just make it up thinking
// its a way maybe to reach to the end but nope...

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      result: null,
      operations: [],
    };
  }

  changeFirstNumber = (event) => {
    this.setState({
      firstNumber: parseInt(event.target.value),
    });
  };

  changeSecondNumber = (e) => {
    this.setState({
      secondNumber: parseInt(e.target.value),
    });
  };

  performOperation = (operator) => {
    if (operator === "+") {
      this.setState({
        result: this.state.firstNumber + this.state.secondNumber,
        firstNumber: "",
        secondNumber: "",
      });
    }
    if (operator === "-") {
      this.setState({
        result: this.state.firstNumber - this.state.secondNumber,
        firstNumber: "",
        secondNumber: "",
      });
    }
  };

  options = () => [
    {
      label: "+",
      value: this.state.firstNumber + this.state.secondNumber,
    },
    {
      label: "-",
      value: this.state.firstNumber - this.state.secondNumber,
    },
  ];

  handleChange(e) {
    this.setState({ operations: e.target.value });
  }

  render() {
    // const { options } = this.props;
    return (
      <React.Fragment>
        <div>
          <input
            value={this.state.firstNumber}
            onChange={this.changeFirstNumber}
            type="number"
          />
          <input
            value={this.state.secondNumber}
            onChange={this.changeSecondNumber}
            type="number"
          />

          <select value={this.state.operations} onChange={this.handleChange}>
            {this.props.operations.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          <button onClick={this.performOperation}>calculate</button>
        </div>
        <div>{this.state.result}</div>
      </React.Fragment>
    );
  }
}

export default Calculator;
