import './InfoPanel.css'
import React from 'react'
import PropTypes from 'prop-types'
import { BallPulse } from 'react-pure-loaders'

class InfoPanel extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    imgText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string.isRequired
  }

  static defaultProps = {
    value: 0
  }

  renderImage() {
    const { img, imgText, type } = this.props
    return (
      <div className={`InfoPanel__Image InfoPanel__Image--${type}`}>
        <img
          src={img}
          alt={imgText}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    )
  }

  renderValue() {
    const { value } = this.props
    return value !== null ? <p>{value}</p> : <BallPulse color="#FFF" loading />
  }

  render() {
    const { type, label } = this.props
    return (
      <div className={`InfoPanel InfoPanel--${type}`}>
        {this.renderImage()}
        <div className={`InfoPanel__Data InfoPanel__Data--${type}`}>
          <div
            className={`InfoPanel__Data__Value InfoPanel__Data__Value--${type}`}
          >
            {this.renderValue()}
          </div>
          <div
            className={`InfoPanel__Data__Label InfoPanel__Data__Label--${type}`}
          >
            {label}
          </div>
        </div>
      </div>
    )
  }
}

export default InfoPanel
