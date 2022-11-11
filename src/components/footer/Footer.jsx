import './footer.css';
import {
  RiTwitterFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiYoutubeFill,
} from 'react-icons/ri';
function Footer() {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <ul className='footerLeftOne'>
          <li>Accueil</li>
          <li>A propos</li>
          <li>Nos services</li>
          <li>Actialité</li>
        </ul>
        <ul className='footerLeftTwo'>
          <li>Mentions légales</li>
          <li>Politique de confidentialité</li>
          <li>Conditions générales d'utlilisation</li>
        </ul>
      </div>
      <div className='footerRight'>
        <div className='fooetrRightSocial'>
          <RiFacebookFill className='icon' />
          <RiLinkedinFill className='icon' />
          <RiTwitterFill className='icon' />
          <RiInstagramFill className='icon' />
          <RiYoutubeFill className='icon' />
        </div>
        <div className='fooetrRightLogo'></div>
      </div>
    </div>
  );
}

export default Footer;
