import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'


const DetteTablea = ({ nom_emateur, id, nom_recepteur, matricule, date, motif }) => {
    return (
        <tr>
            <td><i className=""></i> <strong>{id}</strong></td>
            <td><i className=""></i> <strong>{nom_emateur}</strong></td>
            <td><i className=""></i> <strong>{nom_recepteur}</strong></td>
            <td><i className=""></i> <strong>{matricule}</strong></td>
            <td><i className=""></i> <strong>{dateFormat(date, 'dd/mm/yyyy')}</strong></td>
            <td><i className=""></i> <strong>{motif}</strong></td>
            <td>
                <a href="javascript:void(0);"
                ><i className="bx bx-trash fs-2 me-1"></i></a
                >
                <Link to={`/paiementDetteClient/${id}`}
                ><i className="bx bx-money fs-2 me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default DetteTablea