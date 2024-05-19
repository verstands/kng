import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import { getDetteClientPaiement, getDetteIdd } from '../actions/DetteClientAction';
import { useParams } from 'react-router-dom';
import DetteClientPaimentTable from '../Components/DetteClientPaimentTable';
import { getEntreDetail } from '../actions/EntreAction';
import DettePartenanireTable from '../Components/DetteparteanireTable';
import { getDettePaiement, getDettePartenaireDetail } from '../actions/DettePartenanire';

const ViewDettePartenaires = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [datacloture, setdatacloture] = useState([]);
  const [detailUser, setdetailUser] = useState([]);
  const [detteid, setdetteid] = useState([]);
  const numberDepense = 1;
  const { id } = useParams();

  useEffect(() => {
    getDettePaiement(id)
      .then((membre) => {
        setdatacloture(membre);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getDettePartenaireDetail(id)
      .then((membre) => {
        setdetailUser(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const sommeMontantsPayes = datacloture.reduce((acc, current) => acc + current.montant, 0);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-4">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-moneys"></i> Nom : 
                      <span style={{ color: "red" }}>
                        {detailUser.intitule}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-8 text-center p-2">
                    <div className="row">
                      <div className="card btn btn-sm btn-danger col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Somme de dette</p>
                          <span className="font-weight-bold">
                            {detailUser.montantpayer}
                          </span>
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
                  {!isLoading ? (
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
                            <DettePartenanireTable
                              id={data.id}
                              montant={data.montant}
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

export default ViewDettePartenaires