import { motion } from 'framer-motion';
import '../../styles/projects.scss';

const Projects = () => {
  return (
    <motion.div
      className='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul className='project-list'>
        <li className='item'>
          <a
            href='https://junedev-html.github.io/shopping-cart/'
            className='project-title'
          >
            Espress Yourself
          </a>
          <p className='project-info'>
            React /
            <a href='https://github.com/JuneDev-html/shopping-cart/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
        <li className='item'>
          <a
            href='https://junedev-html.github.io/battleship/'
            className='project-title'
          >
            Battleship
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/JuneDev-html/battleship/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
        <li className='item'>
          <a
            href='https://junedev-html.github.io/to-do-list/'
            className='project-title'
          >
            Task Bee
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/JuneDev-html/to-do-list/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
        <li className='item'>
          <a
            href='https://junedev-html.github.io/weather-app/'
            className='project-title'
          >
            Weather App
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/JuneDev-html/weather-app/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Projects;
