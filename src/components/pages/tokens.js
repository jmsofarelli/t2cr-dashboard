import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Headline from '../common/headline'
import InfoPanelWrapper from '../common/info-panel-wrapper'
import InfoPanel from '../common/info-panel'
import etherImg from '../../assets/images/ether-image.svg'
import currencyImg from '../../assets/images/currency-image.svg'
import tokenAcceptedImg from '../../assets/images/token-accepted-icon.svg'
import tokenRejectedImg from '../../assets/images/token-rejected-icon.svg'
import tokenCrowdfundingImg from '../../assets/images/token-crowdfunding-icon.svg'
import tokenPendingImg from '../../assets/images/token-pending-icon.svg'
import tokenChallengedImg from '../../assets/images/token-challenged-icon.svg'
import tokenAppealedImg from '../../assets/images/token-appealed-icon.svg'

const TokensPage = ({
  tokensCountByStatus,
  tokensTotalEth,
  tokensTotalUsd
}) => {
  const {
    accepted,
    rejected,
    crowdfunding,
    pending,
    challenged,
    appealed,
    total
  } = tokensCountByStatus

  return (
    <div className="App__Page">
      <InfoPanelWrapper>
        <InfoPanel
          type="big"
          img={etherImg}
          imgText="ETH"
          label="TOTAL ETH deposited"
          value={tokensTotalEth}
        />
        <InfoPanel
          type="big"
          img={currencyImg}
          imgText="USD"
          label="TOTAL USD value"
          value={tokensTotalUsd}
        />
      </InfoPanelWrapper>

      <Headline text={total != null ? `${total} Token Submissions` : null} />

      <InfoPanelWrapper>
        <InfoPanel
          type="token"
          img={tokenAcceptedImg}
          imgText="Accepted"
          label="Accepted"
          value={accepted}
        />
        <InfoPanel
          type="token"
          img={tokenRejectedImg}
          imgText="Rejected"
          label="Rejected"
          value={rejected}
        />
        <InfoPanel
          type="token"
          img={tokenCrowdfundingImg}
          imgText="Crowdfunding"
          label="Crowdfunding"
          value={crowdfunding}
        />
        <InfoPanel
          type="token"
          img={tokenPendingImg}
          imgText="Pending"
          label="Pending"
          value={pending}
        />
        <InfoPanel
          type="token"
          img={tokenChallengedImg}
          imgText="Challenged"
          label="Challenged"
          value={challenged}
        />
        <InfoPanel
          type="token"
          img={tokenAppealedImg}
          imgText="Appealed"
          label="Appealed"
          value={appealed}
        />
      </InfoPanelWrapper>
    </div>
  )
}

TokensPage.propTypes = {
  tokensCountByStatus: PropTypes.shape({
    accepted: PropTypes.number,
    rejected: PropTypes.number,
    crowdfunding: PropTypes.number,
    pending: PropTypes.number,
    challenged: PropTypes.number,
    appealed: PropTypes.number,
    total: PropTypes.number
  }),
  tokensTotalEth: PropTypes.string,
  tokensTotalUsd: PropTypes.string
}

TokensPage.defaultProps = {
  tokensCountByStatus: null,
  tokensTotalEth: null,
  tokensTotalUsd: null
}

const mapStateToProps = state => {
  let tokensTotalEth = null
  let tokensTotalUsd = null

  const { tokensCountByStatus, depositData, priceEth } = state

  if (depositData !== null && priceEth !== null) {
    tokensTotalUsd = parseFloat(
      Math.round(depositData.tokensTotalEth * priceEth * 100) / 100
    ).toFixed(2)
    tokensTotalEth = parseFloat(
      Math.round(depositData.tokensTotalEth * 100) / 100
    ).toFixed(2)
  }

  return { tokensCountByStatus, tokensTotalEth, tokensTotalUsd }
}

export default connect(mapStateToProps)(TokensPage)
