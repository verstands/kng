import React, { useEffect, useState } from "react";
import EntrerTable from "./EntrerTable";
import { getEntre } from "../actions/EntreAction";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const LesTransaction = ({ isLoading, setLoading }) => {
  const getFiveDaysAgo = () => {
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);
    const year = fiveDaysAgo.getFullYear();
    const month = String(fiveDaysAgo.getMonth() + 1).padStart(2, '0');
    const day = String(fiveDaysAgo.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const [etatData, setEtatData] = useState([]);
  const [searchTermJourne, setSearchTermJourne] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
  const [dateFin, setDateFin] = useState(new Date().toISOString().split('T')[0]);
  const [loadDate, setTosetloadDatetalPages] = useState(false);

  let nombre  = 1;

  const handleSearchJour = (event) => {
    setTosetloadDatetalPages(true);
    setSearchTermJourne(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
  };
  

  const handleDateDebutChange = (event) => {
    setTosetloadDatetalPages(true);
    setDateDebut(event.target.value);
    setTimeout(() => {
      setTosetloadDatetalPages(false);
    }, 1000);
  };

  const handleDateFinChange = (event) => {
    setDateFin(event.target.value);
  };

  useEffect(() => {
    getEntre(currentPage, dateDebut, dateFin)
      .then(({ data, totalPages }) => {
        setEtatData(data);
        setTotalPages(totalPages);
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
          <Link to={`/ImprimerTransactionAlls/${dateDebut}/${dateFin}`} title="Tous les transactions"><i className='bx bx-printer me-1'></i></Link>
          <center>{loadDate ? <Spinner /> : ""}</center>
          <hr />
          <div className="card">
            {isLoading ? (
              <div className="text-center">
                <Spinner />
              </div>
            ) : (
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead>
                    <tr className="bg-primary">
                      <th className="text-white">N°</th>
                      <th className="text-white">Nom_emeteur</th>
                      <th className="text-white">Nom recepeteur</th>
                      <th className="text-white">Matricule</th>
                      <th className="text-white">Type transaction</th>
                      <th className="text-white">Actions</th>
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
