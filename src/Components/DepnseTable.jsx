import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { deleteDepense } from "../actions/DepenseAction";
import { useDispatch } from "react-redux";

const DepnseTable = ({ montant, id, created_at }) => {
  const dispatch = useDispatch();

  const deleteDepenseHandler = async (id) => {
    try {
      await dispatch(deleteDepense(id));
      await dispatch(balanceDubai());
      await dispatch(getDepenseDubai());
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  return (
    <tr>
      <td>
        <i class=""></i> <strong>{montant}$</strong>
      </td>
      <td>
        <i class=""></i> <strong>{dateFormat(created_at, "dd/mm/yyyy")}</strong>
      </td>
      <td>
        <Link to="" onClick={() => deleteDepenseHandler(id)}>
          <i class="bx bx-trash me-1"></i>
        </Link>
        <Link to={`/depensedetail/${id}`}>
          <i class="bx bx-detail me-1"></i>
        </Link>
      </td>
    </tr>
  );
};

export default DepnseTable;
