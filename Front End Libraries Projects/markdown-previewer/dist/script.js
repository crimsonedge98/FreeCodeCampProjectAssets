// Make sure that the Return button creates line breaks
marked.setOptions({
  breaks: true });


const Header = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "header", className: "text-center" }, /*#__PURE__*/
    React.createElement("h1", null, "Markdown Previewer")));


};

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-file" }), " ", props.name));


};

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor", value: props.container, onChange: props.onChange, name: "Editor" }));

};

const Preview = props => {
  return /*#__PURE__*/ (
    /** Use Marked Library **/
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.container) } }));

};

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "footer", className: "text-center" }, /*#__PURE__*/
    React.createElement("p", null, "This is made by Crimsonedge98")));


};

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      container: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "wrapper col-lg-6" }, /*#__PURE__*/
      React.createElement(Toolbar, { name: "Editor" }), /*#__PURE__*/
      React.createElement(Editor, { container: this.state.container, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "wrapper col-lg-6" }, /*#__PURE__*/
      React.createElement(Toolbar, { name: "Preview" }), /*#__PURE__*/
      React.createElement(Preview, { container: this.state.container })))), /*#__PURE__*/



      React.createElement(Footer, null)));


  }}


const placeholder = `# Heading
## Sub-heading
### Another sub-heading!
Code within two backticks \`<div></div>\`

\`\`\`
// Multi-line Code:

function example(parameter1, parameter2) {
  // Some code here!
}
\`\`\`

This **text** is bold!
This _text_ is italic!
This **_text_** is both bold and italic!

Here is a [link](freecodecamp.com) to freecodecamp
> How to use block quotes?

Creating tables:

First Header | Second Header | Third Header
------------ | ------------- | ------------
One content  | Another content | Another content
Another one  | Another one   | Last one

Lists can be done!
Unordered List:
- First
  - Second
    - Third
      - Fourth

Ordered List:
1. First
1. Second
1. Third
1. Fourth
1. Fifth

![Cat Picture](https://images.pexels.com/photos/5004611/pexels-photo-5004611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById("application"));