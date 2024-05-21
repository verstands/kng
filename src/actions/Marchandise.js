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

export const getMarchaniseId = (id) => {
  return axioClient
    .get(`showClientMr/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
        if(error.response.status === 404){
            
        }else{
            Swal.fire({
                icon: "error",
                title: "Erreur lors de la récupération des données",
                text: `Entre/${error}`,
              });
        }
    });
};


export const deletemarchandise = (id) => {
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
          const response = await axioClient.delete(`marchandise/${id}`);
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
          window.location.reload()
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