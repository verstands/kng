import React, { useEffect, useState } from 'react'
import { getclotureListeID } from '../actions/ClotureAction';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import dateFormat from 'dateformat';

const DetailCloture = () => {
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true);
    let { id } = useParams();
    
    useEffect(() => {
        getclotureListeID(id)
          .then((membre) => {
            setetatData(membre);
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
      <h5 class="card-header">Detail de cloture</h5>
      <div class="card-body">
      </div>

      <hr class="my-0" />
      <div class="card-body">
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <form
          id="formAccountSettings"
          method="POST"
          onsubmit="return false"
        >
          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="firstName" class="form-label">
                ENTRE DUDAIB
              </label>
              <input
                class="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={etatData.entredubai}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="lastName" class="form-label">
                SORTI DUBAI
              </label>
              <input
                class="form-control"
                type="text"
                name="lastName"
                id="lastName"
                value={etatData.sortidubai}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="email" class="form-label">
                ENTRE KINSHASA
              </label>
              <input
                class="form-control"
                type="text"
                id="email"
                name="email"
                value={etatData.entreKinhsasa}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="organization" class="form-label">
                SORTI KINSHASA
              </label>
              <input
                type="text"
                class="form-control"
                id="organization"
                name="organization"
                value={etatData.sortiKinhsasa}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label class="form-label" for="phoneNumber">
                DEPENSE DUBAI
              </label>
              <div class="input-group input-group-merge">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  class="form-control"
                  placeholder=""
                value={etatData.depenseDubai}
                  readOnly
                />
              </div>
            </div>
            <div class="mb-3 col-md-6">
              <label for="address" class="form-label">
                DEPENSE KINSHASA
              </label>
              <input
                type="text"
                id="pj"
                className="form-control"
                value={etatData.depenseKinshasa}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="zipCode" class="form-label">
                DETTE PARTENAIRE
              </label>
              <input
                type="text"
                id="pj"
                className="form-control"
                value={etatData.dettepartenaire}

                readOnly
              />
            </div>

            <div class="mb-3 col-md-6">
              <label for="language" class="form-label">
                DETTE CLIENT
              </label>
              <input
                type="number"
                class="form-control"
                id="organization"
                name="organization"
                value={etatData.detteclient}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="timeZones" class="form-label">
                BALANCE DUBAI
              </label>
              <input
                type="text"
                class="form-control"
                id="organization"
                name="organization"
                value={etatData.balanceDubai}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="timeZones" class="form-label">
                BALANCE KINSHASA
              </label>
              <input
                type="text"
                class="form-control"
                id="organization"
                name="organization"
                value={etatData.balanceKinshasa}
                readOnly
              />
            </div>
            <div class="mb-3 col-md-6">
            <label for="timeZones" class="form-label">
              DATE
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
    )}

      </div>
    </div>
  </div>
    </>
  )
}

export default DetailCloture