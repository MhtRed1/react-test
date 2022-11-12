import './partenaires.css';
import { MdAdd, MdOutlineDehaze } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import Table from '../components/table/Table';

function Partenaires() {
  return (
    <div className='partner'>
      <div className='partnerTitle'>
        <h2>Liste des partenaire</h2>
        <p>
          Demandes de partenariat
          <span>4</span>
        </p>
      </div>
      <div className='partnerNav'>
        <button>
          <MdAdd />
          Ajouter un partenaire
        </button>
        <div className='partnerNavLeft'>
          <div className='partnerNavSearch'>
            <input type='text' placeholder='Les mots clés, Les dates...' />
            <CiSearch className='icon' />
          </div>
          <div className='partnerNavFilter'>
            <MdOutlineDehaze className='icon' />
            <span>2</span>
          </div>
        </div>
      </div>
      <div className='partnerTable'>
        <Table />
      </div>
    </div>
  );
}

export default Partenaires;
