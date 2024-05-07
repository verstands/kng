import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link, useParams } from "react-router-dom";
import {
  deleteDepenseConteneur,
  getDepenseConteneur,
  getDepenseConteneurTotal,
} from "../actions/DepenseConteneurAction";
import dateFormat from "dateformat";
import { getConteneurID } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";

const ListPaiementConteneur = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [dataDette, setdataDette] = useState([]);
  const [dataDetteID, setdataDetteID] = useState([]);
  const [isLoading, setloading] = useState(true);
  let { id } = useParams();
  const dispatch = useDispatch();
  let numero = 1;

  useEffect(() => {
    getDepenseConteneurTotal(id)
      .then((membre) => {
        setTotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getDepenseConteneur(id)
      .then((membre) => {
        setdataDette(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getConteneurID(id)
      .then((membre) => {
        setdataDetteID(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteDepenseConteneurHandle = async (id) => {
    try {
      await dispatch(deleteDepenseConteneur(id));

      reflesh;
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
                      <i className="bx bx-moneys"></i> Liste des depenses du
                      conteneurs :{" "}
                      <span style={{ color: "red" }}>
                        {dataDetteID.nom_conteneur}
                      </span>
                      <br />
                      <h2>Total : {total}</h2>
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
                        <Link to={`/PrintDepenseConteneur/${dataDetteID.id}`}>
                          <i
                            className="bx bx-printer me-1"
                            style={{ fontSize: "40px" }}
                          ></i>
                        </Link>
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
                          <th className="text-white">N°</th>
                          <th className="text-white">Type depense</th>
                          <th className="text-white">Montant</th>
                          <th className="text-white">Date</th>
                          <th className="text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(dataDette) &&
                          dataDette.map((d) => {
                            return (
                              <tr>
                                <td>{numero++}</td>
                                <td>
                                  <strong>{d.id_typedepense.intitule}</strong>
                                </td>
                                <td>
                                  <strong>{d.montant}</strong>
                                </td>
                                <td>
                                  <strong>
                                    {dateFormat(d.created_at, "dd/mm/yyyy")}
                                  </strong>
                                </td>
                                <td>
                                  <Link
                                    to=""
                                    onClick={() =>
                                      deleteDepenseConteneurHandle(d.id)
                                    }
                                  >
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
