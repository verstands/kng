import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import { getUsers } from "../../actions/Login.action";
import Spinner from "../../Components/Spinner";

const ListeUser = () => {
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

  const deleteDepenseHandlerUser = async (id) => {
    try {
      await dispatch(deleteUser(id));
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
                      <i className="bx bx-user"></i>Liste des utilisateurs
                    </h5>
                    <div className="d-flex gap-2">
                      <Link
                        to="/addtypetransaction"
                        className="btn btn-sm btn-outline-primary"
                      >
                        + Ajouter un type de transaction
                      </Link>
                      <Link
                        to="/utilisateur"
                        className="btn btn-sm btn-outline-primary"
                      >
                        + Ajouter un utilisateur
                      </Link>
                      <Link
                      to="/Addtypevisa"
                      className="btn btn-sm btn-outline-primary"
                    >
                      + Ajouter type visa
                    </Link>
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
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Parametre"
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">
                        <i className="fas fa-list"></i>Type depense
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">
                        <i className="fas fa-list"></i>Les utilisateurs
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Typevisa"
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">
                        <i className="fas fa-mobile-alt"></i>Liste des type de visa
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="tab-content tabcontent-border">
                  <div className="tab-pane active" id="home" role="tabpanel">
                    <div className="card">
                      <div className="table-responsive text-nowrap"></div>
                      <table className="table table-bordered">
                        <thead>
                          <tr className="bg-primary">
                            <th className="text-white">N°</th>
                            <th className="text-white">Nom</th>
                            <th className="text-white">Postnom</th>
                            <th className="text-white">Email</th>
                            <th className="text-white">Date</th>
                            <th className="text-white">Actions</th>
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
                                    <Link
                                      to=""
                                      onClick={() =>
                                        deleteDepenseHandlerUser(data.id)
                                      }
                                    >
                                      <i class="bx bx-trash fs-2 me-1"></i>
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                        </tbody>
                      </table>
                      <center>{isLoading ? <Spinner /> : ""}</center>
                    </div>
                    <br />
                  </div>
                  <div
                    className="tab-pane p-20"
                    id="homess"
                    role="tabpanel"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeUser;
