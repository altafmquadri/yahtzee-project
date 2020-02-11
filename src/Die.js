import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    nums: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  }
  render() {
    const { nums, val, idx, handleClick, locked, disabled, rolling } = this.props
    let classes = `Die fas fa-dice-${nums[val - 1]} fa-5x `
    if (locked) classes += 'Die-locked '
    if (rolling) classes += 'Die-rolling'

    return <i
      className={classes}
      onClick={() => handleClick(idx)}
      disabled={disabled}></i>
  }
}

export default Die;
