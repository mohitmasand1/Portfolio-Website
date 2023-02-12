import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div 
        whileInView={{x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 1}}
        className='app__header-info'>
        
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span></span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Mohit Masand</h1>
              <div className='tag-cmp app__flex'>
                <p className='p-text'>Computer Science Student</p>
              </div>
            </div>
          </div>

          <div className='app__header-button'>
            <a href={images.resume} rel="noreferrer" target="_blank">View CV</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{opacity: [0,1]}}
        transition={{duration: 1, delayChildren: 0.5}}
        className='app__header-img'>

        <img src={images.profile} alt="profile_bg" />
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');
