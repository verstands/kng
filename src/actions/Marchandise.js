import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const getAllgroupage = (id) => {
  return axioClient
    .get(`groupageuser/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: `Entre/${error}`,
      });
    });
};
