import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { diagram, roadmap, testnet, navbarLogo, token } from '../../assets'

const Home = () => {
  return (
    <div className="home">
      <div className="home__top-vectors">
        <div className="home__bottom-ball"></div>
        <div className="home__top-flash"></div>
        <div className="home__top-stars"></div>
      </div>
      <div className="home__hero">
        <div className="home__hero-left">
          <div className='navbar'>
            <div className="navbar__navbar-logo">
              <img src={navbarLogo} alt="" />
            </div>
          </div>
          <div className="home__hero-header">
            <span className="home__hero-headerText">
              Welcome to Nova
            </span>
            <div className="hero-text-border"></div>
          </div>
          <h1 className="home__hero-message">
            Unlock the <span className="gradient">Future</span> of <br />
            <span className="gradient">Financial Staking with </span> <br />
            Nova
          </h1>
          <Link to="/" className='home__hero-link'>Stake Now</Link>
          <div className="hero__bottom-vectors">
            <div className="hero__full-ball"></div>
            <div className="hero__bottom-flash"></div>
            <div className="hero__bottom-second-flash"></div>
            <div className="hero__bottom-big-star"></div>
            <div className="hero__bottom-small-star"></div>
            <div className="hero__bottom-planet"></div>
          </div>
        </div>
        <div className="home__hero-right">
        </div>
      </div>
      <div className="testnet__header-container">
        <div className="testnet__line"></div>
        <div className="home__testnet-header">
          <h3 className="home__testnet-headerText">Testnet Statistics</h3>
        </div>
        <div className="testnet__line"></div>
      </div>
      <div className="home__testnet">
        <div className="home__testnet-statistics">
          {/* <div className="home__testnet-statistics-image">
          <img src={testnet} alt="" />
        </div> */}



          <div className="home__testnet-statistic">
            <span className="testnet-total">$7,486,600</span>
            <span className="testnet-category">Total Value <br />
              Locked</span>
          </div>
          <div className="home__testnet-statistic">
            <span className="testnet-total">3,257</span>
            <span className="testnet-category">rTokens in <br />
              circulation</span>
          </div>
          <div className="home__testnet-statistic">
            <span className="testnet-total">2500+</span>
            <span className="testnet-category"> Unique contract
              interactions</span>
          </div>
          <div className="home__testnet-statistic">
            <span className="testnet-total">750+</span>
            <span className="testnet-category"> Users</span>
          </div>
        </div>

      </div>
      <div className="testnet__bottom-line"></div>
      <div className="home__about">
        <span className="home__about-badge">About Nova</span>
        <p className="home__about-paragraph">Nova Finance is a cutting-edge financial staking agency that empowers investors to achieve remarkable returns. Our innovative approach, powered by the EigenLayer protocol, ensures a projected yield of over 10% APY across all modules, making your investment journey truly rewarding.</p>
        <div className="about-vectors">
          <div className="about__small-star"></div>
          <div className="about__big-star"></div>
        </div>
      </div>
      <div className="home__empowering">
        <div className="home__empowering-header">
          <h2>Empowering Decentralized Decision-Making</h2>
          <p>At the core of Nova Finance is our DAO (Decentralized Autonomous Organization), the driving force behind our decision-making process. Why is a DAO essential for Nova Finance?</p>
        </div>
        <div className="home__empowering-diagram">
          <div className="home__empowering-diagrams-image">
            <div className="home__diagrams-line"></div>
            <img src={diagram} alt="" />
          </div>
          <div className="home__empowering-diagrams">
            <div className="home__empowering-diagram-section">
              <h3>Ensures the project's commitment to decentralization</h3>
            </div>
            <div className="home__empowering-diagram-section">
              <h3>Superior decision-making compared to a single entity</h3>
            </div>
            <div className="home__empowering-diagram-section">
              <h3>Upgradability to adapt to changes in EigenLayer protocol</h3>
            </div>
            <div className="home__empowering-diagram-section">
              <h3>Promotes long-term efficiency and stability</h3>
            </div>

          </div>
        </div>
        <div className="about-vectors">
          <div className="empowering__small-ball"></div>
          <div className="empowering__full-ball"></div>
        </div>
      </div>
      <div className="home__costs">
        <h2>Zero Costs, Maximum Gains</h2>
        <p>Experience the freedom of capital re-utilization with zero minting and redeeming fees. Nova Finance is committed to providing a seamless and cost-effective staking experience for our users.</p>
      </div>
      <div className="home__roadmap">
        <div className="home__roadmap-header">
          <h3>Our Roadmap:</h3>
        </div>
        <div className='home__roadmap-container'>
          <div className="home__roadmap-container-top">
            <h5 className="home__roadmap-container-bottom-title">R&D nLRP</h5>
            <h5 className="home__roadmap-container-bottom-title-two" style={{ display: "none" }}>Public <br />
              Testnet</h5>
            <h5 className="home__roadmap-container-bottom-title">Mainnet</h5>
          </div>
          <div className="home__roadmap-container-image">
            <img src={roadmap} alt="" />
          </div>
          <div className="home__roadmap-container-bottom">
            <h5 className="home__roadmap-container-bottom-title">Eth Foundation <br />
              Grant</h5>
            <h5 className="home__roadmap-container-bottom-title-two">Public <br />
              Testnet</h5>
            <h5 className="home__roadmap-container-bottom-title">Puffer AVSs</h5>
          </div>
          <div className="home__roadmap-vectors">
            <div className="home__roadmap-flash-one"></div>
            <div className="home__roadmap-flash-four"></div>
            <div className="home__roadmap-flash-three"></div>
            <div className="home__roadmap-flash-two"></div>
            <div className="home__roadmap-ball-one"></div>
            <div className="home__roadmap-ball-two"></div>
            <div className="home__roadmap-ball-three"></div>
            <div className="home__roadmap-planet"></div>
            <div className="home__roadmap-star"></div>
          </div>
          <div className="testnet__bottom-line"></div>
        </div>
      </div>

      <div className="home__advantages-container">
        <div className="home__advantages">
          <img src={token} alt="" />
        </div>
        <div className="advantages__vectors">
          <div className="advantages__ball"></div>
          <div className="advantages__flash-one"></div>
          <div className="advantages__flash-two"></div>
          <div className="advantages__small-star"></div>
          <div className="advantages__big-star"></div>
        </div>
      </div>
      <div className="home__unravel">
        <div className="home__unravel-header">
          <h3>Unraveling RSTK</h3>
          <p>Discover the power of RSTK, the backbone of Nova Finance's staking platform. Be a pioneer by participating in the first modular liquid restaking protocol powered by EigenLayer.</p>
          <Link to="/explore" className='home__unravel-link'>Explore More</Link>
        </div>
      </div>
    </div>
  )
}

export default Home