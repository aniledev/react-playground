import React from "react";
import "./Tooltip.css";

// function component
// the function for the tooltip component
// props is a parameter
function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content" style={{ color: props.color }}>
        {props.children}
      </span>
      <div className="Tooltip-message">{props.message}</div>
    </span>
  );
}

// class component
// creating a tooltip class
// classes are simliar to objects in that they contain methods; render is the only required method for React class components
// props isnt a parameter anymore and we have to access it using this.props
class TooltipClass extends React.Component {
  static defaultProps = {
    color: "#01A800", // green
  };
  render() {
    console.log("using a class component");
    console.log(this.props);
    return (
      <span className="Tooltip">
        <span className="Tooltip-content" style={{ color: this.props.color }}>
          {this.props.children}
        </span>
        <div className="Tooltip-message">{this.props.message}</div>
      </span>
    );
  }
}

export default TooltipClass;
