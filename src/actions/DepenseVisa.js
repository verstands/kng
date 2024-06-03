import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getdepenseVisa = () => {
    return axioClient.get(`depensevisa`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: `${error}`
            });
        });
};

export const postDepenseVisa = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`depensevisa`, formData);
        Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
          window.location.reload();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "Veuillez vérifier vos informations de connexion.",
        });
        throw error; // Renvoie l'erreur pour le traitement ultérieur
      }
    };
  };

  export const deleteDepenseVisa = (id) => {
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
            const response = await axioClient.delete(`depensevisa/${id}`);
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
