import React, { useEffect, useState } from "react";
import EntrerTable from "../Components/EntrerTable";
import { Link } from "react-router-dom";
import DetteTablea from "../Components/DetteTablea";
import { getConteneur } from "../actions/ConteneurAction";
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
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
          <div class="col-lg-12 mb-4 order-0">
            <div class="card">
              <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title text-primary">
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
                      <table className="table table-borderle">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Numero</th>
                            <th>Date</th>
                            <th>Actions</th>
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
    </>
  );
};

export default Conteneur;
