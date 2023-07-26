import { Link } from 'react-router-dom';
import '../styles/navigation.scss';

export const Navigation = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/projects'>
        Projects
      </Link>
      <Link className='nav-link' to='/info'>
        Info
      </Link>
      <Link className='nav-link' to='/contact'>
        Contact
      </Link>
    </nav>
  );
};
