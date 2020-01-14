import './HomePage.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CrowdfundingTokens from '../common/crowdfunding-tokens'
import DataChart from '../common/data-chart'
import InfoPanelWrapper from '../common/info-panel-wrapper'
import InfoPanel from '../common/info-panel'
import TwitterFeed from '../common/twitter-feed'
import etherImg from '../../assets/images/ether-image.svg'
import currencyImg from '../../assets/images/currency-image.svg'

const HomePage = ({ totalEth, totalUsd, chartDataset }) => (
  <div className="App__Page HomePage">
    <InfoPanelWrapper>
      <InfoPanel
        type="big"
        img={etherImg}
        imgText="ETH"
        label="TOTAL ETH deposited"
        value={totalEth}
      />
      <InfoPanel
        type="big"
        img={currencyImg}
        imgText="USD"
        label="TOTAL USD value"
        value={totalUsd}
      />
    </InfoPanelWrapper>

    <DataChart dataset={chartDataset} />

    <div className="HomePage__Row">
      <div className="HomePage__Crowdfunding">
        <CrowdfundingTokens />
      </div>
      <div className="HomePage__TwitterFeed">
        <TwitterFeed />
      </div>
    </div>
  </div>
)

HomePage.propTypes = {
  totalEth: PropTypes.string,
  totalUsd: PropTypes.string,
  chartDataset: PropTypes.shape({}) // TODO: Add dataset shape proptype.
}

HomePage.defaultProps = {
  totalEth: null,
  totalUsd: null,
  chartDataset: null
}

const mapStateToProps = state => {
  let chartDataset = null
  let totalEth = null
  let totalUsd = null

  const { depositData, priceEth } = state

  if (depositData !== null && priceEth !== null) {
    chartDataset = depositData.chartDataset
    totalEth = depositData.tokensTotalEth + depositData.badgesTotalEth
    totalEth = parseFloat(Math.round(totalEth * 100) / 100).toFixed(2)
    totalUsd = totalEth * priceEth
    totalUsd = parseFloat(Math.round(totalUsd * 100) / 100).toFixed(2)
  }

  return { chartDataset, totalEth, totalUsd }
}

export default connect(mapStateToProps)(HomePage)
