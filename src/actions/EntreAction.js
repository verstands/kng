import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getEntre = () => {
    return axioClient.get(`EntreDubai`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }

        });
};

export const getEntreJourne = () => {
    return axioClient.get(`EntreJourDubai`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }
        });
};

export const getEntreDetail = () => {
    return axioClient.get(`Entre`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }
        });
};

//kinshasa
export const getEntreKinshasa = () => {
    return axioClient.get(`EntreKinshasa`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }

        });
};

export const getEntreJourneKinshasa = () => {
    return axioClient.get(`EntreJourKinshasa`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }
        });
};

export const getEntreDetailKinshasa = () => {
    return axioClient.get(`Entre`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des données",
                    text: `${error}`
                });
            }
        });
};