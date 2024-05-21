/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axioClient from "../axiosClient";
import Spinner from "./Spinner";
import { deleteConteneur, getConteneuClient } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/ClientAction";

const ConteneurTable = ({ nom_conteneur, id, created_at, numero }) => {
  const [dataClient, setDataClient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTable, setActiveTable] = useState(null);
  const dispatch = useDispatch();


  const handleInactive = () => {
    setActiveTable(null);
  };

  const handleClient = (id_client) => {
    setIsLoading(true);
    getConteneuClient(id_client)
      .then((membre) => {
        setDataClient(membre);
        console.log(membre);
        setIsLoading(false);
        setActiveTable(id_client);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const deleteConteneurHandle = async (id) => {
    try {
      await dispatch(deleteConteneur(id));
      
   reflesh
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      await dispatch(deleteUser(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  return (
    <>
      <tr>
        <td>
          <button
            onClick={() =>
              activeTable === id ? handleInactive() : handleClient(id)
            }
            className="btn btn-primary"
          >
            {activeTable === id ? "-" : "+"}
          </button>
        </td>
        <td>
          <strong>{nom_conteneur}</strong>
        </td>
        <td>
          <strong>{numero}</strong>
        </td>
        <td>
          <strong>{created_at}</strong>
        </td>
        <td>
          <Link to="" onClick={() => deleteConteneurHandle(id)}>
            <i className="bx bx-trash fs-2 me-1"></i>
          </Link>
          <Link to={`/depenseConteneur/${id}`}>
            <i className="bx bx-money fs-2 me-1"></i>
          </Link>
          <Link to={`/listegroupageUser/${id}`}>
            <i className="bx bx-printer fs-2 me-1"></i>
          </Link>
          <Link to={`/ClientConteneur/${id}`}>
          <i className="bx bx-user fs-2 me-1"></i>
        </Link>
        </td>
      </tr>
      {
        isLoading ? (
          <center>
            <Spinner />
          </center>
        ) : (
        activeTable === id && (
        <tr key={id} className="container">
          <td colSpan={8}>
            <table className="table table-bordered">
              <thead>
                <tr className="bg-dark">
                  <th className="text-white">N°</th>
                  <th className="text-white">Nom client</th>
                  <th className="text-white">Telephone</th>
                  <th className="text-white">Montant Total</th>
                  <th className="text-white">Montant Payer</th>
                  <th className="text-white">Date</th>
                  <th className="text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="text-center">
                      {" "}
                      <Spinner />{" "}
                    </td>
                  </tr>
                ) : (
                  dataClient.map((client, index) => (
                    <tr key={index}>
                      <td className="text-danger">{index + 1}</td>
                      <td>{client.nom_client}</td>
                      <td>{client.telephone}</td>
                      <td>{client.montant}</td>
                      <td>{client.montantpayer}</td>
                      <td>{dateFormat(client.created_at, "dd/mm/yyyy")}</td>
                      <td>
                        <Link to="" onClick={() =>
                            deleteUserHandler(client.id)
                          }>
                          <i className="bx bx-trash me-1 fs-2"></i>
                        </Link>
                        <Link to={`/PayementConteneurUser/${client.id}`}>
                          <i className="bx bx-money me-1 fs-2"></i>
                        </Link>
                        <Link to={`/UpdateClient/${client.id}`}>
                          <i className="bx bx-edit me-1 fs-2"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </td>
        </tr>
      )
      )}
    </>
  );
};

export default ConteneurTable;
