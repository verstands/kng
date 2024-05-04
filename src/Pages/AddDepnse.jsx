import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postDepenseDubai } from '../actions/DepenseAction';

const AddDepense = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nom: '',
    montant: '',
    motif: '',
    id_client : '1'
  });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(postDepenseDubai(formData))
      .then(() => {
        setFormData({
          nom: '',
          montant: '',
          motif: '',
          id_client: '1'
        });
      })
      .catch(() => {
        
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='container mt-4'>
      <div className="card mb-4">
        <h5 className="card-header">Ajouter une dépense : Dubai</h5>
        <div className="card-body">
          <form id="formAccountSettings" method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                type="text"
                className="form-control"
                id="email"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder=""
                autoFocus
              />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="montant" className="form-label">Montant</label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="montant"
                  value={formData.montant}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="motif" className="form-label">Motif</label>
                <textarea
                  id="motif"
                  name="motif"
                  className="form-control"
                  cols="10"
                  value={formData.motif}
                  onChange={handleChange}
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="mt-2">
              {loading ? (
                <center>
                  <div className="spinner-border" role="status"></div>
                </center>
              ) : (
                <button type="submit" className="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
              )}
              <button type="reset" className="btn btn-outline-secondary">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDepense;
