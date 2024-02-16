import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_outer_contaainer'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          < FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>             

          </div>
          <div className='footer_data'>
            <div>
              <ul>
              <li>Audio Descriptio</li>
              <li>Invester Relation</li>
              <li>Lega Notice</li>
              </ul>
            </div>
              <div>
                <ul>
                  <li>Help center</li>
                  <li>Jobs</li>
                  <li>Cookies Preference</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Gift Cards</li>
                  <li>Terms of Use</li>
                  <li>Corporate Information</li>
                </ul>
              </div>
              <div>
                <ul>
                  <LI>Media Center</LI>
                  <LI>Privacy</LI>
                  <LI>Contact Us</LI>
                </ul>
              </div>
              <div className='service_code'>
                <p>Service Code</p>
              </div>
              <div className='copy right'>
                &copy ,1997-2024 Netflic,inc

              </div>
          </div>

      </div>

    </div>
  )
}


export default Footer