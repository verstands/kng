// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import { showClientUpdateKgb } from '../actions/Marchandise';
//import { showClientUpdate  } from '../actions/Marchandise';
import { useParams } from 'react-router-dom';
import { updateMarchandise } from '../actions/ClientAction';
import { useDispatch } from 'react-redux';

const UpdateMr = () => {
  const [datacloture, setdatacloture] = useState([]);
   const {id} = useParams();
   const form = useRef();
   const dispatch = useDispatch();

  useEffect(() => {
    showClientUpdateKgb(id)
      .then((membre) => {
        setdatacloture(membre);
        console.log(membre)
        //alert(datacloture)
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (r) => {
    r.preventDefault();
    const formData = {
      produit : form.current[0].value,
      qte : form.current[1].value
    };

    await dispatch(updateMarchandise(formData, id))
    .then(()=> {
      form.current.reset();
    })
    .catch(()=> {})
    .finally(()=> {})
  };

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">
          Modification de l'utilisateur :{" "}
          <span style={{ color: "red" }}></span>
        </h5>
          <hr />
        <div className="card-body">

          <form id="formAccountSettings" method="POST" ref={form} onSubmit={handleSubmit} >
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="nom" className="form-label">
                  Produit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="produit"
                  name="produit"
                  value={datacloture.produit} 
                  onChange={(r) =>setdatacloture({
                    ...datacloture,produit: r.target.value,
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="montant" className="form-label">
                  Quantité
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="qte"
                  name="qte"
                  value={datacloture.qte}
                  onChange={(r) =>setdatacloture({
                    ...datacloture,qte: r.target.value,
                  })}
                />
              </div>
            </div>
            <div className="mt-2">
              <button type="submit" className="btn btn-primary me-2">
                <i className="bx bx-edit"></i> Modifier
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

export default UpdateMr;