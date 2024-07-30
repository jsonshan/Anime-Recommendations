import React from 'react'
import "../styles/Footer.css"
function Footer() {
  return (
    <>
        <div className="gradient-background">
          <div className="footer-sections first-child">
            <h4>Navigation</h4>
            <ul>
              <span>Browse Popular</span>
              <span>Browse Simulcasts</span>
              <span>Release Calendar</span>
              <span>News</span>
              <span>Store</span>
              <span>Games</span>
            </ul>
          </div>
          <div className="footer-sections">
            <h4>Connect With Us</h4>
            <ul>
              <span>Youtube</span>
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
              <span>TikTok</span>
            </ul>
          </div>
          <div className="footer-sections">
            <h4>Crunchyroll</h4>
            <ul>
              <span>Start a Free Trial</span>
              <span>About</span>
              <span>Help Center</span>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>AdChoices</span>
              <span>Do Not Sell or Share My Personal Information</span>
              <span>Cookie Consent Tool</span>
              <span>Press Inquiries</span>
              <span>Get the Apps</span>
              <span>Redeem Gift Card</span>
              <span>Jobs</span>
            </ul>
          </div>
          <div className="footer-sections last-child">
            <h4>Account</h4>
            <ul>
              <span>Create Account</span>
              <span>Log In</span>
            
            </ul>
          </div>
        </div>
        {/* <hr></hr> */}
      
    </>
  )
}

export default Footer