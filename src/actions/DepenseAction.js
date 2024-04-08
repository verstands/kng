import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getDepenseDubai = () => {
    return axioClient.get(`depenseDubaiJour`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            window.location.href = "/";
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