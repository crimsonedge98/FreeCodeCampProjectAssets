/*
This project is the 25 + 5 Clock (Pomodoro Timer).

The pomodoro technique is a time management practice used for breaking down work in intervals with short breaks in between. Traditionally, work intervals are at least 25 minutes, and break intervals are at least 5 minutes.

This project heavily utilizes React Native.
*/

/* Header Functional Component */
const Header = props => {
  return (
    <div id="header" className="text-center">
      <h1>25 + 5 Clock</h1>
    </div>
  );
}

/* Clock Class Component */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakPeriod: 5,
      sessionPeriod: 25,
      minute: 25,
      second: 0,
      timerType: "Session",
      timerState: "Initial",
      interval: null
    };
    
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.clockTimer = this.clockTimer.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  /* Decrement break period by 1 */
  breakDecrement() {
    if (this.state.breakPeriod > 1 && this.state.breakPeriod <= 60) {
      this.setState({
        breakPeriod: this.state.breakPeriod - 1,
      });
    }
    
    // Only updates the timer display when it is on "Break"
    if (this.state.timerType === "Break") {
      this.setState({
        minute: this.state.breakPeriod - 1
      });
    }
  }
  
  /* Increment break period by 1 */
  breakIncrement() {
    if (this.state.breakPeriod >= 1 && this.state.breakPeriod < 60) {
      this.setState({
        breakPeriod: this.state.breakPeriod + 1,
      });
    }
    
    // Only updates the timer display when it is on "Break"
    if (this.state.timerType === "Break") {
      this.setState({
        minute: this.state.breakPeriod + 1
      });
    }
  }
  
  /* Decrement session period by 1 */
  sessionDecrement() {
    if (this.state.sessionPeriod > 1 && this.state.sessionPeriod <= 60) {
      this.setState({
        sessionPeriod: this.state.sessionPeriod - 1,
      });
    }
    
    // Only updates the timer display when it is on "Session"
    if (this.state.timerType === "Session") {
      this.setState({
        minute: this.state.sessionPeriod - 1
      });
    }
  }
  
  /* Increment session period by 1 */
  sessionIncrement() {
    if (this.state.sessionPeriod >= 1 && this.state.sessionPeriod < 60) {
      this.setState({
        sessionPeriod: this.state.sessionPeriod + 1,
      });
    }
    
    // Only updates the timer display when it is on "Session"
    if (this.state.timerType === "Session") {
      this.setState({
        minute: this.state.sessionPeriod + 1
      });
    }
  }
  
  /* Timer running */
  clockTimer() {
    
    // Sets the timer's session and break periods
    if (this.state.timerState === "Initial" && this.state.timerType === "Session") {
      this.setState({
        minute: this.state.sessionPeriod,
        timerState: "Running"
      });
    } else if (this.state.timerState === "Initial" && this.state.timerType === "Break") {
      this.setState({
        minute: this.state.breakPeriod,
        timerState: "Running"
      });
    }
    
    // Timer runs or pauses
    if (this.state.interval === null) {
      let interval = setInterval(() => {
        if (this.state.second === 0) {
          if (this.state.minute != 0) {
            this.setState({
              minute: this.state.minute - 1,
              second: 59
            });
          } else if (this.state.minute === 0) {
            let alarm = document.getElementById("beep");
            alarm.play();
            setTimeout(() => alarm.pause(), 4000);
            alarm.currentTime = 0;
            if (this.state.timerType === "Session") {
              this.setState({
                minute: this.state.breakPeriod,
                timerType: "Break"
              });
            } else if (this.state.timerType === "Break") {
              this.setState({
                minute: this.state.sessionPeriod,
                timerType: "Session"
              });
            }
          }
        } else {
          this.setState({
            second: this.state.second - 1
          });
        }
      }, 1000);
      this.setState({
        interval: interval
      });
    } else {
      clearInterval(this.state.interval);
      this.setState({
        interval: null
      });
    }
  }
  
  /* Reset the timer */
  reset() {
    clearInterval(this.state.interval);
    let alarm = document.getElementById("beep");
    alarm.pause();
    alarm.currentTime = 0;
    this.setState({
      breakPeriod: 5,
      sessionPeriod: 25,
      minute: 25,
      second: 0,
      timerType: "Session",
      timerState: "Initial",
      interval: null
    });
  }
  
  render() {
    const timerMinute = this.state.minute >= 10 ? this.state.minute : "0" + this.state.minute;
    const timerSecond = this.state.second >= 10 ? this.state.second : "0" + this.state.second;
    
    return(
      <div id="clock" className="container text-center">
        <TimerControls breakDecrement={this.breakDecrement} breakIncrement={this.breakIncrement} sessionDecrement={this.sessionDecrement} sessionIncrement={this.sessionIncrement} breakPeriod={this.state.breakPeriod} sessionPeriod={this.state.sessionPeriod}/>
        <div>
          <p id="timer-label">{this.state.timerType}</p>
          <p id="time-left">{timerMinute + ":" + timerSecond}</p>
          <button id="start_stop" onClick={this.clockTimer}><i className="fa fa-play" /><i className="fa fa-pause" /></button>
          <button id="reset" onClick={this.reset}><i className="fa fa-redo" /></button>
        </div>
        <audio id="beep" src="https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/1002[kb]165_piano-wind-melody-dmin.wav.mp3" />
      </div>
    );
  }
}

/* TimerControls Class Component */
class TimerControls extends React.Component {
  render() {
    return (
      <div id="timer-controls">
        <div>
          <p id="break-label">Break</p>
          <button id="break-decrement" onClick={this.props.breakDecrement}><i className="fa fa-arrow-down fa-2x" /></button>
          <label id="break-length">{this.props.breakPeriod}</label>
          <button id="break-increment" onClick={this.props.breakIncrement}><i className="fa fa-arrow-up fa-2x" /></button>
        </div>
        <div>
          <p id="session-label">Session</p>
          <button id="session-decrement" onClick={this.props.sessionDecrement}><i className="fa fa-arrow-down fa-2x" /></button>
          <label id="session-length">{this.props.sessionPeriod}</label>
          <button id="session-increment" onClick={this.props.sessionIncrement}><i className="fa fa-arrow-up fa-2x" /></button>
        </div>
      </div>
    );
  }
}

/* Footer Functional Component */
const Footer = props => {
  return (
    <div id="footer" className="text-center">
      <p>By Crimsonedge98</p>
    </div>
  );
}

/* Application Class Component */
class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <Clock />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("application"));