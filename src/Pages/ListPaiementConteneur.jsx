import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link, useParams } from "react-router-dom";
import { getDepenseConteneur } from "../actions/DepenseConteneurAction";
import dateFormat from "dateformat";

const ListPaiementConteneur = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataDette, setdataDette] = useState([]);
  const [isLoading, setloading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getDepenseConteneur(id)
      .then((membre) => {
        setdataDette(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); // Ajouter id comme dépendance

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
                      <i className="bx bx-moneys"></i> Les paiement de conteneur
                      :{" "}
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recherche"
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
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
                              if (typeof data.montant !== "string") {
                                return false;
                              }
                              return data.montant
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());
                            })
                            .map((d) => {
                              return (
                                <tr key={d.id}>
                                  <td>
                                    <button className="btn btn-primary"></button>
                                  </td>
                                  <td>
                                    <strong>nom_conteneur</strong>
                                  </td>
                                  <td>
                                    <strong>numero</strong>
                                  </td>
                                  <td>
                                    <strong>
                                      {dateFormat(d.created_at, "dd/mm/yyyy")}
                                    </strong>
                                  </td>
                                  <td>
                                    <Link to={`/depensedetail/${id}`}>
                                      <i className="bx bx-trash me-1"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
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

export default ListPaiementConteneur;
