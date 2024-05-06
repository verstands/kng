import React from "react";
import { Link } from "react-router-dom";

const PaiementDetteUser = () => {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">Paiement d'une dette </h5>
        <div className="card-body">
          <Link to="/adddepnse" className="btn btn-sm btn-outline-primary">
            Voir les paiements
          </Link>
          <br />

          <form id="formAccountSettings" method="POST">
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
              <button type="submit" className="btn btn-primary me-2">
                <i className="bx bx-credit-card"></i> Payer
              </button>
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

export default PaiementDetteUser;
