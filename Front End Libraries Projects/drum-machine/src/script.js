// A collection of sound objects
const sounds = [
  {
    name: "Piano 1",
    keyTrigger: "Q",
    keyCode: 81,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2726[kb]061_melancholy-epiano-chords.wav.mp3",
    color: "red"
  },
  {
    name: "Piano 2",
    keyTrigger: "W",
    keyCode: 87,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2240[kb]074_plaintive-epiano-chops.wav.mp3",
    color: "orange"
  },
  {
    name: "Piano 3",
    keyTrigger: "E",
    keyCode: 69,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/1037[kb]080_piano-accordion-metronome-melody.wav.mp3",
    color: "yellow"
  },
  {
    name: "Piano 4",
    keyTrigger: "A",
    keyCode: 65,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/1033[kb]080_simple-sevenths-epiano.wav.mp3",
    color: "green"
  },
  {
    name: "Piano 5",
    keyTrigger: "S",
    keyCode: 83,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2078[kb]080_stutter-piano-bits.wav.mp3",
    color: "blue"
  },
  {
    name: "Piano 6",
    keyTrigger: "D",
    keyCode: 68,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/1002[kb]165_piano-wind-melody-dmin.wav.mp3",
    color: "indigo"
  },
  {
    name: "Piano 7",
    keyTrigger: "Z",
    keyCode: 90,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/481[kb]087_time-passing-by-piano-melody.wav.mp3",
    color: "violet"
  },
  {
    name: "Piano 8",
    keyTrigger: "X",
    keyCode: 88,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/919[kb]090_hard-high-piano-arpeggio.wav.mp3",
    color: "black"
  },
  {
    name: "Piano 9",
    keyTrigger: "C",
    keyCode: 67,
    src: "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/5418[kb]093_cut-up-gorgeous-piano-muramasa.wav.mp3",
    color: "pink"
  }
];


// Header Component
const Header = props => {
  return (
    <div id="header" className="text-center">
      <h1>Drum Machine</h1>
    </div>
  );
}

// DrumMachine Class Component
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
      currentDrumPadBank: sounds
    };
    
    this.displayName = this.displayName.bind(this);
  }
  
  displayName(name) {
    this.setState({
      display: name,
    });
  }
  
  render() {
    return (
      <div className="container">
        <div id="drum-machine">
          <div id="display"><p>{this.state.display}</p></div>
          <DrumPadBank currentDrumPadBank={this.state.currentDrumPadBank} displayName={this.displayName} />
        </div>
      </div>
    );
  }
}

// DrumPadBank Class Component
class DrumPadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let padBank = this.props.currentDrumPadBank.map((drumObj, i, drumPadBankOne) => {
      return (
        <div className='container'>
          <DrumPad clip={drumPadBankOne[i].src} name={drumPadBankOne[i].name} keyCode={drumPadBankOne[i].keyCode} keyTrigger={drumPadBankOne[i].keyTrigger} color={drumPadBankOne[i].color} displayName={this.props.displayName} />
        </div>
      ); 
    });
    return <div id='drumPadBank'>{padBank}</div>;
  }
}

// Default DrumPad Button Style
const style = {
  backgroundColor: "blue",
  marginTop: 5,
  boxShadow: '3px 3px 5px #000000'
}

// Active DrumPad Button Style
const activeStyle = {
  backgroundColor: "#9999FF",
  marginTop: 5,
  boxShadow: '3px 3px 5px #000000'
}

// DrumPad Class Component
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: style
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activateButtonStyle = this.activateButtonStyle.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  
  activateButtonStyle() {
    if (this.state.buttonStyle.backgroundColor === "#9999FF") {
      this.setState({
        buttonStyle: style
      });
    } else {
      this.setState({
        buttonStyle: activeStyle
      });
    }
  }
  
  playSound() {    
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    this.activateButtonStyle();
    setTimeout(() => sound.pause(), 1000);
    sound.currentTime = 0;
    setTimeout(() => this.activateButtonStyle(), 100);
    this.props.displayName(this.props.name);
  }
  
  render() {
    return (
      <div className='drum-pad' id={this.props.name} onClick={this.playSound} style={this.state.buttonStyle}>
        <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}/>
        {this.props.keyTrigger}
      </div>
    );
  }
}

// Footer Component
const Footer = props => {
  return (
    <div id="footer" className="text-center">
      <p>By Crimsonedge98</p>
    </div>
  );
}

class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <DrumMachine />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("application"));