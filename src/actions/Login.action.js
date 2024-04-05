import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const LOGIN_USER = "LOGIN_USER";


export const getLogin = (formData) => {
  return (dispatch) => {
    return axioClient.post(`SignInUser`, formData).then((response) => {
      const token = response.data.token; 
      localStorage.setItem('token', token);
      localStorage.setItem('ville', response.data.data.id_ville);
      dispatch({ type: LOGIN_USER, payload: response.data.data });
    }).catch((error) => {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      throw error;
    });
  };
};
