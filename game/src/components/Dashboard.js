import React, { Component } from "react";
import Display from "./Display";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      strikeCount: 0,
      ballCount: 0
    };
  }

  strike = e => {
    e.preventDefault();
    let { ballCount, strikeCount } = this.state;
    if (ballCount === 4 || strikeCount === 3) {
      this.setState({
        strikeCount: 0
      });
    } else {
      this.setState({
        strikeCount: strikeCount + 1
      });
    }
  };

  ball = e => {
    e.preventDefault();
    let { ballCount, strikeCount } = this.state;
    if (ballCount === 4 || strikeCount === 3) {
      this.setState({
        ballCount: 0
      });
    } else {
      this.setState({
        ballCount: ballCount + 1
      });
    }
  };

  hit = e => {
    e.preventDefault();
    this.setState({
      strikeCount: 0,
      ballCount: 0
    });
  };

  //a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

  foul = e => {
    e.preventDefault();
    let { strikeCount } = this.state;
    if (strikeCount === 0) {
      this.setState({
        strikeCount: strikeCount + 1
      });
    } else if (strikeCount === 1) {
      this.setState({
        strikeCount: strikeCount + 2
      });
    } else {
      this.setState({
        strikeCount: strikeCount
      });
    }
  };

  render() {
    return (
      <div data-testid="dashboard">
        <Display
          strikeCount={this.state.strikeCount}
          ballCount={this.state.ballCount}
        />
        <button data-testid="strike-button" onClick={this.strike}>
          Strike
        </button>
        <button data-testid="ball-button" onClick={this.ball}>
          Ball
        </button>
        <button data-testid="hit-button" onClick={this.hit}>
          Hit
        </button>
        <button data-testid="foul-button" onClick={this.foul}>
          Foul
        </button>
      </div>
    );
  }
}
