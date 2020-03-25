import React, { Component } from "react";

export default WrappedComponent =>
  class RandomColour extends Component {

    state = {
      randomColor: "#D3D3D3"
    };

    generateRandomRGBValue = () => Math.floor(Math.random() * 256);

    newRGBColour = () =>
      `rgba(
      ${ this.generateRandomRGBValue() },
      ${ this.generateRandomRGBValue() },
      ${ this.generateRandomRGBValue() }, 
      0.2)`;

    colourChange = () => this.setState({ randomColor: this.newRGBColour() });

    render() {
      return (
        <div
          className={ this.props.classNames }
          style={{
            backgroundColor: this.state.randomColor
          }}
          onMouseEnter={ this.colourChange }
        >
          <WrappedComponent { ...this.props } />
        </div>
      );
    }
  };
