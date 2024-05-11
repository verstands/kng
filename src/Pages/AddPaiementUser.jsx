import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getClientId, postPaimentUser } from '../actions/ClientAction';
import { useParams } from 'react-router-dom';

const AddPaiementUser = () => {
    const form = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();
  const [etatDataClient, setEtatDataCient] = useState([]);



    const handleSubmitEnvoie = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            montant: form.current[0].value,
            id_client: id,
        };
        await dispatch(postPaimentUser(formData))
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
        getClientId(id)
          .then((membre) => {
            setEtatDataCient(membre);
          })
          .catch((error) => {
            console.log(error);
            setloading(false);
          });
      }, [id]);
  return (
    <div className='container mt-4'>
      <div className="card mb-4">
        <h5 className="card-header">Ajouter un paiement :  
        <span style={{ color: "red" }}>
        {etatDataClient.nom_client}
      </span>
        </h5>
        <div className="card-body">
          <form id="formAccountSettings" method="POST" ref={form} onSubmit={handleSubmitEnvoie}>
            <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="montant" className="form-label">Montant</label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  
                />
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
  )
}

export default AddPaiementUser