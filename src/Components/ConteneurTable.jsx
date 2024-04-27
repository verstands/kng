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
                    <Link to={`/depensedetail/${id}`}><i className="bx bx-trash me-1"></i></Link>
                    <Link to={`/depensedetail/${id}`}><i className='bx bx-dollar me-1'></i></Link>
                    <Link to={`/depensedetail/${id}`}><i className='bx bx-printer me-1'></i></Link>
                </td>
            </tr>
            {activeTable === id && (
                <tr key={id} className='container'>
                    <td colSpan={8}>
                        <table className="table table-borderle">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom client</th>
                                    <th>Telephone</th>
                                    <th>Marchandise</th>
                                    <th>Qte</th>
                                    <th>Montant</th>
                                    <th>Date</th>
                                    <th>Actions</th>
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
                                                <Link to={`/depensedetail/${id}`}><i className="bx bx-trash me-1"></i></Link>
                                                <Link to=""><i className='bx bx-dollar-circle me-1'></i></Link>
                                                <Link to={`/depensedetail/${id}`}><i className='bx bx-printer me-1'></i></Link>
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
