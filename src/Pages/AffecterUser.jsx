import React, { useEffect, useRef, useState } from "react";
import { getConteneur } from "../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { postClient } from "../actions/ClientAction";

const AffecterUser = () => {
  const [dataDette, setdataDette] = useState([]);
  const [isLoading, setloading] = useState(true);
  const [isLoading2, setloading2] = useState(false);

  const [inputListNew, setInputListNew] = useState([
    { marchandise:'', qte: '' },
  ]);
  const dispatch = useDispatch();
  const form = useRef();

  const handleAddClick = () => {
    setInputListNew([...inputListNew, { marchandise: '', qte: '' }]);
  };

  const handleInputChange = (index, name, value) => {
    const list = [...inputListNew];
    list[index][name] = value;
    setInputListNew(list);
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
    setloading2(true);

    let etat = 0;
    if (form.current["montantpayer"].value === form.current["montant"].value) {
        etat = 1;
    }

    const formDataBase = {
        montantpayer: form.current["montantpayer"].value,
        montant: form.current["montant"].value,
        etat: etat,
        nom_client: form.current["nom_client"].value,
        telephone: form.current["telephone"].value,
        id_conteneur: form.current["id_conteneur"].value,
    };
    
    try {
       inputListNew.map((item) => {
            const formData = {
              qte: item.qte,
                produit:item.marchandise,
                
            };
           dispatch(postMarchandise(formData));
        });

        Swal.fire({
            icon: "success",
            title: "L'opération a réussi avec succès",
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: `${error.response.data.message}`,
            text: "Veuillez vérifier vos informations de connexion.",
        });
        throw error;
    }
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
                <label htmlFor="montanttotal" className="form-label">
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
                <select
                  class="form-control"
                  type="number"
                  name="id_conteneur"
                  id="id_conteneur"
                >
                  {dataDette.map((dt) => {
                    return <option value={dt.id}>{dt.nom_conteneur}</option>;
                  })}
                </select>
              </div>
              <div className="mb-3 col-md-5">
                <label htmlFor="monatantpayer" className="form-label">
                  Montant payer
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montantpayer"
                  name="montantpayer"
                />
              </div>

              <div className="mb-3 col-md-12"></div>
              {inputListNew.map((x, i) => {
                return (
                  <>
                    <div className="col-md-5 qte">
                      <br />
                      <label for="" className="titre2">
                        Qte
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0.00"
                        name="qte"
                        value={x.qte}
                        onChange={(e) => handleInputChange(i, "qte", e.target.value)}
                      />
                    </div>
                    <div className="col-md-5 marc">
                      <br />
                      <label for="" className="titre2">
                        Marchandise
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="marchandise"
                        value={x.marchandise}
                        onChange={(e) => handleInputChange(i, "marchandise", e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      {inputListNew.length - 1 === i && (
                        <button className="ml10 btn btn-primary" onClick={handleAddClick}>
                          +
                        </button>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-2">
             
                <button type="submit" className="btn btn-primary me-2">
                  <i className="bx bx-plus"></i> Ajouter
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

export default AffecterUser;
