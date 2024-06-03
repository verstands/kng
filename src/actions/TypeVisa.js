import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const getCountDepenseVisa = () => {
    return axioClient
      .get(`countDepenseVisa`)
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


  export const getTypeVisa = () => {
    return axioClient
      .get(`typevisa`)
      .then((response) => {
        console.log(response.data.data)
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


  export const getTypeVisaId = (id) => {
    return axioClient
      .get(`typevisa/${id}`)
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

  export const postTypeVisa = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`typevisa`, formData);
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
        throw error; // Renvoie l'erreur pour le traitement ultérieur
      }
    };
  };

  export const updateTypeVisa = (id, formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.put(`typevisa/${id}`, formData);
        Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
         window.location.href = "/Typevisa"

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


  export const deleteTypeVisa = (id) => {
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
            const response = await axioClient.delete(`typevisa/${id}`);
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
