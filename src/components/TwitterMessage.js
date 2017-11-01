import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      availableChars: props.maxChars
    };
  }

  handleOnChange(ev) {
    this.setState({
      text: ev.target.value,
      availableChars: (this.props.maxChars - ev.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange.bind(this)}/>
        <div>Number of characters left available: {this.state.availableChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
