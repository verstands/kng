import React from 'react'
import EntrerTable from '../Components/EntrerTable'
import {Link} from 'react-router-dom'

const DetteClient = () => {
    return (
        <>
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                    <div class="col-lg-12 mb-4 order-0">
                        <div class="card">
                            <div class="d-flex align-items-end row">
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary"><i className='bx bx-wallet'></i> Les dettes des clients</h5>
                                        <Link to="/dettePartenaire" className="btn btn-sm btn-outline-primary">Dette partenaire</Link>
                                    </div>
                                </div>
                                <div class="col-sm-5 text-center text-sm-left">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-wrapper">
                    <div className="page-wrapper">
                        <div className="row">
                            <div className="card col-md-12">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab"><span
                                            className="hidden-sm-up"></span>
                                            <span className="hidden-xs-down"><i className="fas fa-list"></i>Dette Client</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#profile" role="tab"><span
                                            className="hidden-sm-up"></span>
                                            <span className="hidden-xs-down"><i className="fas fa-mobile-alt"></i>Dette Partenaire</span></a>
                                    </li>
                                </ul>
                                <div className="tab-content tabcontent-border">
                                    <div className="tab-pane active" id="home" role="tabpanel">
                                        <div className="p-20">
                                            <div className='row'>
                                                <div className='col-md-3'>
                                                    <input type="text" className='form-control' placeholder='Recherche'
                                                        value="" />
                                                </div>
                                                <div className='col-md-3'>
                                                    <input type="date" className='form-control' />
                                                </div>
                                                <div className='col-md-3'>
                                                    <input type="date" className='form-control' />
                                                </div>
                                                <div className='col-md-3'>
                                                    <button className='btn btn-primary'> <i className='bx bx-filter'></i>
                                                        Filtre</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="card">
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

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane p-20" id="profile" role="tabpanel">
                                        <div className="p-20">
                                            <div className="tab-pane active" id="home" role="tabpanel">
                                                <div className="p-20">
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <input type="text" className='form-control' placeholder='Recherche'
                                                                value="" />
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <input type="date" className='form-control' />
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <input type="date" className='form-control' />
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <button className='btn btn-primary'> <i className='bx bx-filter'></i>
                                                                Filtre</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card">
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

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetteClient