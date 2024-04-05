import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getDepense = (dataId) => {
    return axioClient.get(`depenses/${dataId}`)
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

export const getDepenseDetail = (dataId) => {

    return axioClient.get(`depense/${dataId}`)
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