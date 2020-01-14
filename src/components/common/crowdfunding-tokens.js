import './CrowdfundingTokens.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BallPulse } from 'react-pure-loaders'
import InfoPanelWrapper from './info-panel-wrapper'
import InfoPanel from './info-panel'
import Pagination from './pagination'
import { IPFS_GATEWAY } from '../../config/ipfs'

const DashboardStatusLabel = {
  0: 'Accepted',
  1: 'Rejected',
  2: 'Pending',
  3: 'Challenged',
  4: 'Crowdfunding',
  5: 'Appealed'
}

class CrowdfundingTokens extends React.Component {
  static propTypes = {
    crowdfundingTokens: PropTypes.arrayOf(
      PropTypes.shape({
        tokenId: PropTypes.string,
        lastCrowdfunding: PropTypes.number,
        name: PropTypes.string,
        ticker: PropTypes.string,
        symbolMultihash: PropTypes.string,
        currentStatus: PropTypes.number.isRequired
      })
    ),
    crowdfundingPage: PropTypes.number.isRequired
  }

  static defaultProps = {
    crowdfundingTokens: null
  }

  renderCrowdfundingTokens() {
    const { crowdfundingTokens, crowdfundingPage } = this.props
    const totalTokens = crowdfundingTokens.length
    const startIndex = crowdfundingPage * 4 - 4
    const endIndex =
      totalTokens > crowdfundingPage * 4
        ? crowdfundingPage * 4 - 1
        : totalTokens - 1
    const tokens = []
    for (let i = startIndex; i <= endIndex; i++) {
      const token = crowdfundingTokens[i]
      tokens.push(
        <InfoPanel
          key={`${token.tokenId}-${token.lastCrowdfunding}`}
          type="small"
          img={`${IPFS_GATEWAY}${token.symbolMultihash}`}
          imgWidth="60"
          imgText={token.ticker}
          label={DashboardStatusLabel[token.currentStatus]}
          value={`${token.name} - ${token.ticker}`}
        />
      )
    }
    return tokens
  }

  render() {
    const { crowdfundingTokens } = this.props
    if (crowdfundingTokens == null)
      return (
        <div className="CrowdfundingTokens">
          <div className="CrowdfundingTokens__Spinner">
            Loading Crowdfunding Tokens
          </div>
          <div className="CrowdfundingTokens__Spinner">
            <BallPulse loading />
          </div>
        </div>
      )

    if (crowdfundingTokens.length === 0)
      return (
        <div className="CrowdfundingTokens">
          <div className="CrowdfundingTokens__Spinner">
            No Crowdfunding Tokens found!
          </div>
        </div>
      )

    return (
      <div>
        <InfoPanelWrapper>{this.renderCrowdfundingTokens()}</InfoPanelWrapper>
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = ({ crowdfundingPage, crowdfundingTokens }) => ({
  crowdfundingPage,
  crowdfundingTokens
})

export default connect(mapStateToProps)(CrowdfundingTokens)
