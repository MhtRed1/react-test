import './sidebar.css';
import { Link } from 'react-router-dom';

import { MdLogout, MdPerson, MdOutlineMoreHoriz } from 'react-icons/md';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarLogo'></div>
      <div className='sidebarProfil'>
        <h4>Profil</h4>
        <button>
          <MdPerson className='icon' />
          <span>Ryan Workman</span>
          <MdOutlineMoreHoriz className='icon' />
        </button>
        <button>
          <MdLogout className='icon' />
          <span>Deconnexion</span>
        </button>
      </div>
      <div className='sidebarMenu'>
        <h4>Menu</h4>
        <ul>
          <li>
            <Link className='link' to='/'>Tableau de bord</Link>
          </li>
          <li>
            <Link className='link' to='/services'>Demande de service</Link>
            <span>4</span>
          </li>
          <li>
            <Link className='link' to='/client'>Clients</Link>
          </li>
          <li>
            <Link className='link' to='/lieux'>Lieux d'intervention</Link>
          </li>
          <li>
            <Link className='link' to='/partenaires'>Partenaires</Link>
          </li>
          <li>
            <Link className='link' to='/beneficaires'>Bénéficaire</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
