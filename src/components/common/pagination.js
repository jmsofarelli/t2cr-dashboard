import './Pagination.css'
import React from 'react'
import { connect } from 'react-redux'
import arrowLeftImg from '../../assets/images/arrow-left-small.svg'
import dotImg from '../../assets/images/dot.svg'
import arrowRightImg from '../../assets/images/arrow-right-small.svg'
import { nextCrowdfundingPage, previousCrowdfundingPage } from '../../actions'

class Pagination extends React.Component {
  renderPreviousButton() {
    const { crowdfundingPage, previousCrowdfundingPage } = this.props
    if (crowdfundingPage === 1) return

    return (
      <img
        className="Pagination--Arrow"
        src={arrowLeftImg}
        alt="Previous Page"
        onClick={() => previousCrowdfundingPage()}
      />
    )
  }

  renderDot() {
    const { crowdfundingTokens } = this.props
    if (crowdfundingTokens.length > 4) return <img src={dotImg} alt="" />
  }

  renderNextButton() {
    const {
      crowdfundingTokens,
      crowdfundingPage,
      nextCrowdfundingPage
    } = this.props
    const totalTokens = crowdfundingTokens.length
    if (totalTokens <= crowdfundingPage * 4) return

    return (
      <img
        className="Pagination--Arrow"
        src={arrowRightImg}
        alt="Next Page"
        onClick={() => nextCrowdfundingPage()}
      />
    )
  }

  render() {
    const { crowdfundingTokens } = this.props

    if (crowdfundingTokens.length === 0) return <div />

    return (
      <div className="Pagination">
        {this.renderPreviousButton()}
        {this.renderDot()}
        {this.renderNextButton()}
      </div>
    )
  }
}
const mapStateToProps = ({ crowdfundingPage, crowdfundingTokens }) => ({
  crowdfundingPage,
  crowdfundingTokens
})

export default connect(mapStateToProps, {
  nextCrowdfundingPage,
  previousCrowdfundingPage
})(Pagination)
