import React, { useEffect, useState } from "react";
import EntrerTable from "../Components/EntrerTable";
import { Link } from "react-router-dom";
import DetteTablea from "../Components/DetteTablea";
import { getDette } from "../actions/DetteClientAction";
import Spinner from "../Components/Spinner";
import {
  deleteDettePartenaire,
  getDettePartenanre,
} from "../actions/DettePartenanire";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";

const ListDettePartenaire = () => {
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
  const [dataDette, setdataDette] = useState([]);
  const [dataDettePartenaire, setdataDettePartenanire] = useState([]);
  const [isLoading, setloading] = useState(true);
  const dispatch = useDispatch();
  const [loadDate, setTosetloadDatetalPages] = useState(false);
  const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
  const [dateFin, setDateFin] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [searchTermJourne, setSearchTermJourne] = useState("");

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

  let numpartenaire = 1;
  useEffect(() => {
    getDette(dateDebut, dateFin)
      .then((membre) => {
        setdataDette(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dateDebut, dateFin]);

  useEffect(() => {
    getDettePartenanre()
      .then((membre) => {
        setdataDettePartenanire(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteDettePartenaireP = async (id) => {
    try {
      await dispatch(deleteDettePartenaire(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
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
                        <i className="bx bx-wallet"></i> Liste de(s) dette(s)
                        partenaire(s)
                      </h5>
                      <Link
                        to="/dettePartenaire"
                        className="btn btn-sm btn-outline-primary"
                      >
                        + Ajouter dette partenaire
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
                            <i className="fas fa-list"></i>Dette(s) partenaire(s)
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
                        <center>{loadDate ? <Spinner /> : ""}</center>
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
                              <div className="row"></div>
                            </div>
                            <hr />
                            <div className="card">
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">
                                      Nom partenanire
                                    </th>
                                    <th className="text-white">
                                      Montant total
                                    </th>
                                    <th className="text-white">
                                      Montant total
                                    </th>
                                    <th className="text-white">Matricule</th>
                                    <th className="text-white">Date</th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Array.isArray(dataDettePartenaire) &&
                                    dataDettePartenaire.map((data, index) => (
                                      <tr>
                                        <td>
                                          <i className=""></i>
                                          <strong>{numpartenaire++}</strong>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>{data.intitule}</strong>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>{data.montant}</strong>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>{data.montantpayer}</strong>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>
                                            {data.transaction_id &&
                                              data.transaction_id.matricule}
                                          </strong>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>
                                            {dateFormat(
                                              data.created_at,
                                              "dd/mm/yyyy"
                                            )}
                                          </strong>
                                        </td>
                                        <td>
                                          <Link
                                            to=""
                                            onClick={() =>
                                              deleteDettePartenaireP(data.id)
                                            }
                                          >
                                            <i className="bx bx-trash fs-2 me-1"></i>
                                          </Link>
                                          <Link
                                            to={`/paiementDettePartenaire/${data.id}`}
                                          >
                                            <i className="bx bx-money fs-2 me-1"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
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
        </div>
      </div>
    </>
  );
};

export default ListDettePartenaire;
