import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteDetteClient } from '../actions/DetteClientAction';


const DetteTablea = ({ nom_emateur, id, nom_recepteur, matricule, date, motif }) => {
  const dispatch = useDispatch();

    const deleteUserHandler = async (id) => {
        try {
          await dispatch(deleteDetteClient(id));
        } catch (error) {
          console.error("Erreur lors de la suppression de la dépense :", error);
        }
      };
    return (
        <tr>
            <td><i className=""></i> <strong>{id}</strong></td>
            <td><i className=""></i> <strong>{nom_emateur}</strong></td>
            <td><i className=""></i> <strong>{nom_recepteur}</strong></td>
            <td><i className=""></i> <strong>{matricule}</strong></td>
            <td><i className=""></i> <strong>{dateFormat(date, 'dd/mm/yyyy')}</strong></td>
            <td><i className=""></i> <strong>{motif}</strong></td>
            <td>
                <Link to="" onClick={() => deleteUserHandler(id)}
                ><i className="bx bx-trash fs-2 me-1"></i></Link
                >
                <Link to={`/paiementDetteClient/${id}`}
                ><i className="bx bx-money fs-2 me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default DetteTablea