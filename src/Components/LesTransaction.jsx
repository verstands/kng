import React, { useEffect, useState } from 'react';
import EntrerTable from './EntrerTable';
import { getEntre } from '../actions/EntreAction'; // Importation de getEntre

const LesTransaction = ({ isLoading, setLoading }) => { // Passer isLoading et setLoading en tant que props
    const [etatData, setEtatData] = useState([]);
    const [searchTermJourne, setSearchTermJourne] = useState("");

    const handleSearchJour = (event) => {
        setSearchTermJourne(event.target.value);
    };

    useEffect(() => {
        getEntre().then((membre) => {
            setEtatData(membre);
            setLoading(false); 
        }).catch((error) => {
            console.log(error);
        });
    }, [setLoading]);

    return (
        <>
            <div className="p-20">
                <div className="tab-pane active" id="home" role="tabpanel">
                    <div className="p-20">
                        <div className='row'>
                            <div className='col-md-3'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Recherche'
                                    value={searchTermJourne}
                                    onChange={handleSearchJour}
                                />
                            </div>
                            <div className='col-md-3'>
                                <input type="date" className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <input type="date" className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-primary'> <i className='bx bx-filter'></i> Filtre</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        {isLoading ? (
                            <div className="text-center">
                                <Spinner /> {/* Assurez-vous d'importer le composant Spinner si nécessaire */}
                            </div>
                        ) : (
                            <div className="table-responsive text-nowrap">
                                <table className="table table-borderle">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nom_emeteur</th>
                                            <th>Nom recepeteur</th>
                                            <th>Matricule</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(etatData) && etatData
                                            .filter((data) => {
                                                if (
                                                    typeof data.matricule !== 'string' || 
                                                    typeof data.nom_emateur !== 'string' ||
                                                    typeof data.nom_recepteur !== 'string' 
                                                ) {
                                                    return false;
                                                }
                                                return data.matricule.toLowerCase().includes(searchTermJourne.toLowerCase()) ||
                                                data.nom_emateur.toLowerCase().includes(searchTermJourne.toLowerCase()) ||
                                                data.nom_recepteur.toLowerCase().includes(searchTermJourne.toLowerCase())
                                            })
                                            .map((data, index) => (
                                                <EntrerTable
                                                    id={data.id}
                                                    nom_emateur={data.nom_emateur}
                                                    nom_recepteur={data.nom_recepteur}
                                                    matricule={data.matricule}
                                                    key={index} // Assurez-vous d'avoir une clé unique pour chaque élément
                                                />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LesTransaction;
