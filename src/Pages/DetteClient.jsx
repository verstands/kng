import React, { useEffect, useState } from "react";
import EntrerTable from "../Components/EntrerTable";
import { Link } from "react-router-dom";
import DetteTablea from "../Components/DetteTablea";
import { getDette } from "../actions/DetteClientAction";
import Spinner from "../Components/Spinner";

const DetteClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataDette, setdataDette] = useState([]);
  const [isLoading, setloading] = useState(true);

  useEffect(() => {
    getDette()
      .then((membre) => {
        setdataDette(membre);

        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-wallet"></i> Les dettes des clients
                    </h5>
                    <Link
                      to="/dettePartenaire"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Dette partenaire
                    </Link>
                  </div>
                </div>
                <div className="col-sm-5 text-center text-sm-left"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-lg-12">
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
                        <i className="fas fa-list"></i>Dette Client
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
                        <i className="fas fa-mobile-alt"></i>Dette Partenaire
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content tabcontent-border">
                  <div className="tab-pane active" id="home" role="tabpanel">
                    <div className="p-20">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            value={searchTerm}
                            onChange={handleSearchDette}
                            placeholder="Recherche"
                          />
                        </div>
                        <div className="col-md-3">
                          <i className="bx bx-printer text-primary fs-2 me-1"></i>  
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
                              <th className="text-white">Nom recepeteur</th>
                              <th className="text-white">Matricule</th>
                              <th className="text-white">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(dataDette) &&
                              dataDette
                                .filter((data) => {
                                  if (
                                    typeof data.id_transaction.nom_emateur !==
                                      "string" ||
                                    typeof data.id_transaction.nom_recepteur !==
                                      "string" ||
                                    typeof data.id_transaction.matricule !==
                                      "string"
                                  ) {
                                    return false;
                                  }
                                  return (
                                    data.id_transaction.nom_emateur
                                      .toLowerCase()
                                      .includes(searchTerm.toLowerCase()) ||
                                    data.id_transaction.nom_recepteur
                                      .toLowerCase()
                                      .includes(searchTerm.toLowerCase()) ||
                                    data.id_transaction.matricule
                                      .toLowerCase()
                                      .includes(searchTerm.toLowerCase())
                                  );
                                })
                                .map((data, index) => (
                                  <DetteTablea
                                    id={data.id}
                                    nom_emateur={
                                      data.id_transaction.nom_emateur
                                    }
                                    nom_recepteur={
                                      data.id_transaction.nom_recepteur
                                    }
                                    matricule={data.id_transaction.matricule}
                                    key={index}
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
                                value=""
                              />
                            </div>
                            <div className="col-md-3">
                          <i className="bx bx-printer text-primary fs-2 me-1"></i>  
                        </div>
                          </div>
                        </div>
                        <hr />
                        <div className="card">
                          <table className="table table-bordered">
                            <thead>
                              <tr className="bg-primary">
                                <th className="text-white">N°</th>
                                <th className="text-white">Nom_emeteur</th>
                                <th className="text-white">Nom recepeteur</th>
                                <th className="text-white">Matricule</th>
                                <th className="text-white">Actions</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
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
      </div>
    </div>
      
    </>
  );
};

export default DetteClient;
