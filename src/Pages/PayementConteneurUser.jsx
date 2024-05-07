import React from 'react'

const PayementConteneurUser = () => {
  return (
    <>
    <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title text-primary">
                  <i className="bx bx-moneys"></i> Liste des paiement :{" "}
                  <span style={{ color: "red" }}>
                   
                  </span>
                  <br />
                  <h2>Total : 23</h2>
                </h5>
              </div>
            </div>
            <div class="col-sm-5 text-center text-sm-left"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-wrapper">
      <div class="row">
        <div class="card">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#home"
                role="tab"
              >
                <span class="hidden-sm-up"></span>
                <span class="hidden-xs-down">
                  <i class="fas fa-list"></i>
                </span>
              </a>
            </li>
          </ul>
          <div class="tab-content tabcontent-border">
            <div class="tab-pane active" id="home" role="tabpanel">
              <div class="p-20">
                <div className="row">
                  <div className="col-md-9">
                    <Link to={`/PrintDepenseConteneur`}>
                      <i
                        className="bx bx-printer me-1"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="card">
              {isLoading ? (
                <div className="text-center">
                  <Spinner />
                </div>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr className="bg-primary">
                      <th className="text-white">N°</th>
                      <th className="text-white">Type depense</th>
                      <th className="text-white">Montant</th>
                      <th className="text-white">Date</th>
                      <th className="text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                        return (
                          <tr>
                            <td></td>
                            <td>
                              <strong>{d.id_typedepense.intitule}</strong>
                            </td>
                            <td>
                              <strong></strong>
                            </td>
                            <td>
                              <strong>
                                
                              </strong>
                            </td>
                            <td>
                              <Link
                                to=""
                               
                              >
                                <i className="bx bx-trash me-1"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default PayementConteneurUser