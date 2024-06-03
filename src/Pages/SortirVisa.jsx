import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDepenseVisa, getdepenseVisa, postDepenseVisa } from "../actions/DepenseVisa";
import dateFormat from "dateformat";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";

const SortieVisa = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const [etatData, setEtatData] = useState([]);
  let numberDepense = 1;
  const dispatch = useDispatch();

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      numero: 1,
      nom: form.current[0].value,
      montant: form.current[1].value,
      motif: form.current[2].value,
    };
    await dispatch(postDepenseVisa(formData))
      .then(() => {
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getdepenseVisa()
      .then((data) => {
        setEtatData(data); 
        setLoadings(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDepenseHandlerUser = async (id) => {
    try {
      await dispatch(deleteDepenseVisa(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Créer une sortie de visa</h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form
              id="formAccountSettings"
              ref={form}
              onSubmit={handleSubmitEnvoie}
              method="POST"
            >
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    NOM AGENT
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    MONTANT
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    autoFocus
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="email" className="form-label">
                    MOTIF
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mt-2">
                {loading ? (
                  <div className="spinner-border mr-4" role="status"></div>
                ) : (
                  <button type="submit" className="btn btn-primary me-2">
                    <i className="bx bx-plus"></i> Enregistrer
                  </button>
                )}
                <button type="reset" className="btn btn-outline-secondary">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="table-responsive text-nowrap">
            <table className="table table-bordered">
              <thead>
                <tr className="bg-primary">
                  <th className="text-white">N°</th>
                  <th className="text-white">Nom</th>
                  <th className="text-white">Motif</th>
                  <th className="text-white">Montant</th>
                  <th className="text-white">Date</th>
                  <th className="text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(etatData) &&
                  etatData.map((data, index) => (
                    <tr key={data.id}>
                      <td>{numberDepense++}</td>
                      <td>{data.nom}</td>
                      <td>{data.motif}</td>
                      <td>{data.montant}</td>
                      <td>{dateFormat(data.created_at, "dd/mm/yyyy")}</td>
                      <td>
                        <Link to=""
                        onClick={() =>
                            deleteDepenseHandlerUser(data.id)
                          }
                        >
                          <i class="bx bx-trash fs-2 me-1"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <center>{loadings ? <Spinner /> : ""}</center>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortieVisa;
