import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postDetteClientPaiement } from "../actions/DetteClientAction";
import { postPaimentDettePaiement } from "../actions/DettePartenanire";

const PaiementDettePartenaireView = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const form = useRef();

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      id_client: id,
      montant: form.current[0].value,
    };
    await dispatch(postPaimentDettePaiement(formData))
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
        <h5 className="card-header">Paiement d'une dette partenaire </h5>
        <div className="card-body">
          <Link
            to={`/vpp/${id}`}
            className="btn btn-sm btn-outline-primary"
          >
            Voir les paiements partenaire
          </Link>
          <br />

          <form
            id="formAccountSettings"
            ref={form}
            onSubmit={handleSubmitEnvoie}
            method="POST"
          >
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="montant" className="form-label">
                  Montant
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="montant"
                />
              </div>
            </div>
            <div className="mt-2">
            {loading ? (
              <div className="spinner-border mr-4" role="status"></div>
            ) : (
              <button type="submit" className="btn btn-primary me-2">
                <i className="bx bx-credit-card"></i> Payer
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

export default PaiementDettePartenaireView;
