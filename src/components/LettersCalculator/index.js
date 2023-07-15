import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  updateLetterCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="lc-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="lc-img"
        />
        <div className="lc-txt-con">
          <h1 className="lc-heading">Calculate the letters you enter</h1>
          <div>
            <label htmlFor="input" className="lc-label-txt">
              Enter the phrase
            </label>
            <br />

            <input
              id="input"
              type="text"
              onChange={this.updateLetterCount}
              className="lc-input"
              placeholder="Enter the phrase"
            />
          </div>
          <p className="lc-counter">No.of letters: {lettersCount}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
