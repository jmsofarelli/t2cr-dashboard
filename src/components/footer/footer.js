import './Footer.css'
import React from 'react'
import twitterIcon from '../../assets/images/twitter-icon.svg'
import githubIcon from '../../assets/images/github-icon.svg'
import otherIcon from '../../assets/images/other-icon.svg'
import linkedinIcon from '../../assets/images/linkedin-icon.svg'
import telegramIcon from '../../assets/images/telegram-icon.svg'

// TODO: Rename otherIcon to proper name and change the link
const Footer = () => (
  <div className="Footer">
    <div className="Footer__Column">
      <a href="https://kleros.io/">Find out more about Kleros</a>
    </div>
    <div className="Footer__Column">
      <p>Kleros T2CR Dashboard</p>
    </div>
    <div className="Footer__Column">
      <a href="https://twitter.com/kleros_io">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="https://github.com/kleros">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://twitter.com/kleros_io">
        <img src={otherIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/company/kleros/">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://t.me/kleros">
        <img src={telegramIcon} alt="Telegram" />
      </a>
    </div>
  </div>
)

export default Footer
