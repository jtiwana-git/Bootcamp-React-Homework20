import React from 'react';
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin, SiSlack} from 'react-icons/si'
import {MdAlternateEmail} from 'react-icons/md'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <footer id='footer'>
   
   
    <div className='footer__socials'>
    <a href='https://github.com/jtiwana-git'><AiFillGithub className='footer__socials-icon'/></a>
    <a href='https://www.linkedin.com/in/jagdeep-tiwana-02954a226/'><SiLinkedin className='footer__socials-icon'/></a>
    <a href='https://slack.com/app_redirect?app=U02P8MD2SHE'><SiSlack className='footer__socials-icon'/></a>
    <a href='mailto:jtiwana@hotmail.com' target='_blank' rel="noreferrer"><MdAlternateEmail className='footer__socials-icon'/></a>
    
    </div>
   </footer>
  );
}

export default NavTabs;
