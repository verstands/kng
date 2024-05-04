import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const DepnseTableKinshasa = ({ montant, id, created_at, }) => {
    return (
        <tr>
            <td><i class=""></i> <strong>{montant}$</strong></td>
            <td><i class=""></i> <strong>{dateFormat(created_at, 'dd/mm/yyyy')}</strong></td>
            <td>
                <a href="javascript:void(0);"
                ><i class="bx bx-trash me-1"></i></a
                >
                <Link to={`/depensedetail/${id}`}
                ><i class="bx bx-file me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default DepnseTableKinshasa