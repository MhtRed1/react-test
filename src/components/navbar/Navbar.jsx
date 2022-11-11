import './navbar.css';
import { MdOutlineNotificationsNone } from 'react-icons/md';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarLeft'>
        <h4>Bonjour, Ryan!</h4>
        <p>Voici ce qui ce passe sur votre compte aujourdhui!</p>
      </div>
      <div class='navbarRight'>
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
