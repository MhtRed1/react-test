import './sidebar.css';
import { Link } from 'react-router-dom';

import {
  MdLogout,
  MdOutlineMoreHoriz,
  MdNotifications,
  MdPerson,
} from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebarLogo'></div>
        <div className='sidebarProfil'>
          <h4>Profil</h4>
          <button>
            <img src='imgs/company.png' alt='company' />
            <span>Ryan Workman</span>
            <MdOutlineMoreHoriz className='icon1' />
          </button>
          <button>
            <MdLogout className='icon2' />
            <span>Deconnexion</span>
          </button>
        </div>
        <div className='sidebarMenu'>
          <h4>Menu</h4>
          <ul>
            <li>
              <Link className='link' to='/'>
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link className='link' to='/services'>
                Demande de service
              </Link>
              <span>4</span>
            </li>
            <li>
              <Link className='link' to='/client'>
                Clients
              </Link>
            </li>
            <li>
              <Link className='link' to='/lieux'>
                Lieux d'intervention
              </Link>
            </li>
            <li>
              <Link className='link' to='/partenaires'>
                Partenaires
              </Link>
            </li>
            <li>
              <Link className='link' to='/beneficaires'>
                Bénéficaire
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebarResponsive'>
        <div className='sideResLogo'></div>
        <div className='sideResToggle'>
          <FaBars />
        </div>
        <div className='sideResIcons'>
          <div className='notification'>
            <MdNotifications className='icon' />
            <span>4</span>
          </div>
          <MdPerson className='icon' />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
