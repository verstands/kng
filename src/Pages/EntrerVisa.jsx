/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postVisa } from "../actions/VisaAction";
import { getTypeVisa } from "../actions/TypeVisa";

const EntrerVisa = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [type, setType] = useState([]);


  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      numero: 1,
      nom: form.current[0].value,
      postnom: form.current[1].value,
      prenm: form.current[2].value,
      datenaissance: form.current[3].value,
      nationalite: form.current[4].value,
      sexe: form.current[5].value,
      passeport: form.current[6].value,
      adresse: form.current[7].value,
      telephone: form.current[8].value,
      id_typevisa: form.current[9].value,
      etat: 1,
    };
    await dispatch(postVisa(formData))
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
    getTypeVisa()
      .then((membre) => {
        setType(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generateMatricule = () => {
    const date = new Date();
    const matricule = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    return matricule;
  };
  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Créer une demande de visa</h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form
              id="formAccountSettings"
              ref={form}
              onSubmit={handleSubmitEnvoie}
            >
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    NOM
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    POSTNOM
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoFocus
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="email" className="form-label">
                    PRENOM
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="organization" className="form-label">
                    DATE DE NAISSANCE
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="organization"
                    name="organization"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="phoneNumber">
                    NATIONALITE
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="zipCode" className="form-label">
                    SEXE
                  </label>
                  <select id="country" className="select2 form-select">
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="language" className="form-label">
                    PASSEPORT
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    name="organization"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    ADRESSE
                  </label>
                  <input
                    id="organization"
                    className="form-control"
                    cols="10"
                    rows="2"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    NUMERO TELEPHONE
                  </label>
                  <input
                  type="number"
                    id="organization"
                    className="form-control"
                    cols="10"
                    rows="2"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    TYPE VISA
                  </label>
                  <select className="form-control">
                    {type.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.intitule} - {p.montant}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-2">
                {loading ? (
                  <center>
                    <div className="spinner-border" role="status"></div>
                  </center>
                ) : (
                  <button type="submit" className="btn btn-primary me-2">
                    Enregistrer
                  </button>
                )}
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

export default EntrerVisa;
