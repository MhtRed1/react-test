import { useEffect, useState } from 'react';
import TableRow from '../tableRow/TableRow';
import './table.css';
import axios from 'axios';

function Table() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const fetchPartners = async () => {
      const res = await axios.get('/data.json');
      setPartners(res.data);
    };
    fetchPartners();
  }, []);
  return (
    <table className='table'>
      <thead>
        <tr>
          <td width='10%'></td>
          <td width='18%'>Prestataire</td>
          <td width='18%'>Zone d'intervention</td>
          <td width='18%'>Téléphone</td>
          <td width='18%'>Email</td>
          <td width='18%'>Disponibilité</td>
        </tr>
      </thead>
      <tbody>
        {partners.map((partner) => (
          <TableRow key={partner.id} partner={partner} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
