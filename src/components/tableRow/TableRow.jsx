import './tableRow.css';
import { AiOutlineCalendar } from 'react-icons/ai';

function TableRow({ partner }) {
  return (
    <tr className='TableRow'>
      <td>
        <img src='imgs/avatar.png' alt='' />
      </td>
      <td className='name'>{partner.name}</td>
      <td>
        <div className='zone'>
          {partner.lieux.map((lieu) => (
            <span key={lieu.id}>{lieu.code}</span>
          ))}
        </div>
      </td>
      <td>{partner.telephone}</td>
      <td>{partner.email}</td>
      <td>
        <div className='disponible'>
          <span></span>
          <p>{partner.disponible}</p>
          <AiOutlineCalendar className='icon' />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
