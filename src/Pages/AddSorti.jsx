/* eslint-disable no-unused-vars */
import React from "react";

const AddSorti = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Sorti</h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form
              id="formAccountSettings"
              method="POST"
              onSubmit="return false"
            >
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    NOM EMETEUR
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value=""
                    autoFocus
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    NOM RECEPETEUR
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value="Doe"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value=""
                    placeholder=""
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="organization" className="form-label">
                    MATRICULE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    name="organization"
                    value=""
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="phoneNumber">
                    TELEPHONE
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">RDC (+243)</span>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="address" className="form-label">
                    PAYS PROVENANCE
                  </label>
                  <select id="country" className="select2 form-select">
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                  </select>
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="zipCode" className="form-label">
                    PAYS DESTINATEUR
                  </label>
                  <select id="country" className="select2 form-select">
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="language" className="form-label">
                    MONTANT
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="organization"
                    name="organization"
                    value=""
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="timeZones" className="form-label">
                    MOTIF
                  </label>
                  <textarea
                    id="organization"
                    name=""
                    className="form-control"
                    cols="10"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">
                  Enregistrer
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

export default AddSorti;
