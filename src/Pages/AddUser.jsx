import React, { useEffect, useRef, useState } from "react";
import { postUser } from "../actions/Login.action";
import { useDispatch } from "react-redux";
import { getVille } from "../actions/PaysAction";

const AddUser = () => {
    const [etatData, setetatData] = useState([]);
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const handleSubmitEnvoie = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            nom: form.current[0].value,
            id_ville: form.current[4].value,
            postnom: form.current[1].value,
            email: form.current[2].value,
            password: form.current[3].value,

        };
        await dispatch(postUser(formData))
            .then(() => {
                setLoading(false);
                form.current.reset();
            })
            .catch(() => {
                
            })
            .finally(() => {
                setLoading(false);
            });
    };


    useEffect(() => {
        getVille().then((membre) => {
            setetatData(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Ajouter un utilisateur </h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form
              id="formAccountSettings"
              method="POST"
              ref={form} onSubmit={handleSubmitEnvoie}
            >
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    Nom
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    Postnom
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    Ville
                  </label>
                  <select id="country"  className="select2 form-select">
                                        <option value="">Select une ville</option>
                                        {
                                            etatData.map((d) => {
                                                return (
                                                    <option value={d.id}>{d.intitule}</option>
                                                )
                                            })
                                        }
                                    </select>
                </div>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">
                  <i className="bx bx-plus"></i> Ajouter
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
