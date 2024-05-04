import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getclotureListe } from "../actions/ClotureAction";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import ClotureTable from "../Components/ClotureTable";


const ViewCloture = () => {
  const [datacloture, setdatacloture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTermJourne, setSearchTermJourne] = useState("");

  const numberDepense = 1;

  useEffect(() => {
    getclotureListe()
      .then((membre) => {
        setdatacloture(membre);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchJour = (event) => {
    setSearchTermJourne(event.target.value);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Liste des clutures</h5>
          <div className="card p-3">
            <div className="row">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recherche"
                  value={searchTermJourne}
                  onChange={handleSearchJour}
                />
              </div>
            </div>
            <div className="table-responsive text-nowrap">
              <table className="table table-borderle">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Entre dubai</th>
                    <th>Entre Kinshasa</th>
                    <th>Sorti Dubai</th>
                    <th>Sorti Kinshasa</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {Array.isArray(datacloture) &&
                    datacloture
                      .filter((data) => {
                        if (
                          typeof data.created_at !==
                            "string" 
                        ) {
                          return false;
                        }
                        return (
                          data.created_at
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        );
                      })
                      .map((data, index) => (
                        <ClotureTable
                          id={data.id}
                          entredubai={data.entredubai}
                          sortidubai={data.sortidubai}
                          entreKinhsasa={data.entreKinhsasa}
                          sortiKinhsasa={data.sortiKinhsasa}
                          created_at={data.created_at}
                          key={index}
                        />
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCloture;
