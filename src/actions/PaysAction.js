import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getVille = () => {
    return axioClient.get(`Ville`)
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                window.location.href = "/";
            } else {
                window.location.href = "/";
            }

        });
};
