// Make sure that the Return button creates line breaks
marked.setOptions({
  breaks: true
});

const Header = props => {
  return (
    <div id="header" className="text-center">
      <h1>Markdown Previewer</h1>
    </div>
  );
}

const Toolbar = props => {
  return (
    <div className="toolbar">
      <i className="fa fa-file" /> {props.name}
    </div>
  );
}

const Editor = props => {
  return (
    <textarea id="editor" value={props.container} onChange={props.onChange} name="Editor"/>
  );
}

const Preview = props => {
  return (
    /** Use Marked Library **/
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.container)}}></div>
  );
}

const Footer = props => {
  return (
    <div id="footer" className="text-center">
      <p>This is made by Crimsonedge98</p>
    </div>
  );
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      container: event.target.value
    });
  }
  
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="wrapper col-lg-6">
              <Toolbar name="Editor"/>
              <Editor container={this.state.container} onChange={this.handleChange}/>
            </div>
            <div className="wrapper col-lg-6">
              <Toolbar name="Preview"/>
              <Preview container={this.state.container}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

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

ReactDOM.render(<Application />, document.getElementById("application"));