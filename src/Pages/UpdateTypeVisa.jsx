import React, { useEffect, useRef, useState } from "react";
import { postConteneur } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { getTypeVisaId, postTypeVisa, updateTypeVisa } from "../actions/TypeVisa";
import { useParams } from "react-router-dom";

const UpdateTypeVisa = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  const dispatch = useDispatch();
  let { id } = useParams();
  
  

  useEffect(() => {
    getTypeVisaId(id)
      .then((membre) => {
        setType(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      intitule: form.current[0].value,
      montant: form.current[1].value,
    };
    await dispatch(updateTypeVisa(id, formData))
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
        <h5 className="card-header">Modifier type de visa : {type.intitule} </h5>
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
                <label htmlFor="nom" className="form-label">
                  Intitule
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="nom"
                  name="nom"
                  value={type.intitule}
                  onChange={(e) => setType({ ...type, intitule: e.target.value })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="numero" className="form-label">
                  Montant
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="numero"
                  name="numero"
                  value={type.montant}
                  onChange={(e) => setType({ ...type, montant: e.target.value })}

                />
              </div>
            </div>
            <div className="mt-2">
              {loading ? (
                <div className="spinner-border mr-4" role="status"></div>
              ) : (
                <button type="submit" className="btn btn-primary me-2">
                  <i className="bx bx-edit"></i> Modifier
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

export default UpdateTypeVisa;
