import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import { getDetteClientPaiement, getDetteIdd, getDetteIddTransaction } from '../actions/DetteClientAction';
import { useParams } from 'react-router-dom';
import DetteClientPaimentTable from '../Components/DetteClientPaimentTable';
import { getEntreDetail } from '../actions/EntreAction';

const ViewDette = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [datacloture, setdatacloture] = useState([]);
  const [detailUser, setdetailUser] = useState([]);
  const [detteid, setdetteid] = useState([]);
  const numberDepense = 1;
  const { id } = useParams();

  useEffect(() => {
    getDetteClientPaiement(id)
      .then((membre) => {
        setdatacloture(membre);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEntreDetail(id)
      .then((membre) => {
        setdetailUser(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    getDetteIddTransaction(id)
      .then((membre) => {
        setdetteid(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  const sommeMontantsPayes = datacloture.reduce((acc, current) => acc + Number(current.montant_paye), 0);


  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-4">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-moneys"></i> Matricule : 
                      <span style={{ color: "red" }}>
                        {detailUser.matricule}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-8 text-center p-2">
                    <div className="row">
                      <div className="card btn btn-sm btn-success col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Montant  initial</p>
                          <span className="font-weight-bold">{detteid.montant_dette}</span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-warning col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Evolution dette</p>
                          <span className="font-weight-bold">
                            {sommeMontantsPayes}
                          </span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-danger col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Reste</p>
                          <span className="font-weight-bold">{detteid.montant_dette - sommeMontantsPayes}</span>
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
            <div className="card">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    <span className="hidden-sm-up"></span>
                    <span className="hidden-xs-down">
                      <i className="fas fa-list"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="home" role="tabpanel">
                  <div className="p-20">
                    <div className="row">
                      <div className="col-md-9">
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
                          <th className="text-white">Montant reçu($)</th>
                          <th className="text-white">Date</th>
                          <th className="text-white">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {Array.isArray(datacloture) &&
                        datacloture
                          .map((data, index) => (
                            <DetteClientPaimentTable
                              id={data.id}
                              montant={data.montant_paye}
                              created_at={data.created_at}
                              key={index}
                            />
                          ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ViewDette