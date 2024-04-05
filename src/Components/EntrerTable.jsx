import React from 'react'
import {Link} from 'react-router-dom'

const EntrerTable = ({ nom_emateur, id, nom_recepteur, matricule, telephone }) => {
    return (
        <>

            <tr>
                <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>{id}</strong></td>
                <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>{nom_emateur}</strong></td>
                <td>{nom_recepteur}</td>
                <td>{matricule}</td>
                <td>
                    <Link to={`/entreupdate/${id}`}
                    ><i class="bx bx-edit-alt me-1"></i></Link>
                    <a href="javascript:void(0);"
                    ><i class="bx bx-trash me-1"></i></a
                    >
                     <Link to={`/entredetail/${id}`}
                    ><i class="bx bx-file me-1"></i></Link
                    >
                </td>
            </tr>
        </>
    );
}

export default EntrerTable