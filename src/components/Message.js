import React from "react";
import { connect } from "react-redux";

class Message extends React.Component {
  render() {
    return (
      <h3>
        <span className="badge amber darken-2">{this.props.displayMessage}</span>
      </h3>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    displayMessage : state.message,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
