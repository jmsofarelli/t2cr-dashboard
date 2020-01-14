import './Headline.css'
import React from 'react'
import PropTypes from 'prop-types'
import { BallPulse } from 'react-pure-loaders'

class Headline extends React.Component {
  static propTypes = { text: PropTypes.string }

  static defaultProps = { text: null }

  renderMessage() {
    const { text } = this.props
    return !text ? (
      <div className="DataChart__Spinner">
        <BallPulse loading />
      </div>
    ) : (
      <p>{text}</p>
    )
  }

  render() {
    return <div className="Headline">{this.renderMessage()}</div>
  }
}

export default Headline
