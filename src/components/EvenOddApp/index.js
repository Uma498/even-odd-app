// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  getValue = () => {
    this.setState(prevState => ({
      count: prevState.count + this.getRandomNumber(),
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-bg-container">
        <div className="even-odd-app-container">
          <h1 className="even-odd-app-heading">Count {count}</h1>
          <p className="even-odd-app-description">Count is {displayText}</p>
          <button type="button" className="button" onClick={this.getValue}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
