import '../../styles/home.scss';
// import transition from '../../transition';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className='aboutme'>
        Born in 1991 <br />
        in Goiânia, Brazil. <br />
        A former nurse <br />
        who, through <br />
        high self-motivation <br />
        and self-discipline <br />
        successfully <br />
        taught myself <br />
        web development <br />
        while building <br />
        a loving <br />
        online community. <br />
        With a mission <br />
        to improve <br />
        everyday, <br />
        I am pursuing <br />
        new experiments <br />
        and ideas. <br />
      </p>
    </motion.div>
  );
};

export default Home;
