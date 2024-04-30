import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import {
  getEntre,
  getEntreJourne,
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

const Sortir = () => {
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
  let nombre = 1;
  
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
    getEntreKinshasa()
      .then((membre) => {
        setetatData(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEntreJourneKinshasa()
      .then((membre) => {
        setetatDataJ(membre);
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
                      <i className="bx bx-log-in"></i>Dubai
                    </h5>
                    <Link
                      to="/Addentrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Faire une transaction
                    </Link>
                    <Link
                      to="/addDepenseKinshasa"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Depense
                    </Link>
                  </div>
                </div>
                <div className="col-sm-8 text-center p-2">
                  <div className="row">
                    <div className="card btn btn-sm btn-outline-primary col-md-3">
                      <div className="card-body ">
                        <p className="font-weight-bold">Dépôt</p>
                        <span className="font-weight-bold">{countDepot}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-outline-primary col-md-3">
                      <div className="card-body ">
                        <p className="font-weight-bold">Sorti</p>
                        <span className="font-weight-bold">{countSorti}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-outline-primary col-md-3">
                      <div className="card-body ">
                        <p className="font-weight-bold">Balance</p>
                        <span className="font-weight-bold">{countTotal}$</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-outline-primary col-md-3">
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
            <div className="card col-md-8">
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
                  >
                    <span className="hidden-sm-up"></span>
                    <span className="hidden-xs-down">
                      <i className="fas fa-mobile-alt"></i>Les transactions
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="home" role="tabpanel">
                  <div className="p-20">
                    <div className="row">
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          value={searchTerm}
                          onChange={handleSearch}
                          placeholder="Recherche"
                        />
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
                            {Array.isArray(etatDataJ) &&
                              etatDataJ
                                .filter((data) => {
                                  if (
                                    typeof data.matricule !== "string" ||
                                    typeof data.nom_emateur !== "string" ||
                                    typeof data.nom_recepteur !== "string" ||
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
                                      .includes(searchTermJourne.toLowerCase())
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
                </div>
                <div className="tab-pane p-20" id="profile" role="tabpanel">
                  <div className="p-20">
                    <div className="tab-pane active" id="home" role="tabpanel">
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
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-md-3">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-md-3">
                            <button className="btn btn-primary">
                              {" "}
                              <i className="bx bx-filter"></i> Filtre
                            </button>
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
                                {Array.isArray(etatData) &&
                                  etatData
                                    .filter((data) => {
                                      if (typeof data.matricule !== "string") {
                                        return false;
                                      }
                                      return data.matricule
                                        .toLowerCase()
                                        .includes(
                                          searchTermJourne.toLowerCase()
                                        );
                                    })
                                    .map((data, index) => (
                                      <EntrerTable
                                        id={data.id}
                                        nom_emateur={data.nom_emateur}
                                        nom_recepteur={data.nom_recepteur}
                                        matricule={data.matricule}
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
            <div className="card col-md-4 ml-2">
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
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th>Montant</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(depenseData) &&
                      depenseData
                        .filter((data) => {
                          if (typeof data.created_at !== "string") {
                            return false;
                          }
                          return data.created_at
                            .toLowerCase()
                            .includes(searchDepense.toLowerCase());
                        })
                        .map((data, index) => (
                          <DepnseTableKinshasa
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
    </>
  );
};

export default Sortir;
