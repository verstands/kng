import React, { Suspense, useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { getEntre, getEntreJourne } from '../actions/EntreAction';
import EntrerTable from '../Components/EntrerTable';
import { getDepense } from '../actions/DepenseAction';
import DepnseTable from '../Components/DepnseTable';
const LesTransaction = React.lazy(() => import('../Components/LesTransaction'));

const Entre = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermJourne, setSearchTermJourne] = useState("");
    const [searchDepense, setSearchDepense] = useState("");
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true)
    const [etatDataJ, setetatDataJ] = useState([]);
    const [depenseData, setdepenseData] = useState([]);
    const [showTransaction, setShowTransaction] = useState(true);


    const dataId = localStorage.getItem('ville');
    useEffect(() => {
        getDepense().then((membre) => {
            setdepenseData(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    
    useEffect(() => {
        getEntre().then((membre) => {
            setetatData(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getEntreJourne().then((membre) => {
            setetatDataJ(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchJour = (event) => {
        setSearchTermJourne(event.target.value);
    };

    const handleSearchDepense = (event) => {
        setSearchDepense(event.target.value);
    };




    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-lg-12 mb-4 order-0">
                        <div className="card">
                            <div className="d-flex align-items-end row">
                                <div className="col-sm-4">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary"><i className='bx bx-log-in'></i>Dubai</h5>
                                        <Link to="/Addentrer" className="btn btn-sm btn-outline-primary">Faire une transaction</Link>
                                        <Link to="/adddepnse" className="btn btn-sm btn-outline-primary">Depense</Link>
                                    </div>
                                </div>
                                <div className="col-sm-8 text-center p-2">
                                    <div className='row'>
                                        <div className="card btn btn-sm btn-outline-primary col-md-3">
                                            <div className="card-body ">
                                                <p className='font-weight-bold'>Dépôt</p>
                                                <span className='font-weight-bold'>2$</span>
                                            </div>
                                        </div>
                                        <div className="card btn btn-sm btn-outline-primary col-md-3">
                                            <div className="card-body ">
                                                <p className='font-weight-bold'>Sorti</p>
                                                <span className='font-weight-bold'>2$</span>
                                            </div>
                                        </div>
                                        <div className="card btn btn-sm btn-outline-primary col-md-3">
                                            <div className="card-body ">
                                                <p className='font-weight-bold'>Balance</p>
                                                <span className='font-weight-bold'>2$</span>
                                            </div>
                                        </div>
                                        <div className="card btn btn-sm btn-outline-primary col-md-3">
                                            <div className="card-body ">
                                                <p className='font-weight-bold'>Total</p>
                                                <span className='font-weight-bold'>2$</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="row">
                        <div className="card col-md-8">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab"><span
                                        className="hidden-sm-up"></span>
                                        <span className="hidden-xs-down"><i className="fas fa-list"></i>Transaction du jour</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#profile" role="tab" onClick={() => setShowTransaction(true)}><span
                                        className="hidden-sm-up"></span>
                                        <span className="hidden-xs-down"><i className="fas fa-mobile-alt"></i>Les transactions</span></a>
                                </li>
                            </ul>
                            <div className="tab-content tabcontent-border">
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <div className="p-20">
                                        <div className='row'>
                                            <div className='col-md-10'>
                                                <input
                                                    type="text"
                                                    className='form-control'
                                                    value={searchTerm}
                                                    onChange={handleSearch}
                                                    placeholder='Recherche' />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="card">
                                        {isLoading ? (
                                            <div className="text-center">
                                                <Spinner />
                                            </div>
                                        ) : (
                                            <div className="table-responsive text-nowrap">
                                                <table className="table table-borderless">
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
                                                        {Array.isArray(etatDataJ) && etatDataJ
                                                            .filter((data) => {
                                                                if (typeof data.matricule !== 'string') {
                                                                    return false;
                                                                }
                                                                return data.matricule.toLowerCase().includes(searchTerm.toLowerCase())
                                                            })
                                                            .map((data, index) => (
                                                                <EntrerTable
                                                                    id={data.id}
                                                                    nom_emateur={data.nom_emateur}
                                                                    nom_recepteur={data.nom_recepteur}
                                                                    matricule={data.matricule}
                                                                    key={index}
                                                                />
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="tab-pane p-20" id="profile" role="tabpanel">
                                    <Suspense fallback={<Spinner />}>
                                        {showTransaction && <LesTransaction />}
                                    </Suspense>
                                </div>

                            </div>
                        </div>
                        <div className="card col-md-4 ml-2">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab"><span
                                        className="hidden-sm-up"></span>
                                        <span className="hidden-xs-down"><i className="fas fa-list"></i>Les depenses</span></a>
                                </li>
                            </ul>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Recherche'
                                    value={searchDepense}
                                    onChange={handleSearchDepense}
                                />

                            </div>
                            <hr />
                            {isLoading ? (
                                <div className="text-center">
                                    <Spinner />
                                </div>
                            ) : (
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Montant</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(depenseData) && depenseData
                                            .filter((data) => {
                                                if (typeof data.created_at !== 'string') {
                                                    return false;
                                                }
                                                return data.created_at.toLowerCase().includes(searchDepense.toLowerCase())
                                            })
                                            .map((data, index) => (
                                                <DepnseTable
                                                    id={data.id}
                                                    montant={data.montant}
                                                    created_at={data.created_at}
                                                    key={index}
                                                />
                                            ))
                                        }

                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Entre;
