import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const getDepenseDubai = () => {
    return axioClient.get(`depenseDubaiJour`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            window.location.href = "/";
        });
};

export const getDepenseDetail = (dataId) => {

    return axioClient.get(`depenseOne/${dataId}`)
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

export const postDepenseDubai = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axioClient.post(`DepenseClient`, formData);
        Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "montant elevé",
        });
        throw error; // Renvoie l'erreur pour le traitement ultérieur
      }
    };
  };


  export const getCounrDepenseKinshasa = () => {
    return axioClient.get(`depenseKinshasaJourCount`)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('ok')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de la récupération des donnéessssss",
                    text: `${error}`
                });
            }
        });
};

export const getKinshasaJourCountTotal = () => {
  return axioClient.get(`KinshasaJourCountTotal`)
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


export const ListeKinshasaJourCountTotal = () => {
  return axioClient.get(`ListeKinshasaJourCountTotal`)
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

export const deleteDepense = (id) => {
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
            const response = await axioClient.delete(`DepenseClient/${id}`);
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
  
  