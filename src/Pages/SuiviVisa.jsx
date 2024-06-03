/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AccepeterVisa,
  getCountDepotVisa,
  getCountVisaNonSuivi,
  getCountVisaSuivi,
  getVisa,
} from "../actions/VisaAction";
import Spinner from "../Components/Spinner";
import dateFormat from "dateformat";

const SuiviVisa = () => {
  const getFiveDaysAgo = () => {
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);
    const year = fiveDaysAgo.getFullYear();
    const month = String(fiveDaysAgo.getMonth() + 1).padStart(2, "0");
    const day = String(fiveDaysAgo.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [etatData, setEtatData] = useState([]);
  const [suivi, setsuivi] = useState([]);
  const [nonsuivi, setNonsuivi] = useState([]);
  const [searchTermJourne, setSearchTermJourne] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
  const [loadDate, setTosetloadDatetalPages] = useState(false);
  const [depotCount, setdepotCount] = useState(0);
  const [loading, setloading] = useState(true);
  const [dateFin, setDateFin] = useState(
    new Date().toISOString().split("T")[0]
  );
  let number = 1;
  const handleDateDebutChange = (event) => {
    setTosetloadDatetalPages(true);
    setDateDebut(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
    alert();
  };

  const handleDateFinChange = (event) => {
    setTosetloadDatetalPages(true);
    setDateFin(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
  };
  useEffect(() => {
    getVisa(dateDebut, dateFin)
      .then((data) => {
        setEtatData(data);
        setloading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dateDebut, dateFin]);

  useEffect(() => {
    getCountDepotVisa()
      .then((data) => {
        setdepotCount(data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCountVisaNonSuivi()
      .then((data) => {
        setNonsuivi(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCountVisaSuivi()
      .then((data) => {
        setsuivi(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchJour = (event) => {
    setSearchTermJourne(event.target.value);
  };

  const deleteDepenseHandlerUser = async (id) => {
    try {
      await dispatch(AccepeterVisa(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 mb-4 order-0">
            <div className="card">
              <div className="d-flex row">
                <div className="col-sm-5">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-card"></i>Suivi dossier visa
                    </h5>
                    <Link
                      to="/EntreVisa"
                      class="btn btn-sm btn-outline-primary me-2"
                    >
                      + Créer Dossier Visa
                    </Link>
                    <Link
                      to="/SuiviVisa"
                      class="btn btn-sm btn-outline-primary me-2"
                    >
                      * Suivi Dossier Visa
                    </Link>
                    <Link
                      to="/SortieVisa"
                      className="btn btn-sm btn-outline-primary "
                    >
                      - Sortie Visa
                    </Link>
                  </div>
                </div>
                <div className="col-sm-7 text-center p-2">
                  <div className="row">
                    <div className="card btn btn-sm btn-success col-md-4 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">
                          Total dossier accepter
                        </p>
                        <span className="font-weight-bold">{suivi}</span>
                      </div>
                    </div>
                    <div className="card btn btn-sm btn-danger col-md-4 m-2">
                      <div className="card-body ">
                        <p className="font-weight-bold">Total dossier refuse</p>
                        <span className="font-weight-bold">{nonsuivi}</span>
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
            <div className="col-12 col-lg-12">
              <div className="card">
                <div className="tab-content tabcontent-border">
                  <div className="tab-pane active" id="home" role="tabpanel">
                    <div className="p-20">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            placeholder="Rechercher un par nom, prenom et postnom"
                            value={searchTermJourne}
                            onChange={handleSearchJour}
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="date"
                                value={dateDebut}
                                onChange={handleDateDebutChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="date"
                                value={dateFin}
                                onChange={handleDateFinChange}
                              />
                            </div>
                          </div>
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
                    <center>{loadDate ? <Spinner /> : ""}</center>

                    <div className="card"></div>
                    <table className="table table-bordered">
                      <thead>
                        <tr className="bg-primary">
                          <th className="text-white">N°</th>
                          <th className="text-white">Nom</th>
                          <th className="text-white">Numero</th>
                          <th className="text-white">Postnom</th>
                          <th className="text-white">Prenom</th>
                          <th className="text-white">Nationalite</th>
                          <th className="text-white">Adresse</th>
                          <th className="text-white">Telephone</th>
                          <th className="text-white">Date</th>
                          <th className="text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(etatData) &&
                          etatData
                            .filter((data) => {
                              if (
                                typeof data.nom !== "string" ||
                                typeof data.postnom !== "string" ||
                                typeof data.prenm !== "string" ||
                                typeof data.passeport !== "string"
                              ) {
                                return false;
                              }
                              return (
                                data.nom
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase()) ||
                                data.postnom
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase()) ||
                                data.prenm
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase()) ||
                                data.passeport
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase())
                              );
                            })
                            .map((data, index) => (
                              <tr key={data.id}>
                                <td>{number++}</td>
                                <td>{data.nom}</td>
                                <td>{data.numero}</td>
                                <td>{data.postnom}</td>
                                <td>{data.prenm}</td>
                                <td>{data.nationalite}</td>
                                <td>{data.adresse}</td>
                                <td>{data.telephone}</td>
                                <td>
                                  {dateFormat(data.created_at, "dd/mm/yyyy")}
                                </td>
                                <td>
                                  <button
                                    onClick={() =>
                                      deleteDepenseHandlerUser(data.id)
                                    }
                                    type="reset"
                                    className={
                                      data.etat === 1
                                        ? "btn btn-success"
                                        : "btn btn-danger"
                                    }
                                  >
                                    {data.etat === 1 ? "Acceter" : "Refusé"}
                                  </button>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                    <center>{loading ? <Spinner /> : ""}</center>
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

export default SuiviVisa;
