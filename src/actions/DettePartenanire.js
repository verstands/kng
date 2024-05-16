import axioClient from "../axiosClient";
import Swal from "sweetalert2";

//const ville = localStorage.getItem('ville');
export const getDettePartenanre = (dataId) => {
  return axioClient
    .get(`DettePartenaire`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: `Entre/${dataId}`,
      });
    });
};

export const deleteDettePartenaire = (id) => {
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
            const response = await axioClient.delete(`DettePartenaire/${id}`);
            Swal.fire({
              icon: "success",
              title: `${response.data.message}`,
            });
            window.location.reload();
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

  export const postDettePartenaire = (formData) => {
    return async (dispatch) => {
          try {
            const response = await axioClient.post(`DettePartenaire`, formData);
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
  };
