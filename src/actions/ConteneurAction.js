import axioClient from '../axiosClient';
import Swal from "sweetalert2";


export const getConteneur = () => {
    return axioClient.get(`Conteneur`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${error}`
            });
        });
};

export const getConteneuClient = (id) => {
    return axioClient.get(`clientConteneur/${id}`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${error}`
            });
        });
};

export const postConteneur = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`Conteneur`, formData);
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