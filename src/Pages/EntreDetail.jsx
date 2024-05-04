import React, { useEffect, useState } from "react";
import { getEntreDetail } from "../actions/EntreAction";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const EntreDetail = () => {
  const [etatData, setetatData] = useState([]);
  const [isLoading, setloading] = useState(true);

  const [typeText, settypeText] = useState("");
  const [typeColor, settypeColor] = useState("");

  let { id } = useParams();

  useEffect(() => {
    getEntreDetail(id)
      .then((membre) => {
        setetatData(membre);

        let typeText = "";
        let typeColor = "";

        if (membre.etat === "1") {
          typeText = "Entre";
          typeColor = "red";
        } else if (membre.etat === "2") {
          typeText = "Sorti";
          typeColor = "green";
        } else if (membre.etat === "3") {
          typeText = "Transaction spacial";
          typeColor = "orange";
        } else {
          typeText = membre.etat;
          typeColor = "black";
        }

        settypeText(typeText);
        settypeColor(typeColor);

        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div class="card mb-4">
          <h5 class="card-header">Detail du trasaction</h5>
          <div class="card-body">Matricule : {etatData.matricule}
          <h2 style={{ color: typeColor }}>{typeText}</h2>
          <Link to={`/depensedetail/${etatData.matricule    }`}><i className='bx bx-printer me-1'></i></Link>
          </div>

          <hr class="my-0" />
          <div class="card-body">
            <form
              id="formAccountSettings"
              method="POST"
              onsubmit="return false"
            >
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="firstName" class="form-label">
                    NOM EMETEUR
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={etatData.nom_emateur}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="lastName" class="form-label">
                    NOM RECEPETEUR
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value="Doe"
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="email" class="form-label">
                    E-mail
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={etatData.nom_recepteur}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="organization" class="form-label">
                    MATRICULE
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="organization"
                    name="organization"
                    value={etatData.matricule}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="phoneNumber">
                    TELEPHONE
                  </label>
                  <div class="input-group input-group-merge">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      class="form-control"
                      placeholder=""
                      value={etatData.telephone}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="address" class="form-label">
                    PAYS PROVENANCE
                  </label>
                  <input
                    type="text"
                    id="pj"
                    className="form-control"
                    value={`${
                      etatData.pays_provenance?.id_pays?.intitule || ""
                    } - ${etatData.pays_provenance?.intitule || ""}`}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="zipCode" class="form-label">
                    PAYS DESTINATEUR
                  </label>
                  <input
                    type="text"
                    id="pj"
                    className="form-control"
                    value={`${
                      etatData.pays_destinateut?.id_pays?.intitule || ""
                    } - ${etatData.pays_destinateut?.intitule || ""}`}
                    readOnly
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="language" class="form-label">
                    MONTANT
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="organization"
                    name="organization"
                    value={etatData.montant}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="timeZones" class="form-label">
                    MOTIF
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="organization"
                    name="organization"
                    value={etatData.motif}
                    readOnly
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="timeZones" class="form-label">
                    MOTIF
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="organization"
                    name="organization"
                    value={dateFormat(etatData.created_at, "dd/mm/yyyy")}
                    readOnly
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntreDetail;
