import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postTypedepense } from "../actions/TypeDepnse";

const AddTypeTransaction = () => {
  const [conteneur, setConteneur] = useState("");
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
        intitule: form.current[0].value,
    };
    await dispatch(postTypedepense(formData))
      .then(() => {
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">Ajouter un type transaction </h5>
        <div className="card-body"></div>
        <hr className="my-0" />
        <div className="card-body">
          <form
            id="formAccountSettings"
            ref={form}
            onSubmit={handleSubmitEnvoie}
          >
            <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="nom"
                  name="nom"
                  autoFocus
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
    </div>
  );
};

export default AddTypeTransaction;
