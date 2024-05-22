import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Link, useParams } from "react-router-dom";
import { getConteneuClient, getConteneurID } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { getDepenseConteneurTotal } from "../actions/DepenseConteneurAction";

const ClientConteneur = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [dataClient, setDataClient] = useState([]);
  let { id } = useParams();
  let number = 1;
  const [total, setTotal] = useState(0);
  const [dataDetteID, setdataDetteID] = useState([]);

  const sommeMontantPaye = dataClient.reduce(
    (acc, curr) => acc + curr.montantpayer,
    0
  );
  const sommeMontantPayeRecu = dataClient.reduce(
    (acc, curr) => acc + curr.montant,
    0
  );
  const sommereste = sommeMontantPayeRecu - sommeMontantPaye;

  useEffect(() => {
    getConteneuClient(id)
      .then((membre) => {
        setDataClient(membre);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
    getConteneurID(id)
      .then((membre) => {
        setdataDetteID(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                      <i className="bx bx-moneys"></i> Detail du conteneur  :
                      <span style={{ color: "red" }}>
                        { dataDetteID.nom_conteneur}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-5 text-center text-sm-left"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="row">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                        <Link to={`/PrintClientConteneur/${id}`}>
                          <i
                            className="bx bx-printer me-1"
                            style={{ fontSize: "40px" }}
                          ></i>
                        </Link>
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
                          <th className="text-white">Noms</th>
                          <th className="text-white">Facture($)</th>
                          <th className="text-white">Montant reçu($)</th>
                          <th className="text-white">Reste($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(dataClient) &&
                          dataClient.map((data, index) => (
                            <tr key={index}>
                              <td>{number++}</td>
                              <td>
                                <strong>{data.nom_client}</strong>
                              </td>
                              <td>
                                <strong>{data.montant}</strong>
                              </td>
                              <td>
                                <strong>{data.montantpayer}</strong>
                              </td>
                              <td>{data.montant - data.montantpayer}</td>
                            </tr>
                          ))}
                        <tr className="">
                          <th className=" text-black"></th>
                          <th className="text-black">
                            <strong>TOTAL</strong>
                          </th>
                          <th className="text-black">{sommeMontantPayeRecu}</th>
                          <th className="bg-warning text-black">
                            <strong>{sommeMontantPaye}</strong>
                          </th>
                          <th className=" bg-danger text-white">
                            <strong>{sommereste}</strong>
                          </th>
                        </tr>
                        <tr className="">
                          <th className=" text-black"></th>
                          <th className="text-black">
                            <strong>Depenses</strong>
                          </th>
                          <th className="text-black"></th>
                          <th className="bg-success text-black">
                            <strong>{total}</strong>
                          </th>
                          <th className="">
                            <strong></strong>
                          </th>
                        </tr>
                        <tr className="">
                          <th
                            style={{ backgroundColor: "black" }}
                            className="text-white"
                          ></th>
                          <th
                            style={{ backgroundColor: "black" }}
                            className="text-white"
                          >
                            Total
                          </th>
                          <th
                            style={{ backgroundColor: "black" }}
                            className="text-white"
                          ></th>
                          <th
                            style={{ backgroundColor: "black" }}
                            className="text-white"
                          >
                            <strong>{sommeMontantPaye - total}</strong>
                          </th>
                          <th className="">
                            <strong></strong>
                          </th>
                        </tr>
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

export default ClientConteneur;
