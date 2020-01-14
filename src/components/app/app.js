import './App.css'
import './BurgerMenu.css'
import Web3 from 'web3'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'
import { slide as ReactBurgerMenu } from 'react-burger-menu'
import SideBar from '../sidebar/sidebar'
import Logo from '../sidebar/logo'
import HomePage from '../pages/home'
import TokensPage from '../pages/tokens'
import BadgesPage from '../pages/badges'
import Footer from '../footer/footer'
import bannerImg from '../../assets/images/banner.png'
import {
  fetchDepositData,
  fetchEthPrice,
  fetchTokensCountByStatus,
  fetchBadgesCountByStatus,
  fetchCrowdfundingTokens
} from '../../actions'

class App extends React.Component {
  state = { error: false, menuOpen: false }

  static propTypes = {
    fetchDepositData: PropTypes.func.isRequired,
    fetchEthPrice: PropTypes.func.isRequired,
    fetchTokensCountByStatus: PropTypes.func.isRequired,
    fetchBadgesCountByStatus: PropTypes.func.isRequired,
    fetchCrowdfundingTokens: PropTypes.func.isRequired
  }

  loadData = async () => {
    const { network } = this.state
    const {
      fetchDepositData,
      fetchEthPrice,
      fetchTokensCountByStatus,
      fetchBadgesCountByStatus,
      fetchCrowdfundingTokens
    } = this.props

    fetchDepositData(network)
    fetchEthPrice()
    fetchTokensCountByStatus(network)
    fetchBadgesCountByStatus(network)
    fetchCrowdfundingTokens(network)
  }

  componentWillMount = async () => {
    let network = 'main'
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider)
      network = await web3.eth.net.getNetworkType()
    }
    if (network !== 'main' && network !== 'kovan') {
      this.setState({ error: true })
      return
    }
    this.setState({ network })
    this.loadData()
    setTimeout(this.loadData, 30000)
  }

  handleStateChange(state) {
    const { isOpen } = state
    this.setState({ menuOpen: isOpen })
  }

  renderError() {
    return (
      <div className="App__ErrorBox">
        <p>ERROR!</p>
        <br />
        <p>Dashboard is only available in Ethereum mainnet or Kovan testnet</p>
        <p>
          Please connect to one of these networks with your MetaMask browser
          extension
        </p>
      </div>
    )
  }

  render() {
    const { error, menuOpen } = this.state
    if (error) return this.renderError()

    return (
      <div className="App">
        <HashRouter>
          <div className="App__Row" id="outer-container">
            <ReactBurgerMenu
              outerContainerId="outer-container"
              pageWrapId="page-wrap"
              width={307}
              isOpen={menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <Logo />
              <br />
              <NavLink
                onClick={() => this.setState({ menuOpen: false })}
                className="NavBar__NavItem"
                activeClassName="NavBar__NavItem--active"
                to="/"
                exact
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => this.setState({ menuOpen: false })}
                className="NavBar__NavItem"
                activeClassName="NavBar__NavItem--active"
                to="/tokens"
              >
                Tokens
              </NavLink>
              <NavLink
                onClick={() => this.setState({ menuOpen: false })}
                className="NavBar__NavItem"
                activeClassName="NavBar__NavItem--active"
                to="/badges"
              >
                Badges
              </NavLink>
              <div className="SideBar__Banner">
                <a href="https://tokens.kleros.io/">
                  <img src={bannerImg} alt="Banner" />
                </a>
              </div>
            </ReactBurgerMenu>
            <SideBar />
            <div id="page-wrap">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tokens" component={TokensPage} />
                <Route path="/badges" component={BadgesPage} />
              </Switch>
            </div>
          </div>
          <Footer />
        </HashRouter>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchDepositData,
  fetchEthPrice,
  fetchTokensCountByStatus,
  fetchBadgesCountByStatus,
  fetchCrowdfundingTokens
}

export default connect(null, mapDispatchToProps)(App)
