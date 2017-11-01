import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleTextChange(ev) {
    this.setState(
      {text: ev.target.value}
    )
  }

  countWords(str) {
    let splitOnSpace = str.split(" ")
    let words = splitOnSpace.filter(el=>{
      return (el.length > 0)
    })
    return words.length
  }

  correctStructure() {
    let lineArr = this.state.text.split("\n")
    if(lineArr.length !== 3) {
      return "This poem is not written in the right structure!"
    }else if(this.countWords(lineArr[0]) !== 5) {
      return "This poem is not written in the right structure!"
    }else if(this.countWords(lineArr[1])  !== 3) {
      return "This poem is not written in the right structure!"
    }else if(this.countWords(lineArr[2])  !== 5) {
      return "This poem is not written in the right structure!"
    }else {
      return null
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleTextChange.bind(this)}
          value={this.state.text}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          {this.correctStructure()}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
