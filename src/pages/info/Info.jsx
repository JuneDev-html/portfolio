/* eslint-disable react/prop-types */
import '../../styles/info.scss';
import arrow from '../../assets/arrow.svg';
import { motion } from 'framer-motion';

const Info = ({ darkMode }) => {
  return (
    <motion.div
      className='info'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='info-container'>
        <section className='social'>
          <a href='#' className='social-link'>
            <p>TikTok</p>
            <img
              src={arrow}
              alt='TikTok link'
              className={darkMode ? 'link-arrow active' : 'link-arrow'}
            />
          </a>
          <a href='#' className='social-link'>
            <p>Youtube</p>
            <img
              src={arrow}
              alt='Youtube link'
              className={darkMode ? 'link-arrow active' : 'link-arrow'}
            />
          </a>
          <a href='#' className='social-link'>
            <p>Github</p>
            <img
              src={arrow}
              alt='Github link'
              className={darkMode ? 'link-arrow active' : 'link-arrow'}
            />
          </a>
        </section>
        <section className='technologies'>
          <p>Recent technologies:</p>
          <ul>
            <li>Javascript</li>
            <li>SCSS</li>
            <li>Jest</li>
            <li>React</li>
            <li>Angular</li>
            <li>Webpack</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Info;
