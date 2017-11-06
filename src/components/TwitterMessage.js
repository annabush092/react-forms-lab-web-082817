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
    let inputText = ev.target.value
    this.setState({
      text: inputText,
      availableChars: (this.props.maxChars - ev.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange.bind(this)} value={this.state.text}/>
        <div>Number of characters left available: {this.state.availableChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
