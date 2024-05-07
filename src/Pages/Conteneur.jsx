import React, { useEffect, useState } from "react";
import EntrerTable from "../Components/EntrerTable";
import { Link, useParams } from "react-router-dom";
import DetteTablea from "../Components/DetteTablea";
import { getConteneur, getConteneurID } from "../actions/ConteneurAction";
import Spinner from "../Components/Spinner";
import ConteneurTable from "../Components/ConteneurTable";

const Conteneur = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataDette, setdataDette] = useState([]);
  const [isLoading, setloading] = useState(true);
  

  useEffect(() => {
    getConteneur()
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
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-archive"></i> Les Groupages
                    </h5>
                    <Link
                      to="/AddGroupage"
                      class="btn btn-sm btn-outline-primary"
                    >
                      + Creer un conteneur
                    </Link>
                    <Link
                      to="/AffecterUser"
                      class="btn btn-sm btn-outline-primary"
                    >
                      <i className="bx bx-user"></i>Affecter un client dans un
                      conteneur
                    </Link>
                  </div>
                </div>
                <div className="col-sm-5 text-center text-sm-left"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recherche"
                          value={searchTerm}
                          onChange={handleSearchDette}
                        />
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
                    {isLoading ? (
                      <div className="text-center">
                        <Spinner />
                      </div>
                    ) : (
                      <table className="table table-bordered">
                        <thead>
                          <tr className="bg-primary">
                            <th className="text-white"></th>
                            <th className="text-white">Nom</th>
                            <th className="text-white">Numero</th>
                            <th className="text-white">Date</th>
                            <th className="text-white">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(dataDette) &&
                            dataDette
                              .filter((data) => {
                                if (
                                  typeof data.nom_conteneur !== "string" ||
                                  typeof data.numero !== "string" ||
                                  typeof data.created_at !== "string"
                                ) {
                                  return false;
                                }
                                return (
                                  data.nom_conteneur
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  data.numero
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  data.created_at
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                );
                              })
                              .map((data, index) => (
                                <ConteneurTable
                                  id={data.id}
                                  nom_conteneur={data.nom_conteneur}
                                  numero={data.numero}
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
        </div>
      </div>
    </>
  );
};

export default Conteneur;
