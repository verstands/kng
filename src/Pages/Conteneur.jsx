import React from 'react'
import EntrerTable from '../Components/EntrerTable'
import { Link } from 'react-router-dom'

const Conteneur = () => {
    return (
        <>
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                    <div class="col-lg-12 mb-4 order-0">
                        <div class="card">
                            <div class="d-flex align-items-end row">
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary"><i className='bx bx-archive'></i> Les contaneur (Groupage)</h5>
                                        <Link to="/AddGroupage" class="btn btn-sm btn-outline-primary">+ Creer un conteneur</Link>
                                        <a href="javascript:;" class="btn btn-sm btn-outline-primary"><i className='bx bx-user'></i>Affecter un client dans un conteneur</a>

                                    </div>
                                </div>
                                <div class="col-sm-5 text-center text-sm-left">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-wrapper">
                    <div class="row">
                        <div class="card">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#home" role="tab"><span
                                        class="hidden-sm-up"></span>
                                        <span class="hidden-xs-down"><i class="fas fa-list"></i></span></a>
                                </li>
                            </ul>
                            <div class="tab-content tabcontent-border">
                                <div class="tab-pane active" id="home" role="tabpanel">
                                    <div class="p-20">
                                        <div className='row'>
                                            <div className='col-md-9'>
                                                <input type="text" className='form-control' placeholder='Recherche' />
                                            </div>
                                            <div className='col-md-3'>
                                                <button className='btn btn-primary'>Recherche</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <EntrerTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conteneur