// Variables
/* Regular Expressions */
const parentheses = /[\(\)]/; // Regular expression to detect parentheses
const decimalPoint = /\./; // Regular expression to detect period
const operator = /[*+-\/]/; // Regular expression to detect operators
const operatorAtEnd = /[*+-\/]$/; // Regular expression to detect operators at the end of the formula
const negativeAfterOperator = /[0-9][*+-\/]{1}$/; // Regular expression to detect operators at the end of the formula to input subtraction operator formula
const negativeAtEnd = /[0-9][*+‑\/]{1}-$/; // Regular expression to detect subtraction operator at the end of the formula

// Header Component
const Header = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "header", className: "text-center" }, /*#__PURE__*/
    React.createElement("h1", null, "Javascript Calculator")));


};

// Calculator Component
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormula: '',
      currentOutput: '0' };


    this.clear = this.clear.bind(this);
    this.enterValue = this.enterValue.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  /* Method to initialize the calculator */
  clear() {
    this.setState({
      currentFormula: '',
      currentOutput: '0' });

  }

  /* Method to enter values either numbers, decimal point, or mathematical operators */
  enterValue(e) {
    const value = e.target.value; // Value received from one of the buttons clicked

    // Parentheses values will be displayed in the FormulaDisplay. The OutputDisplay will only show '0'.
    if (parentheses.test(value)) {
      this.setState({
        currentFormula: this.state.currentFormula + value,
        currentOutput: '0' });

    } else if (decimalPoint.test(value)) {// Decimal values will show in both FormulaDisplay and OutputDisplay
      if (!this.state.currentOutput.includes('.')) {
        this.setState({
          currentFormula: this.state.currentFormula + value,
          currentOutput: this.state.currentOutput + value });

      }
    } else if (!operator.test(value)) {// Numeric values will be displayed in both FormulaDisplay and OutputDisplay
      if (this.state.currentOutput == '0') {
        this.setState({
          currentFormula: this.state.currentFormula + value,
          currentOutput: value });

      } else {
        this.setState({
          currentFormula: this.state.currentFormula + value,
          currentOutput: this.state.currentOutput + value });

      }
    } else if (operator.test(value)) {// Operators will only be displayed in FormulaDisplay. OutputDisplay will only show '0'
      // If the formula already has an operator at the end, this condition is met
      if (operatorAtEnd.test(this.state.currentFormula)) {
        // If the value is '-' and user wants to place a '-' after an operator
        if (value == "-" && negativeAfterOperator.test(this.state.currentFormula)) {
          this.setState({
            currentFormula: this.state.currentFormula + value });

        } else if (negativeAtEnd.test(this.state.currentFormula)) {// Recent operator replaces two previous operators (one of which is '-') if formula ends with a '-'
          const newFormula = this.state.currentFormula.slice(0, this.state.currentFormula.length - 2);
          this.setState({
            currentFormula: newFormula + value });

        } else {
          // Not relating to special conditions above, the recent operator replaces the last operator entered
          const newFormula = this.state.currentFormula.slice(0, this.state.currentFormula.length - 1);
          this.setState({
            currentFormula: newFormula + value });
        }
      } else {// Enters the operator in the formulaDisplay if there is no operator at the end of the formula
        this.setState({
          currentFormula: this.state.currentFormula + value });

      }
      // Displays only '0' in the outputDisplay whenever an operator is entered
      this.setState({
        currentOutput: '0' });

    }
  }

  /* Method to process and calculate the formula expression */
  calculate() {
    const output = eval(this.state.currentFormula); // Calculate the string formula
    this.setState({
      currentFormula: output,
      currentOutput: output });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator", className: "container" }, /*#__PURE__*/
      React.createElement(FormulaDisplay, { currentFormula: this.state.currentFormula }), /*#__PURE__*/
      React.createElement(OutputDisplay, { currentOutput: this.state.currentOutput }), /*#__PURE__*/
      React.createElement(Buttons, { clear: this.clear, enterValue: this.enterValue, calculate: this.calculate })));


  }}


// FormulaDisplay Component
class FormulaDisplay extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "formula" }, this.props.currentFormula));

  }}


// OutputDisplay Component
class OutputDisplay extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "display" }, this.props.currentOutput));

  }}


// Buttons Component
class Buttons extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "clear", value: "CE", onClick: this.props.clear }, "CE"), /*#__PURE__*/
      React.createElement("button", { id: "openP", value: "(", onClick: this.props.enterValue }, "("), /*#__PURE__*/
      React.createElement("button", { id: "closeP", value: ")", onClick: this.props.enterValue }, ")"), /*#__PURE__*/
      React.createElement("button", { id: "divide", value: "/", onClick: this.props.enterValue }, "/"), /*#__PURE__*/
      React.createElement("button", { id: "seven", value: "7", onClick: this.props.enterValue }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", value: "8", onClick: this.props.enterValue }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", value: "9", onClick: this.props.enterValue }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", value: "*", onClick: this.props.enterValue }, "x"), /*#__PURE__*/
      React.createElement("button", { id: "four", value: "4", onClick: this.props.enterValue }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", value: "5", onClick: this.props.enterValue }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", value: "6", onClick: this.props.enterValue }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", value: "-", onClick: this.props.enterValue }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "one", value: "1", onClick: this.props.enterValue }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", value: "2", onClick: this.props.enterValue }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", value: "3", onClick: this.props.enterValue }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "add", value: "+", onClick: this.props.enterValue }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "zero", value: "0", onClick: this.props.enterValue }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", value: ".", onClick: this.props.enterValue }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", className: "largeButton", value: "=", onClick: this.props.calculate }, "=")));


  }}


// Footer Component
const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "footer", className: "text-center" }, /*#__PURE__*/
    React.createElement("p", null, "By Crimsonedge98")));


};

// Application Component
class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Calculator, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById("application"));