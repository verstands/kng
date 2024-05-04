import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getcloture = () => {
    return axioClient.get(`cloture`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${error}`
            });
        });
};

export const getclotureListe = () => {
    return axioClient.get(`clotureListe`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${error}`
            });
        });
};

export const postCloture = (formData) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de cloturer?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, je cloture!',
            cancelButtonText: 'Annuler'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const response = await axioClient.post(`cloture`, formData);
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