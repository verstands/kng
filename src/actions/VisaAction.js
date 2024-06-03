import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const getVisa = (dateDebut, dateFin) => {
    return axioClient
      .get(`indexVisa/${dateDebut}/${dateFin}`)
      .then((response) => {
        return  response.data.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("ok");
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la récupération des données",
            text: `${error}`,
          });
        }
        return Promise.reject(error);
      });
  };

  export const getCountDepotVisa = () => {
    return axioClient
      .get(`depotVisaCount`)
      .then((response) => {
        return  response.data.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("ok");
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la récupération des données",
            text: `${error}`,
          });
        }
        return Promise.reject(error);
      });
  };

  export const getCompteVisa = () => {
    return axioClient
      .get(`compte_visa`)
      .then((response) => {
        return  response.data.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("ok");
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la récupération des données",
            text: `${error}`,
          });
        }
        return Promise.reject(error);
      });
  };

  export const postVisa = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`visa`, formData);
        Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "Veuillez vérifier vos informations de connexion.",
        });
        throw error;
      }
    };
  };

  export const deleteVisa = (id) => {
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
            const response = await axioClient.delete(`visa/${id}`);
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

  export const AccepeterVisa = (id) => {
    return async (dispatch) => {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui!',
        cancelButtonText: 'Annuler'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axioClient.delete(`AccepterNon/${id}`);
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

  export const getCountVisaNonSuivi = () => {
    return axioClient
      .get(`CountNonSuiviVisa`)
      .then((response) => {
        return  response.data.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("ok");
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la récupération des données",
            text: `${error}`,
          });
        }
        return Promise.reject(error);
      });
  };

  export const getCountVisaSuivi = () => {
    return axioClient
      .get(`CountSuiviVisa`)
      .then((response) => {
        return  response.data.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("ok");
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la récupération des données",
            text: `${error}`,
          });
        }
        return Promise.reject(error);
      });
  };