import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import {
  getEntreJourneKinshasa,
  getEntreKinshasa,
} from "../actions/EntreAction";
import EntrerTable from "../Components/EntrerTable";

import DepnseTable from "../Components/DepnseTable";
import {
  getBalancetKinshasa,
  getCounrDepotKinshasa,
  getCounrRetraitKinshasa,
} from "../actions/SortieAction";
import {
  ListeKinshasaJourCountTotal,
  getCounrDepenseKinshasa,
} from "../actions/DepenseAction";
import DepnseTableKinshasa from "../Components/DepenseTableKinshasa";
import EntrerTableSorti from "../Components/EntrerTableSorti";

const ListeTransactionKinshasa = () => {
  const getFiveDaysAgo = () => {
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);
    const year = fiveDaysAgo.getFullYear();
    const month = String(fiveDaysAgo.getMonth() + 1).padStart(2, "0");
    const day = String(fiveDaysAgo.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermJourne, setSearchTermJourne] = useState("");
  const [searchDepense, setSearchDepense] = useState("");
  const [etatData, setetatData] = useState([]);
  const [isLoading, setloading] = useState(true);
  const [etatDataJ, setetatDataJ] = useState([]);
  const [depenseData, setdepenseData] = useState([]);
  const [countDepot, setCountDepot] = useState(0);
  const [countSorti, setCountSorti] = useState(0);
  const [countDepense, setCountDepense] = useState(0);
  const [countTotal, setcountTotal] = useState(0);
  const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
  const [dateFin, setDateFin] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadDate, setTosetloadDatetalPages] = useState(false);

  let nombre = 1;
  let nombreDepense = 1;

  const handleDateDebutChange = (event) => {
    setTosetloadDatetalPages(true);
    setDateDebut(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
  };

  const handleDateFinChange = (event) => {
    setTosetloadDatetalPages(true);
    setDateFin(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
  };

  useEffect(() => {
    ListeKinshasaJourCountTotal()
      .then((membre) => {
        setdepenseData(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getBalancetKinshasa()
      .then((membre) => {
        setcountTotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrDepenseKinshasa()
      .then((membre) => {
        setCountDepense(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrDepotKinshasa()
      .then((membre) => {
        setCountDepot(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrRetraitKinshasa()
      .then((membre) => {
        setCountSorti(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEntreKinshasa(currentPage, dateDebut, dateFin)
      .then((data, totalPages) => {
        setetatData(data);
        setTotalPages(totalPages);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, dateDebut, dateFin, setloading]);

  useEffect(() => {
    getEntreJourneKinshasa()
      .then((membre) => {
        setetatDataJ(membre);
        setTotalPages(totalPages);
        setloading(false);
      })
      .catch((error) => {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                    <h5 className="card-title text-primary">
                      <i className="bx bx-log-out m-1"></i>FIH ABS
                    </h5>
                    <div className="col-md-12">
                      <Link
                        to="/Addentrer"
                        className="btn btn-sm btn-outline-primary m-2"
                      >
                        Faire une transaction
                      </Link>
                      <Link
                        to="/addDepenseKinshasa"
                        className="btn btn-sm btn-outline-primary"
                      >
                        {" "}
                        Depense
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 text-center p-2">
                  <div className="row">
                    <div className="card btn btn-sm btn-success col-md-2 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Dépôt</p>
                        <span className="font-weight-bold">{countDepot}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-danger col-md-2 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Sorti</p>
                        <span className="font-weight-bold">{countSorti}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-primary col-md-2 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Balance</p>
                        <span className="font-weight-bold">
                          {parseInt(countDepot) + parseInt(countSorti)}$
                        </span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-primary col-md-2 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Reste</p>
                        <span className="font-weight-bold">{countTotal}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-warning col-md-2 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Total depense</p>
                        <span className="font-weight-bold">
                          {countDepense}$
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
            <div className="col-12 col-md-12">
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
                        <i className="fas fa-list"></i>Les transactions
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content tabcontent-border">
                  <div className="tab-pane active" id="home" role="tabpanel">   
                    <hr />
                    <div className="card">
                      {isLoading ? (
                        <div className="text-center">
                          <Spinner />
                        </div>
                      ) : (
                        <div className="p-20">
                      <div
                        className="tab-pane active"
                        id="home"
                        role="tabpanel"
                      >
                        <div className="p-20">
                          <div className="row">
                            <div className="col-md-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Recherche"
                                value={searchTermJourne}
                                onChange={handleSearchJour}
                              />
                            </div>
                            <div className="col-md-3">
                              <input
                                type="date"
                                className="form-control"
                                value={dateDebut}
                                onChange={handleDateDebutChange}
                              />
                            </div>
                            <div className="col-md-3">
                              <input
                                type="date"
                                className="form-control"
                                value={dateFin}
                                onChange={handleDateFinChange}
                              />
                            </div>
                            <div className="col-md-2">
                              <Link
                                to={`/ImprimerTransactionAllsKin/${dateDebut}/${dateFin}`}
                              >
                                <i className="bx bx-printer fs-2 me-1"></i>
                              </Link>
                            </div>
                            <center>{loadDate ? <Spinner /> : ""}</center>
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
                                      Type trasanction
                                    </th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Array.isArray(etatData) &&
                                    etatData
                                      .filter((data) => {
                                        return (
                                          typeof data.matricule === "string" &&
                                          typeof data.nom_emateur ===
                                            "string" &&
                                          typeof data.nom_recepteur ===
                                            "string" &&
                                          typeof data.etat === "string" &&
                                          (data.matricule
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
                                              ))
                                        );
                                      })
                                      .map((data, index) => (
                                        <EntrerTableSorti
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
                      </div>
                      <br />
                      <div className="pagination-container">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="btn btn-secondary mr-2"
                        >
                          &laquo; Précédent
                        </button>
                        &nbsp;
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="btn btn-secondary"
                        >
                          Suivant &raquo;
                        </button>
                      </div>
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

export default ListeTransactionKinshasa;
