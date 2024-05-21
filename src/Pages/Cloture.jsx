import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getcloture, postCloture } from "../actions/ClotureAction";
import { useDispatch } from "react-redux";

const Cloture = () => {
  const [datacloture, setdatacloture] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const form = useRef();
  useEffect(() => {
    getcloture()
      .then((membre) => {
        setdatacloture(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      entredubai: form.current[1].value,
      sortidubai: form.current[2].value,
      entreKinhsasa: form.current[5].value,
      sortiKinhsasa: form.current[6].value,
      depenseDubai: form.current[3].value,
      depenseKinshasa: form.current[7].value,
      dettepartenaire: form.current[8].value,
      detteclient: form.current[9].value,
      balanceDubai: form.current[0].value,
      balanceKinshasa: form.current[4].value,
    };
    await dispatch(postCloture(formData))
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
          <h5 class="card-header">Cloture</h5>
          <div class="card-body">
            <Link to="/listecloture" className="btn btn-sm btn-outline-primary">
              <i class="bx bx-detail me-1"></i>Voir les cloture
            </Link>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <form
              id="formAccountSettings"
              ref={form}
              onSubmit={handleSubmitEnvoie}
              method="POST"
              onsubmit="return false"
            >
              <div class="row">
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Balance Dubai
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.balanceDubai}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Entrer Dubai
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.entredubai}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Sorti Dubai
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.sortidubai}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Depense Dubai
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.depenseDubai}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Balance Kinshasa
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.balanceKinshasa}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Entre Kishasa
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.entreKinhsasa}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Sorti Kinshasa
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.sortiKinhsasa}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Depense Kinshasa
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.depenseKinshasa}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Dette partenaire
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.dettepartenaire}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Dette Client
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.detteclient}
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="firstName" class="form-label">
                    Sorti special
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="firstName"
                    name="firstName"
                    value={datacloture.transactionspecial}
                    autofocus
                  />
                </div>
              </div>
              <div class="mt-2">
                {loading ? (
                  <div className="spinner-border mr-4" role="status"></div>
                ) : (
                  <button type="submit" className="btn btn-primary me-2">
                    <i className="bx bx-plus"></i> Cloture
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

export default Cloture;
