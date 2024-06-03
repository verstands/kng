import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../actions/Login.action";
import dateFormat from "dateformat";
import { deleteTypeDepense, gettypedepense } from "../actions/TypeDepnse";
import { useDispatch } from "react-redux";
import Spinner from "../Components/Spinner";
import { deleteTypeVisa, getTypeVisa } from "../actions/TypeVisa";

const TypeVisa = () => {
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
    getTypeVisa()
      .then((membre) => {
        setdatadepense(membre);
        console.log(membre)
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDepenseHandler = async (id) => {
    try {
      await dispatch(deleteTypeVisa(id));
      await getTypeVisa();
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
              <div className="d-flex align-items-end row">
                <div className="col-sm-4">
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                      <i className="bx bx-user"></i>Parametre
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
                    <Link
                      className="nav-link"
                      to="/ListeUser"
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">
                        <i className="fas fa-mobile-alt"></i>Liste des utilisateurs
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
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
                    <div className="p-20">
                      <div className="row">
                        <div className="col-md-10">
                          
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="card">
                      <div className="table-responsive text-nowrap">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-primary">
                              <th className="text-white">N°</th>
                              <th className="text-white">Intitule</th>
                              <th className="text-white">Montant</th>
                              <th className="text-white">Date</th>
                              <th className="text-white">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(datadepense) &&
                              datadepense
                                .map((data, index) => (
                                  <tr key={data.id}>
                                    <td>{numberDepense++}</td>
                                    <td>{data.intitule}</td>
                                    <td>{data.montant}</td>
                                    <td>
                                      {dateFormat(
                                        data.created_at, 
                                        "dd/mm/yyyy"
                                      )}
                                    </td>
                                    <td>
                                      <Link
                                        to=""
                                        onClick={() =>
                                          deleteDepenseHandler(data.id)
                                        }
                                      >
                                        <i class="bx bx-trash fs-2 me-1"></i>
                                      </Link>
                                      <Link
                                        to={`/UpdateTypeVisa/${data.id}`}
                                      >
                                        <i class="bx bx-edit fs-2 me-1"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                          </tbody>
                        </table>
                        <center>{isLoading ? <Spinner /> : ""}</center>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="tab-pane p-20" id="profile" role="tabpanel">
                    <div className="card">
                      <div className="p-20">
                    
                      </div>
                      <div className="table-responsive text-nowrap"></div>
                     
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

export default TypeVisa;
