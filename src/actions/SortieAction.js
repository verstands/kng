import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getSortie = (dataId) => {
  return axioClient
    .get(`Sortis/${dataId}`)
    .then((response) => {
      return response.data.data.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: `Entre/${dataId}`,
      });
    });
};

export const getSortiJourne = (page) => {
  return axioClient
    .get(`Sorti_Jour?page=${page}`)
    .then((response) => {
        return {
            membres: response.data.data.data,
            totalPages: response.data.data.last_page,
        };
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: error.message,
      });
    });
};

export const getEntreJourneAllKin = () => {
  return axioClient
    .get(`EntreJourDubaiAllKin`)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: error.message,
      });
    });
};

export const getEntreJourneAllsKin = (datadebut, datefin) => {
  return axioClient
    .get(`EntreJourDubaiAllsKin/${datadebut}/${datefin}`)
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la récupération des données",
        text: error.message,
      });
    });
};

export const getCounrDepotKinshasa = () => {
  return axioClient
    .get(`EntreKinshasaJourCountEntre`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

export const getCounrRetraitKinshasa = () => {
  return axioClient
    .get(`SortiKinshasaJourCountSorti`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

export const SortiKinshasaJourCountSortiTs = () => {
  return axioClient
    .get(`SortiKinshasaJourCountSortiTs`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

export const getBalancetKinshasa = () => {
  return axioClient
    .get(`balanceKinsha`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

export const deleteEntreKinshasa = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axioClient.delete(`Sorti/${id}`);
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
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
