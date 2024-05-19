import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteDetteClientPaiement } from '../actions/DetteClientAction';
import { deleteDetteClientPartenaire } from '../actions/DettePartenanire';

const DettePartenanireTable = ({ montant, id, transaction, created_at }) => {
    const dispatch = useDispatch();

    const deleteClotureHandler = async (id) => {
        try {
          await dispatch(deleteDetteClientPartenaire(id));
        } catch (error) {
          console.error("Erreur lors de la suppression de la dépense :", error);
        }
      };
  return (
    <tr>
            <td><i className=""></i> <strong>{montant}</strong></td>
            <td><i className=""></i> <strong>{dateFormat(created_at, 'dd/mm/yyyy')}</strong></td>
            <td>
                <Link to=""
                onClick={() =>
                    deleteClotureHandler(id)
                  }
                ><i className="bx bx-trash fs-2 me-1"></i></Link
                >
            </td>
        </tr>
  )
}

export default DettePartenanireTable