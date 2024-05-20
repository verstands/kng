import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const LOGIN_USER = "LOGIN_USER";


export const getLogin = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`SignInUser`, formData);
      const token = response.data.token; 
      localStorage.setItem('token', token);
      localStorage.setItem('data', JSON.stringify(response.data.data));
      return response.data; // Retourne les données si la connexion réussit
    } catch (error) {
      if(error.response.status === 500){
        Swal.fire({
          icon: "error",
          title: `Erreur de a connexion`,
          text: "Veuillez votre connexion internet ",
        });
      }else{
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "Veuillez vérifier vos informations de connexion.",
        });
      }
      throw error; // Renvoie l'erreur pour le traitement ultérieur
    }
  };
};


export const getUsers = () => {
  return axioClient
    .get(`users`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

export const getProfile = () => {
  return axioClient
    .get(`profile`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};


export const postUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`adduser`, formData);
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
  };
};

export const puttUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.put(`profileMod`, formData);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
      window.location.href = "/deconnextion"
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la suppression de la dépense",
        text: `${error.response.data.message}`,
      });
      throw error;
    }
  };
};


export const deleteUser = (id) => {
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
          const response = await axioClient.delete(`Deleteuser/${id}`);
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