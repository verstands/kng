import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getEntre = (dataId) => {
    return axioClient.get(`Entres/${dataId}`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${dataId}`
            });
        });
};

export const getEntreJourne = (dataId) => {

    return axioClient.get(`Entre_Jour/${dataId}`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: error.message
            });
        });
};

export const getEntreDetail = (dataId) => {

    return axioClient.get(`Entre/${dataId}`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: error.message
            });
        });
};