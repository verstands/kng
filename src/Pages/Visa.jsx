/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Visa = () => {
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-lg-12 mb-4 order-0">
          <div className="card">
            <div className="d-flex row">
              <div className="col-sm-5">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="bx bx-card"></i>Demande Visa
                  </h5>
                  <Link to="/EntreVisa" class="btn btn-sm btn-outline-primary me-2">
                    + Créer Dossier Visa
                  </Link>
                  <Link to="/SuiviVisa" class="btn btn-sm btn-outline-primary me-2">
                    * Suivi Dossier Visa
                  </Link>
                  <Link to="/SortieVisa" className="btn btn-sm btn-outline-primary ">
                    - Sortie Visa 
                  </Link>
                </div>
              </div>
              <div className="col-sm-7 text-center p-2">
                <div className="row">
                  <div className="card btn btn-sm btn-success col-md-2 m-2">
                    <div className="card-body ">
                      <p className="font-weight-bold">Entrer</p>
                      <span className="font-weight-bold">165</span>
                    </div>
                  </div>
                  <div className="card btn btn-sm btn-warning col-md-2 m-2">
                    <div className="card-body ">
                      <p className="font-weight-bold">Sortie</p>
                      <span className="font-weight-bold">123</span>
                    </div>
                  </div>
                  <div className="card btn btn-sm btn-primary col-md-3 m-2">
                    <div className="card-body ">
                      <p className="font-weight-bold">Demande Visa</p>
                      <span className="font-weight-bold">23</span>
                    </div>
                  </div>
                  <div className="card btn btn-sm btn-danger col-md-2 m-2">
                    <div className="card-body ">
                      <p className="font-weight-bold">Reste</p>
                      <span className="font-weight-bold">300</span>
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
          <div className="col-12 col-lg-12">
            <div className="card"> 
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="home" role="tabpanel">
                  <div className="p-20">
                    <div className="row">
                      <div className="col-md-4">
                        <input className="form-control" placeholder='Rechercher un visa...'/>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control" type="date" />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control" type="date" />
                          </div>

                        </div>
                      </div>
                      <div className="col-md-2">
                        <Link to="/listegroupage">
                          <i
                            className="bx bx-printer me-1"
                            style={{ fontSize: "40px" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card">
                    
                      </div>
                    
                      <table className="table table-bordered">
                        <thead>
                          <tr className="bg-primary">
                            <th className="text-white">N</th>
                            <th className="text-white">Nom</th>
                            <th className="text-white">Numero</th>
                            <th className="text-white">Date</th>
                            <th className="text-white">Actions</th>
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
    </>
  )
}

export default Visa