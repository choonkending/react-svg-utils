import React, { Component } from 'react';

class AnimateStroke extends Component {
  constructor(props) {
    super(props);
    this.state = { length: 0 };
    this.getLength = this.getLength.bind(this);
  }

  getLength(node) {
    this.setState({
      length: node.getTotalLength()
    });
  }

  render() {
    const { length } = this.state;
    return React.cloneElement(
      this.props.children,
      {
        refCallback: this.getLength,
        strokeDashoffset: length || 0,
        strokeDasharray: length || 0,
        className: 'animate-stroke'
      }
    );
  }
}

export default AnimateStroke;

