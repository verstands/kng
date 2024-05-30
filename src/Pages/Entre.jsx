import React, { Suspense, useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import {
  balanceDubai,
  deleteEntreDubai,
  getCounrDepotDoubai,
  getCounrRetraitDoubai,
  getEntre,
  getEntreJourne,
  totalaJourCount,
} from "../actions/EntreAction";
import EntrerTable from "../Components/EntrerTable";
import DepnseTable from "../Components/DepnseTable";
import { getDepenseDubai } from "../actions/DepenseAction";
const LesTransaction = React.lazy(() => import("../Components/LesTransaction"));

const Entre = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermJourne, setSearchTermJourne] = useState("");
  const [searchDepense, setSearchDepense] = useState("");
  const [etatData, setetatData] = useState([]);
  const [isLoading, setloading] = useState(true);
  const [etatDataJ, setetatDataJ] = useState([]);
  const [depenseData, setdepenseData] = useState([]);
  const [showTransaction, setShowTransaction] = useState(true);
  const [coutndepot, setcountdepot] = useState(0);
  const [coutnretrait, setcountretrait] = useState(0);
  const [balance, setbalance] = useState(0);
  const [total, settotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  let nombre = 1;
  let numberdepense = 1;

  useEffect(() => {
    totalaJourCount()
      .then((membre) => {
        settotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrDepotDoubai()
      .then((membre) => {
        setcountdepot(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    balanceDubai()
      .then((membre) => {
        setbalance(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrRetraitDoubai()
      .then((membre) => {
        setcountretrait(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //depense dubai
  useEffect(() => {
    getDepenseDubai()
      .then((membre) => {
        setdepenseData(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEntre()
      .then((membre) => {
        setetatData(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEntreJourne(currentPage)
      .then(({ membres, totalPages }) => {
        // Récupérez également totalPages
        setetatDataJ(membres);
        setTotalPages(totalPages); // Mettez à jour totalPages
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchJour = (event) => {
    setSearchTermJourne(event.target.value);
  };

  const handleSearchDepense = (event) => {
    setSearchDepense(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-md-12 mb-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-sm-4">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <i className="bx bx-log-in m-1"></i> DXB ABS
                      </h5>
                      <div className="col-md-12">
                        <Link
                          to="/Addentrer"
                          className="btn btn-sm btn-outline-primary m-2"
                        >
                          Faire une transaction
                        </Link>
                        <Link
                          to="/adddepnse"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Depense
                        </Link>
                        <Link
                        to="/ListTransactionDubai"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Liste des transactions
                      </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 text-center p-2">
                    <div className="row">
                      <div className="card btn btn-sm btn-success col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Dépôt</p>
                          <span className="font-weight-bold">{coutndepot}</span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-warning col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Balance</p>
                          <span className="font-weight-bold">
                            {coutndepot - coutnretrait - total}
                          </span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-danger col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Sorti</p>
                          <span className="font-weight-bold">
                            {coutnretrait}
                          </span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-primary col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Total Depense</p>
                          <span className="font-weight-bold">{total}</span>
                        </div>
                      </div>
                      <div
                        className="card btn btn-sm btn col-md-2 m-2"
                        style={{ backgroundColor: "purple" }}
                      >
                        <div className="card-body ">
                          <p
                            className="font-weight-bold"
                            style={{ color: "white" }}
                          >
                            Solde
                          </p>
                          <span
                            className="font-weight-bold"
                            style={{ color: "white" }}
                          >
                            {balance}
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
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-8">
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
                            <i className="fas fa-list"></i>Transaction du jour
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#profile"
                          role="tab"
                          onClick={() => setShowTransaction(true)}
                        >
                          <span className="hidden-sm-up"></span>
                          <span className="hidden-xs-down">
                            <i className="fas fa-mobile-alt"></i>Les
                            transactions
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content tabcontent-border">
                      <div
                        className="tab-pane active"
                        id="home"
                        role="tabpanel"
                      >
                        <div className="p-20">
                          <div className="row">
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                value={searchTermJourne}
                                onChange={handleSearchJour}
                                placeholder="Recherche"
                              />
                            </div>
                            <div className="col-md-2">
                              <Link to={`/ImprimerTransactionAll`}>
                                <i className="bx bx-printer fs-2 me-1"></i>
                              </Link>
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
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">Nom_emeteur</th>
                                    <th className="text-white">
                                      Nom recepeteur
                                    </th>
                                    <th className="text-white">Matricule</th>
                                    <th className="text-white">
                                      Type transaction
                                    </th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Array.isArray(etatDataJ) &&
                                    etatDataJ
                                      .filter((data) => {
                                        if (
                                          typeof data.matricule !== "string" ||
                                          typeof data.nom_emateur !==
                                            "string" ||
                                          typeof data.nom_recepteur !==
                                            "string" ||
                                          typeof data.etat !== "string"
                                        ) {
                                          return false;
                                        }
                                        return (
                                          data.matricule
                                            .toLowerCase()
                                            .includes(
                                              searchTermJourne.toLowerCase()
                                            ) ||
                                          data.nom_emateur
                                            .toLowerCase()
                                            .includes(
                                              searchTermJourne.toLowerCase()
                                            ) ||
                                          data.nom_recepteur
                                            .toLowerCase()
                                            .includes(
                                              searchTermJourne.toLowerCase()
                                            ) ||
                                          data.etat
                                            .toLowerCase()
                                            .includes(
                                              searchTermJourne.toLowerCase()
                                            )
                                        );
                                      })
                                      .map((data, index) => (
                                        <EntrerTable
                                          id={data.id}
                                          nombre={nombre++}
                                          nom_emateur={data.nom_emateur}
                                          nom_recepteur={data.nom_recepteur}
                                          type={data.etat}
                                          matricule={data.matricule}
                                          key={data.id}
                                        />
                                      ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                        <br />
                        <div className="pagination-container">
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="btn btn-primary mr-2"
                          >
                            &laquo; Précédent
                          </button>
                          &nbsp;
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="btn btn-primary"
                          >
                            Suivant &raquo;
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane p-20"
                        id="profile"
                        role="tabpanel"
                      >
                        <Suspense fallback={<Spinner />}>
                          {showTransaction && <LesTransaction />}
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
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
                            <i className="fas fa-list"></i>Les depenses
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content tabcontent-border">
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recherche"
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
                        <div className="table-responsive text-nowrap">
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
                              {Array.isArray(depenseData) &&
                                depenseData
                                  .filter((data) => {
                                    if (
                                      typeof data.created_at !== "string" ||
                                      typeof data.montant !== "string"
                                    ) {
                                      return false;
                                    }
                                    return (
                                      data.created_at
                                        .toLowerCase()
                                        .includes(
                                          searchDepense.toLowerCase()
                                        ) ||
                                      data.montant
                                        .toLowerCase()
                                        .includes(searchDepense.toLowerCase())
                                    );
                                  })
                                  .map((data, index) => (
                                    <DepnseTable
                                      number={numberdepense++}
                                      id={data.id}
                                      montant={data.montant}
                                      created_at={data.created_at}
                                      key={index}
                                    />
                                  ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entre;
