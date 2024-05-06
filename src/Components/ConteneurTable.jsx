import React, { useState } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axioClient from '../axiosClient';
import Spinner from './Spinner';
import { getConteneuClient } from '../actions/ConteneurAction';

const ConteneurTable = ({ nom_conteneur, id, created_at, numero }) => {
    const [dataClient, setDataClient] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeTable, setActiveTable] = useState(null);

    const handleInactive = () => {
        setActiveTable(null);
    };

    const handleClient = (id_client) => {
        setIsLoading(true);
        getConteneuClient(id_client)
            .then((membre) => {
                setDataClient(membre);
                console.log(membre)
                setIsLoading(false);
                setActiveTable(id_client);
            })
            .catch((error) => {
                setIsLoading(false);
            }); 
    };

    return (
        <>
            <tr>
                <td>
                    <button onClick={() => activeTable === id ? handleInactive() : handleClient(id)} className='btn btn-primary'>
                        {activeTable === id ? "-" : "+"}
                    </button>
                </td>
                <td><strong>{nom_conteneur}</strong></td>
                <td><strong>{numero}</strong></td>
                <td><strong>{dateFormat(created_at, 'dd/mm/yyyy')}</strong></td>
                <td>
                    <Link to={`/depensedetail/${id}`}><i className="bx bx-trash fs-2 me-1"></i></Link>
                    <Link to={`/depenseConteneur/${id}`}><i className='bx bx-money fs-2 me-1'></i></Link>
                    <Link to={`/listegroupageUser/${id}`}><i className='bx bx-printer fs-2 me-1'></i></Link>
                </td>
            </tr>
            {activeTable === id && (
                <tr key={id} className='container'>
                    <td colSpan={8}>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">Nom client</th>
                                    <th className="text-white">Telephone</th>
                                    <th className="text-white">Marchandise</th>
                                    <th className="text-white">Qte</th>
                                    <th className="text-white">Montant</th>
                                    <th className="text-white">Date</th>
                                    <th className="text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={8} className="text-center"> <Spinner /> </td>
                                    </tr>
                                ) : (
                                    dataClient.map((client, index) => (
                                        <tr key={index}>
                                            <td className="text-danger">{index + 1}</td>
                                            <td>{client.nom_client}</td>
                                            <td>{client.telephone}</td>
                                            <td>{client.marchandise}</td>
                                            <td>{client.qte}</td>
                                            <td>{client.montant}</td>
                                            <td>{dateFormat(client.created_at, 'dd/mm/yyyy')}</td>
                                            <td>
                                                <Link to={`/depensedetail/${id}`}><i className="bx bx-trash me-1 fs-2"></i></Link>
                                                <Link to=""><i className='bx bx-money me-1 fs-2'></i></Link>
                                                <Link to={`/listegroupageUser/${id}`}><i className='bx bx-printer fs-2 me-1'></i></Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ConteneurTable;
