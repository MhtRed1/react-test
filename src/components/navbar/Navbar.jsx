import './navbar.css';
import { MdOutlineNotificationsNone } from 'react-icons/md';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarLeft'>
        <h1>Bonjour, Ryan!</h1>
        <p>Voici ce qui ce passe sur votre compte aujourdhui!</p>
      </div>
      <div className='navbarRight'>
        <div className='notification'>
          <MdOutlineNotificationsNone className='icon' />
          <span>4</span>
        </div>
        <img src='imgs/avatar.png' alt='avatar' />
      </div>
    </div>
  );
}

export default Navbar;
