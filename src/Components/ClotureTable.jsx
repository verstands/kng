import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteCloture } from '../actions/ClotureAction';

const ClotureTable = ({ entredubai, id, sortidubai, entreKinhsasa, sortiKinhsasa, created_at }) => {
    const dispatch = useDispatch();

    const deleteClotureHandler = async (id) => {
        try {
          await dispatch(deleteCloture(id));
        } catch (error) {
          console.error("Erreur lors de la suppression de la dépense :", error);
        }
      };
    return (
        <tr>
            <td><i className=""></i> <strong>{id}</strong></td>
            <td><i className=""></i> <strong>{entredubai}</strong></td>
            <td><i className=""></i> <strong>{sortidubai}</strong></td>
            <td><i className=""></i> <strong>{entreKinhsasa}</strong></td>
            <td><i className=""></i> <strong>{sortiKinhsasa}</strong></td>
            <td><i className=""></i> <strong>{dateFormat(created_at, 'dd/mm/yyyy')}</strong></td>
            <td>
                <Link to=""
                onClick={() =>
                    deleteClotureHandler(id)
                  }
                ><i className="bx bx-trash fs-2 me-1"></i></Link
                >
                <Link to={`/detailcloture/${id}`}
                ><i className="bx bx-detail fs-2 me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default ClotureTable