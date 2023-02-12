import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {setAbouts(data);})
    }, []);

  return (
    <>
      <h2 className='head-text'>About <span>Me</span></h2>
      <p className='p-text'>I am pursuing a Bachelor's Degree in Computer Science at Simon Fraser University, currently in my 2nd year. 
                            My passion for Software Development is unique and is showcased through several projects I have comepleted,
                            which are in the section right below. I am proficient in several languages such as C++, Java, Python, and JavaScript.
                            More importantly, I am always willing to learn new technologies and have the ability to do so, quickly and efficiently.
                            </p>

        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.3, type: 'tween'}}
              className='app__profile-item'
              key={about.title + index}>

                <h1 style={{textAlign: 'center', color: 'var(--secondary-color)', fontSize: '54px'}}>{about.bigTxt}</h1>
                {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
                <h2 className='bold-text' style={{margintop: 20}}>{about.title}</h2>
            </motion.div>
          ))}
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about', 'app__whitebg'
);
