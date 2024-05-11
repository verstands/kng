import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { deletePaiementUser, getPaiementUser } from "../actions/PaiementAction";
import { getClientId } from "../actions/ClientAction";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";

const PayementConteneurUser = () => {
  const [isLoading, setloading] = useState(true);
  const [etatData, setEtatData] = useState([]);
  const [etatDataClient, setEtatDataCient] = useState([]);
  let { id } = useParams();
  const dispatch = useDispatch();

  let numero = 1;

  useEffect(() => {
    getClientId(id)
      .then((membre) => {
        setEtatDataCient(membre);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, [id]);

  useEffect(() => {
    getPaiementUser(id)
      .then((membre) => {
        setEtatData(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, [id]);

  const sommeMontant = etatData.reduce(
    (acc, curr) => acc + curr.montant,
    0
  );

  const deletePaiementHandler = async (id) => {
    try {
      await dispatch(deletePaiementUser(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };
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
                      <i className="bx bx-moneys"></i> Liste des paiement client
                      :
                      <span style={{ color: "red" }}>
                        {etatDataClient.nom_client}
                      </span>
                      <br />
                    </h5>
                    <Link to={`/AddPaiementUser/${id}`} className="btn btn-sm btn-outline-primary"> Ajouter un paiement</Link>

                  </div>
                </div>
                <div className="card btn btn-sm btn-success col-md-2 m-2">
                  <div className="card-body ">
                    <p className="font-weight-bold">Total</p>
                    <span className="font-weight-bold">{sommeMontant}</span>
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
                      <div className="col-md-9"></div>
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
                          <th className="text-white">Montant</th>
                          <th className="text-white">Date</th>
                          <th className="text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(etatData) &&
                          etatData.map((data, index) => (
                            <tr key={index}>
                              <td>
                                <strong>{numero++}</strong>
                              </td>
                              <td>
                                <strong>{data.montant}</strong>
                              </td>
                              <td>
                                <strong>
                                  {dateFormat(data.created_at, "dd/mm/yyyy")}
                                </strong>
                              </td>

                              <td>
                                <Link to=""
                                onClick={() =>
                                    deletePaiementHandler(data.id)
                                  }
                                >
                                  <i className="bx bx-trash me-1"></i>
                                </Link>
                              </td>
                            </tr>
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
    </>
  );
};

export default PayementConteneurUser;
