import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      play: true,
    };

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  play() {
    if (this.state.play === true) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.props.onPlayStopTimer(true);
      this.setState({
        intervalId: intervalId,
      });
      this.state.play=false;
    }else{
      alert("pomodoro is already running")
    }
  }

  stop() {
    clearInterval(this.state.intervalId);
    this.props.onPlayStopTimer(false);
    this.state.play=true;
  }

  reset() {
    this.stop();
    this.props.onPlayStopTimer(false);
    this.props.resetTimer();
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
    this.state.play=true;
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  render() {
    return (
      <div className="timer_main_div">
        <div className="timer">
          <h4>{this.state.isSession === true ? "session" : "Break"}</h4>
          <div className="starting_time">
            <span>{this.props.timerMinute}</span>
            <span>:</span>
            <span>
              {this.state.timerSecond === 0
                ? "00"
                : this.state.timerSecond < 10
                ? "0" + this.state.timerSecond
                : this.state.timerSecond}
            </span>
          </div>
        </div>
        <div>
          <button onClick={this.play}>Start</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}
