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
            href='https://juneDaSilva.github.io/battleship/'
            className='project-title'
          >
            BATTLESHIP
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/juneDaSilva/battleship/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
        <li className='item'>
          <a
            href='https://juneDaSilva.github.io/shopping-cart/'
            className='project-title'
          >
            Espress Yourself
          </a>
          <p className='project-info'>
            React /
            <a href='https://github.com/JuneDaSilva/shopping-cart/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>

        <li className='item'>
          <a
            href='https://JuneDaSilva.github.io/to-do-list/'
            className='project-title'
          >
            TASK BEE
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/JuneDaSilva/to-do-list/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
        <li className='item'>
          <a
            href='https://JuneDaSilva.github.io/weather-app/'
            className='project-title'
          >
            WEATHER APP
          </a>
          <p className='project-info'>
            vanillaJs /
            <a href='https://github.com/JuneDaSilva/weather-app/blob/main/README.md'>
              /aboutMe
            </a>
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Projects;
