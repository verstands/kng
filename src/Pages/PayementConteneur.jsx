import React, { useEffect, useRef, useState } from "react";
import { gettypedepense } from "../actions/TypeDepnse";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postDepenseConteneur } from "../actions/DepenseConteneurAction";

const DepenseConteneur = () => {
  const [etatData, setetatData] = useState([]);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    gettypedepense()
      .then((membre) => {
        setetatData(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      id_conteneur: id,
      montant: form.current[1].value,
      id_typedepense: form.current[0].value,
    };
    await dispatch(postDepenseConteneur(formData))
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
    <>
      <div className="container mt-4">
        <div class="card mb-4">
          <h5 class="card-header">Depense de conteneur</h5>
          <div class="card-body">
          <Link
          to={`/ListdepenseConteneur/${id}`}
          className="btn btn-sm btn-outline-primary"
        >
          Voir les paiements
        </Link>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <form
              id="formAccountSettings"
              method="POST"
              ref={form}
              onSubmit={handleSubmitEnvoie}
            >
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="address" class="form-label">
                    Type de pense
                  </label>
                  <select id="country" class="select2 form-select">
                    {etatData.map((d) => {
                      return <option value={d.id}>{d.intitule}</option>;
                    })}
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="lastName" class="form-label">
                    Montant
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    name="lastName"
                    id="lastName"
                  />
                </div>
              </div>
              <div class="mt-2">
                {loading ? (
                  <div className="spinner-border mr-4" role="status"></div>
                ) : (
                  <button type="submit" className="btn btn-primary me-2">
                    <i className="bx bx-plus"></i> Ajouter
                  </button>
                )}
                <button type="reset" class="btn btn-outline-secondary">
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

export default DepenseConteneur;
