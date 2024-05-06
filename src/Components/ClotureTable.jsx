import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const ClotureTable = ({ entredubai, id, sortidubai, entreKinhsasa, sortiKinhsasa, created_at }) => {
    return (
        <tr>
            <td><i className=""></i> <strong>{id}</strong></td>
            <td><i className=""></i> <strong>{entredubai}</strong></td>
            <td><i className=""></i> <strong>{sortidubai}</strong></td>
            <td><i className=""></i> <strong>{entreKinhsasa}</strong></td>
            <td><i className=""></i> <strong>{sortiKinhsasa}</strong></td>
            <td>
                <a href="javascript:void(0);"
                ><i className="bx bx-trash fs-2 me-1"></i></a
                >
                <Link to={`/depensedetail/${id}`}
                ><i className="bx bx-file fs-2 me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default ClotureTable