import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getSortie = (dataId) => {
    return axioClient.get(`Sortis/${dataId}`)
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

export const getSortiJourne = (dataId) => {
    
        return axioClient.get(`Sorti_Jour/${dataId}`)
            .then((response) => {
               return response.data.data.data ;
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: error.message
                });
            });
};