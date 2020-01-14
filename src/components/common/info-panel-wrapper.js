import './InfoPanelWrapper.css'
import React from 'react'
import PropTypes from 'prop-types'

const InfoPanelWrapper = ({ children }) => (
  <div className="InfoPanelWrapper">{children}</div>
)

InfoPanelWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default InfoPanelWrapper
