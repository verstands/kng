import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const postClient = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`client`, formData);
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