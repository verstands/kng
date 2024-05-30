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

const ListTransactionDubai = () => {
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
                            <i className="fas fa-list"></i>Les transactions
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
                        <hr />
                        <div className="card">
                          {isLoading ? (
                            <div className="text-center">
                              <Spinner />
                            </div>
                          ) : (
                            <LesTransaction />
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

export default ListTransactionDubai;
