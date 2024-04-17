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
          text: "Veuillez vérifier vos informations de connexion.",
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
  