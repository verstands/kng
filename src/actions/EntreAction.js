import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const ADD_ENTRE = "ADD_ENTRE";
export const GET_ENTRE = "GET_ENTRE";
export const GET_ENTRE_JOURNEE = "GET_ENTRE_JOURNEE";
export const DELETE_ENTRE = "DELETE_ENTRE";

//const ville = localStorage.getItem('ville');
export const getEntre = (page, dateDebut, dateFin) => {
  return axioClient
    .get(`EntreDubaiFiltre/${dateDebut}/${dateFin}?page=${page}`)
    .then((response) => {
      return {
        data: response.data.data.data,
        totalPages: response.data.data.last_page,
      };
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
      return Promise.reject(error);
    });
};

export const getEntreJourne = (page) => {
  return axioClient
    .get(`EntreJourDubai?page=${page}`)
    .then((response) => {
      return {
        membres: response.data.data.data,
        totalPages: response.data.data.last_page,
      };
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
      return Promise.reject(error);
    });
};

export const getEntreJourneAll = () => {
    return axioClient
      .get(`EntreJourDubaiAll`)
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
        return Promise.reject(error);
      });
  };

  export const getEntreJourneAlls = (datadebut, datefin) => {
    return axioClient
      .get(`EntreJourDubaiAlls/${datadebut}/${datefin}`)
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
        return Promise.reject(error);
      });
  };

export const getEntreDetail = (id) => {
  return axioClient
    .get(`EntresDubaiID/${id}`)
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

//kinshasa
export const getEntreKinshasa = (page, dateDebut, dateFin) => {
  return axioClient
    .get(`EntreKinshasa/${dateDebut}/${dateFin}?page=${page}}`)
    .then((response) => {
      return {
        data: response.data.data.data,
        totalPages: response.data.data.last_page,
      };
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

export const getEntreJourneKinshasa = () => {
  return axioClient
    .get(`EntreJourKinshasa`)
    .then((response) => {
      return response.data.data.data;
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

export const getEntreDetailKinshasa = () => {
  return axioClient
    .get(`Entre`)
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

export const getCounrDepotDoubai = () => {
  return axioClient
    .get(`depenseDubaiJourCountEntre`)
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

export const getCounrRetraitDoubai = () => {
  return axioClient
    .get(`depenseDubaiJourCountSorti`)
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

export const depenseDubaiJourCountSortiTs = () => {
  return axioClient
    .get(`depenseDubaiJourCountSortiTs`)
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

export const balanceDubai = () => {
  return axioClient
    .get(`balanceDubai2`)
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

export const totalaJourCount = () => {
  return axioClient
    .get(`totalaJourCount`)
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

export const postTransaction = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`Entre`, formData);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      throw error;
    }
  };
};

export const deleteEntreDubai = (id) => {
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
          const response = await axioClient.delete(`Entre/${id}`);
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
