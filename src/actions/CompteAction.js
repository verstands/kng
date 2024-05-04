import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getBalanceKinshasa = () => {
    return axioClient.get(`balanceKinsha`)
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

export const getbalanceDubai2 = () => {
    return axioClient.get(`balanceDubai2`)
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

export const getClientCompteur = () => {
    return axioClient.get(`clientcompteur`)
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