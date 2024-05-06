import React from "react";
import { Link } from "react-router-dom";
import { deleteEntreDubai, getEntreJourne } from "../actions/EntreAction";
import { useDispatch } from "react-redux";

const EntrerTable = ({
  nom_emateur,
  id,
  nom_recepteur,
  matricule,
  type,
  nombre,
}) => {
  const dispatch = useDispatch();

  let typeText = "";
  let typeColor = "";

  // Vérification de la valeur de type
  if (type === "1") {
    typeText = "Entre";
    typeColor = "red";
  } else if (type === "2") {
    typeText = "Sorti";
    typeColor = "green";
  } else if (type === "3") {
    typeText = "Transaction spacial";
    typeColor = "orange";
  } else {
    typeText = type; // Affiche la valeur de type telle quelle si elle ne correspond à aucun cas
    typeColor = "black"; // Couleur par défaut
  }

  const deleteEntreHandler = async (id) => {
    try {
      await dispatch(deleteEntreDubai(id));
      await getEntreJourne();
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };
  return (
    <>
      <tr>
        <td>
          <i class="fab fa-react fa-lg text-info me-3"></i>{" "}
          <strong>{nombre}</strong>
        </td>
        <td>
          <i class="fab fa-react fa-lg text-info me-3"></i>{" "}
          <strong>{nom_emateur}</strong>
        </td>
        <td>{nom_recepteur}</td>
        <td>{matricule}</td>
        <td className="text-center">
          <p
            style={{
              color: typeColor,
              borderRadius: "10px",
              border: `1px solid ${typeColor}`,
            }}
          >
            {typeText}
          </p>
        </td>
        <td>
          <Link to={`/entreupdate/${id}`}>
            <i class="bx bx-edit-alt fs-4 me-1"> </i>
          </Link>
          <Link to="" onClick={() => deleteEntreHandler(id)}>
            <i class="bx bx-trash fs-4 me-1"></i>
          </Link>
          <Link to={`/entredetail/${id}`}>
            <i class="bx bx-detail fs-4 me-1"></i>
          </Link>
          <Link to={`/ImprimerTransaction/${id}`}>
            <i className="bx bx-printer fs-4 me-1"></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default EntrerTable;
