import React, { useEffect, useRef, useState } from "react";
import { getClientId, putClient } from "../actions/ClientAction";
import { Link, useParams } from "react-router-dom";
import { deletemarchandise, getMarchaniseId } from "../actions/Marchandise";
import { useDispatch } from "react-redux";
import Spinner from "../Components/Spinner";

const UpdateClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [datacloture, setdatacloture] = useState([]);
  const [mr, setmr] = useState([]);
  let { id } = useParams();
  const form = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    getClientId(id)
      .then((membre) => {
        setdatacloture(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getMarchaniseId(id)
      .then((membre) => {
        setmr(membre);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nom_client: form.current[0].value,
      telephone: form.current[1].value,
      montant: form.current[2].value,
    };

    await dispatch(putClient(formData, id))
      .then(() => {
        form.current.reset();
      })
      .catch(() => {})
      .finally(() => {});
  };

  const deleteClientHandle = async (id) => {
    try {
      await dispatch(deletemarchandise(id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">
          Modification de l'utilisateur :{" "}
          <span style={{ color: "red" }}>{datacloture.nom_client}</span>
        </h5>
        <div className="card-body">
          <form
            id="formAccountSettings"
            method="POST"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="nom_client"
                  value={datacloture.nom_client}
                  onChange={(e) =>
                    setdatacloture({
                      ...datacloture,
                      nom_client: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="montant" className="form-label">
                  Telephone
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="telephone"
                  value={datacloture.telephone}
                  onChange={(e) =>
                    setdatacloture({
                      ...datacloture,
                      telephone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="montant" className="form-label">
                  Montant
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="montant"
                  value={datacloture.montant}
                  onChange={(e) =>
                    setdatacloture({ ...datacloture, montant: e.target.value })
                  }
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
          <hr />
          <h5 className="card-header">Mes marchandises</h5>
          {isLoading ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr className="bg-primary">
                  <th className="text-white">Marchandise)</th>
                  <th className="text-white">Qte</th>
                  <th className="text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(mr) &&
                  mr.map((d, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{d.produit}</strong>
                      </td>
                      <td>
                        <strong>{d.qte}</strong>
                      </td>
                      <td>
                        <Link to="">
                          <i
                            className="bx bx-trash fs-2 me-1"
                            onClick={() => deleteClientHandle(d.id)}
                          ></i>
                        </Link>
                        <Link to="ss">
                          <i className="bx bx-edit fs-2 me-1"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateClient;
