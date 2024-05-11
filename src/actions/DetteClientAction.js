import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getDette = (dataId) => {
    return axioClient.get(`Dette`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${dataId}`
            });
        });
};

export const deleteDetteClient = (id) => {
    return async (dispatch) => {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!',
        cancelButtonText: 'Annuler'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axioClient.delete(`Dette/${id}`);
            Swal.fire({
              icon: "success",
              title: `${response.data.message}`,
            });
            window.location.reload()
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
