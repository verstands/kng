import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const getDepenseConteneur = (id) => {
  return axioClient
    .get(`DepenseConteneur/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        window.location.href = "/";
      } else {
      }
    });
};

export const postDepenseConteneur = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`DepenseConteneur`, formData);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "montant elevé",
      });
      throw error; // Renvoie l'erreur pour le traitement ultérieur
    }
  };
};

export const deleteDepenseConteneur = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axioClient.delete(`DepenseConteneur/${id}`);
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la suppression de la dépense",
            text: `${error.response.data.message}`,
          });
          throw error;
        }
      }
    });
  };
};
