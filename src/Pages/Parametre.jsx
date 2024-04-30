import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../actions/Login.action";
import dateFormat from "dateformat";
import { deleteTypeDepense, gettypedepense } from "../actions/TypeDepnse";
import { useDispatch } from "react-redux";

const Parametre = () => {
  const [isLoading, setloading] = useState(true);
  const [datausers, setdatausers] = useState([]);
  const [datadepense, setdatadepense] = useState([]);
  const [searchTermJourne, setSearchTermJourne] = useState("");
  let number = 1;
  let numberDepense = 1;
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then((membre) => {
        setdatausers(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    gettypedepense()
      .then((membre) => {
        setdatadepense(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDepenseHandler = async (id) => {
    try {
      await dispatch(deleteTypeDepense(id));
      await gettypedepense();
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  const handleSearchJour = (event) => {
    setSearchTermJourne(event.target.value);
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
                      <i className="bx bx-user"></i>Parametre
                    </h5>
                    <Link
                      to="/addtypetransaction"
                      className="btn btn-sm btn-outline-primary"
                    >
                      + Ajouter un type de transaction
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="row">
            <div className="card col-md-12">
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
                      <i className="fas fa-list"></i>Type depense
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
                      <i className="fas fa-mobile-alt"></i>profile
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
                          placeholder="Recherche"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card">
                    <div className="table-responsive text-nowrap">
                      <table className="table table-borderle">
                        <thead>
                          <tr>
                            <th>N°</th>
                            <th>Intitule</th>
                            <th>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(datadepense) &&
                            datadepense
                              .filter((data) => {
                                if (typeof data.intitule !== "string") {
                                  return false;
                                }
                                return data.intitule
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase());
                              })
                              .map((data, index) => (
                                <tr key={data.id}>
                                  <td>{numberDepense++}</td>
                                  <td>{data.intitule}</td>
                                  <td>
                                    {dateFormat(data.created_at, "dd/mm/yyyy")}
                                  </td>
                                  <td>
                                    <Link
                                      to=""
                                      onClick={() =>
                                        deleteDepenseHandler(data.id)
                                      }
                                    >
                                      <i class="bx bx-trash me-1"></i>
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br />
                </div>
                <div className="tab-pane p-20" id="profile" role="tabpanel">
                  <div className="card">
                    <div className="p-20">
                      <div className="row">
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            value={searchTermJourne}
                            onChange={handleSearchJour}
                            placeholder="Recherche"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive text-nowrap"></div>
                    <table className="table table-borderle">
                      <thead>
                        <tr>
                          <th>N°</th>
                          <th>Nom</th>
                          <th>Postnom</th>
                          <th>Email</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(datausers) &&
                          datausers
                            .filter((data) => {
                              if (
                                typeof data.nom !== "string" ||
                                typeof data.postnom !== "string" ||
                                typeof data.id_ville !== "string" ||
                                typeof data.email !== "string"
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
                                data.id_ville
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase()) ||
                                data.email
                                  .toLowerCase()
                                  .includes(searchTermJourne.toLowerCase())
                              );
                            })
                            .map((data, index) => (
                              <tr key={data.id}>
                                <td>{number++}</td>
                                <td>{data.nom}</td>
                                <td>{data.postnom}</td>
                                <td>{data.email}</td>
                                <td>
                                  {dateFormat(data.created_at, "dd/mm/yyyy")}
                                </td>
                                <td>
                                  <a href="javascript:void(0);">
                                    <i class="bx bx-trash me-1"></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
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

export default Parametre;
