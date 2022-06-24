import React from 'react'
import SitePortfolioFilter from '../SitePortfolioFilter/SitePortfolioFilter'

const SitePortfolio = () => {
  return (
    <div className="site-portfolio">
        <h2>Portfolio</h2>
        <SitePortfolioFilter />
        <div className="portfolio-grid"></div>
    </div>
  )
}

export default SitePortfolio