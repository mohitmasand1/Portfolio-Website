import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a target="_blank" rel="noreferrer" href="https://ca.linkedin.com/in/mohitmasand1">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/mohitmasand1">
          <AiFillGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
