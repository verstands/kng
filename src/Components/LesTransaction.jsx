import React, { useEffect, useState } from "react";
import EntrerTable from "./EntrerTable";
import { getEntre } from "../actions/EntreAction";
import { Link } from "react-router-dom";

const LesTransaction = ({ isLoading, setLoading }) => {
  const [etatData, setEtatData] = useState([]);
  const [searchTermJourne, setSearchTermJourne] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateDebut, setDateDebut] = useState("2024-04-01");
  const [dateFin, setDateFin] = useState(new Date().toISOString().split('T')[0]);
  let nombre  = 1;

  const handleSearchJour = (event) => {
    setSearchTermJourne(event.target.value);
  };

  const handleDateDebutChange = (event) => {
    setDateDebut(event.target.value);
  };

  const handleDateFinChange = (event) => {
    setDateFin(event.target.value);
  };

  useEffect(() => {
    getEntre(currentPage, dateDebut, dateFin)
      .then(({ data, totalPages }) => {
        setEtatData(data);
        setTotalPages(totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, dateDebut, dateFin, setLoading]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="p-20">
        <div className="tab-pane active" id="home" role="tabpanel">
          <div className="p-20">
            <div className="row">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recherche"
                  value={searchTermJourne}
                  onChange={handleSearchJour}
                />
              </div>
              <div className="col-md-3">
                <input 
                  type="date" 
                  className="form-control" 
                  value={dateDebut}
                  onChange={handleDateDebutChange}
                />
              </div>
              <div className="col-md-3">
                <input 
                  type="date" 
                  className="form-control" 
                  value={dateFin}
                  onChange={handleDateFinChange}
                />
              </div>
            </div>
          </div>
          <Link to={`/ImprimerTransactionAlls`} title="Tous les transactions"><i className='bx bx-printer me-1'></i></Link>

          <hr />
          <div className="card">
            {isLoading ? (
              <div className="text-center">
                <Spinner />
              </div>
            ) : (
              <div className="table-responsive text-nowrap">
                <table className="table table-borderle">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Nom_emeteur</th>
                      <th>Nom recepeteur</th>
                      <th>Matricule</th>
                      <th>Type transaction</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(etatData) &&
                      etatData
                        .filter((data) => {
                          return (
                            typeof data.matricule === "string" &&
                            typeof data.nom_emateur === "string" &&
                            typeof data.nom_recepteur === "string" &&
                            typeof data.etat === "string" &&
                            (data.matricule
                              .toLowerCase()
                              .includes(searchTermJourne.toLowerCase()) ||
                              data.nom_emateur
                                .toLowerCase()
                                .includes(searchTermJourne.toLowerCase()) ||
                              data.nom_recepteur
                                .toLowerCase()
                                .includes(searchTermJourne.toLowerCase()) ||
                              data.etat
                                .toLowerCase()
                                .includes(searchTermJourne.toLowerCase()))
                          );
                        })
                        .map((data) => (
                          <EntrerTable
                            id={data.id}
                            nombre={nombre++}
                            nom_emateur={data.nom_emateur}
                            nom_recepteur={data.nom_recepteur}
                            type={data.etat}
                            matricule={data.matricule}
                            key={data.id} // Utilisation de l'ID comme clé
                          />
                        ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="pagination-container">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-secondary mr-2"
        >
          &laquo; Précédent
        </button>
        &nbsp;
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-secondary"
        >
          Suivant &raquo;
        </button>
      </div>
    </>
  );
};

export default LesTransaction;
