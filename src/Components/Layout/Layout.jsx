import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ScrollToTopButton from '../ScrollToTopButton'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  )
}

export default Layout