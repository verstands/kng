import React, { useEffect, useRef, useState } from "react";
import EntrerTable from "../Components/EntrerTable";
import { getVille } from "../actions/PaysAction";
import { useDispatch } from "react-redux";
import { postDettePartenaire } from "../actions/DettePartenanire";

const DettePartenaire = () => {
  const [etatData, setetatData] = useState([]);
  const form = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVille()
      .then((membre) => {
        setetatData(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    
    
  };
  return (
    <>
      <div className="container mt-4">
        <div class="card mb-4">
          <h5 class="card-header">Dette partenaire</h5>
          <div class="card-body"></div>
          <hr class="my-0" />
          <div class="card-body">
            <form
              id="formAccountSettings"
              ref={form}
              method="POST"
              onSubmit={handleSubmit}
            >
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="firstName" class="form-label">
                    Montant
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="intitule" class="form-label">
                    Intitule
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="intitule"
                    name="intitule"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="firstName" class="form-label">
                    Pays
                  </label>
                  <select id="country" className="select2 form-select">
                    <option value="">Select</option>
                    {etatData.map((d) => {
                      return <option value={d.id}>{d.intitule}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div class="mt-2">
                {loading ? (
                  <center>
                    <div className="spinner-border" role="status"></div>
                  </center>
                ) : (
                  <button type="submit" class="btn btn-primary me-2">
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

export default DettePartenaire;
