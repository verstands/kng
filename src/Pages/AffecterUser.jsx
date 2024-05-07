import React, { useEffect, useRef, useState } from "react";
import { getConteneur } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { postClient } from "../actions/ClientAction";

const AffecterUser = () => {
  const [dataDette, setdataDette] = useState([]);
  const [isLoading, setloading] = useState(true);
  const [inputList, setInputList] = useState([
    { marchandise: "", montant: "" },
  ]);
  const dispatch = useDispatch();
  const form = useRef();

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { marchandise: "", montant: "" }]);
  };

  const handleChangeInput = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  useEffect(() => {
    getConteneur()
      .then((membre) => {
        setdataDette(membre);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitEnvoie = async (e) => {
    e.preventDefault();
    setloading(true);
    const formData = {
      qte: form.current["qte"].value,
      montantpayer: form.current["montantpayer"].value,
      montant: form.current["montant"].value,
      etat: 0,
      nom_client: form.current["nom_client"].value,
      telephone: form.current["telephone"].value,
      id_conteneur:form.current["id_conteneur"].value,
      marchandises: inputList.map((item) => ({
        produit: item.marchandise,
        montant: item.montant
      }))
    };
    await dispatch(postClient(formData))
      .then(() => {
        setloading(false);
        form.current.reset();
      })
      .catch(() => {})
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">Affecter un utilisateur :</h5>
        <div className="card-body"></div>
        <hr className="my-0" />
        <div className="card-body">
          <form
            id="formAccountSettings"
            ref={form}
            method="POST"
            onSubmit={handleSubmitEnvoie}
          >
            <div className="row">
              <div className="mb-3 col-md-5">
                <label htmlFor="nom_client" className="form-label">
                  Nom client
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="nom_client"
                  name="nom_client"
                  autoFocus
                />
              </div>
              <div className="mb-3 col-md-5">
                <label htmlFor="telephone" className="form-label">
                  Telephone
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="telephone"
                  name="telephone"
                />
              </div>
              <div className="mb-3 col-md-2"></div>
              <div className="mb-3 col-md-5">
                <label htmlFor="qte" className="form-label">
                  Montant Total
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="montant"
                />
              </div>
              <div class="mb-3 col-md-5">
                <label for="firstName" class="form-label">
                  Groupage
                </label>
                <select class="form-control" type="number" name="id_conteneur" id="id_conteneur">
                  {dataDette.map((dt) => {
                    return <option value={dt.id}>{dt.nom_conteneur}</option>;
                  })}
                </select>
              </div>
              <div className="mb-3 col-md-5">
                <label htmlFor="qte" className="form-label">
                  Montant payer
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montantpayer"
                  name="montantpayer"
                />
              </div>
              
              <div className="mb-3 col-md-12">
              </div>
              {inputList.map((x, i) => (
                <React.Fragment key={i}>
                  <div className="mb-3 col-md-5">
                    <label htmlFor={`marchandise-${i}`} className="form-label">
                      Marchandise
                    </label>
                    <input
                      value={x.marchandise}
                      className="form-control"
                      type="text"
                      id={`marchandise-${i}`}
                      name={`marchandise-${i}`}
                      onChange={(e) => handleChangeInput(i, e)}
                    />
                  </div>
                  <div className="mb-3 col-md-5">
                    <label htmlFor={`montant-${i}`} className="form-label">
                      Qte
                    </label>
                    <input
                      value={x.montant}
                      className="form-control"
                      type="number"
                      id={`montant-${i}`}
                      name={`montant-${i}`}
                      onChange={(e) => handleChangeInput(i, e)}
                    />
                  </div>
                  {inputList.length - 1 === i && (
                    <div className="mb-3 col-md-2">
                      <br />
                      <button
                        className="btn btn-primary"
                        onClick={handleAddClick}
                      >
                        +
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2">
              {isLoading ? (
                <div className="spinner-border mr-4" role="status"></div>
              ) : (
                <button type="submit" className="btn btn-primary me-2">
                  <i className="bx bx-plus"></i> Ajouter
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

export default AffecterUser;
