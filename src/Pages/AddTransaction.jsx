/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { getVille } from '../actions/PaysAction';
import { postTransaction } from '../actions/EntreAction';
import { useDispatch } from 'react-redux';

const AddTransaction = () => {
    const [etatData, setetatData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const dispatch = useDispatch();



    useEffect(() => {
        getVille().then((membre) => {
            setetatData(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            nom_emateur:  form.current[1].value,
            nom_recepteur: form.current[2].value,
            matricule:  generateMatricule(),
            telephone:  form.current[4].value,
            pays_provenance:  form.current[5].value,
            pays_destinateut:  form.current[6].value,
            montant:  form.current[7].value,
            motif:  form.current[8].value,
            etat:  form.current[0].value,
            montant_dette:  form.current[10].value,
            motif_dette:  form.current[11].value,
            id_transaction:  ""
        };
      
      await dispatch(postTransaction(formData))
            .then(() => {
                form.current.reset();
                setLoading(false);
            })
            .catch(() => {
                
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const toggleForm = () => {
        setShowForm(!showForm);
      };

      const generateMatricule = () => {
        const date = new Date();
        const matricule = `ABG-${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
        return matricule;
    };

    useEffect(() => {
        form.current['organization'].value = generateMatricule();
    }, []);
    return (
        <>
            <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire une transaction</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings" ref={form} method="POST" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">Type de transaction</label>
                                    <select id="country" className="select2 form-select">
                                        <option value="0">Selectionnez le type de transaction</option>
                                        <option value="1">Entrer</option>
                                        <option value="2">Sorti</option>
                                        <option value="3">Special</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">NOM EMETEUR</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">NOM RECEPETEUR</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organization" className="form-label">MATRICULE</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                        value={generateMatricule()}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="phoneNumber">TELEPHONE</label>
                                    <div className="input-group input-group-merge">
                                        <span className="input-group-text">RDC (+243)</span>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="address" className="form-label">PAYS PROVENANCE</label>
                                    <select id="country"  className="select2 form-select">
                                        <option value="">Select</option>
                                        {
                                            etatData.map((d) => {
                                                return (
                                                    <option value={d.id}>{d.intitule}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="zipCode" className="form-label">PAYS DESTINATEUR</label>
                                    <select id="country"  className="select2 form-select">
                                        <option value="">Select</option>
                                        {
                                            etatData.map((d) => {
                                                return (
                                                    <option value={d.id}>{d.intitule}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="language" className="form-label">MONTANT</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">MOTIF</label>
                                    <textarea id="organization" name="" className="form-control" cols="10" rows="2"></textarea>
                                </div>
                            </div>
                            <div className=' col-md-12'>

                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                        checked={showForm}
                                        onChange={toggleForm}
                                    />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dette</label>
                                </div>
                            </div>
                            {
                                showForm && (
                                    <div className='row'>
                                        <div className="mb-3 col-md-6">
                                            <label htmlFor="timeZones" className="form-label">Montant</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="organization"
                                                name="organization"
                                            />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label htmlFor="timeZones" className="form-label">Type dette</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="organization"
                                                name="organization"
                                            
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            <div className="mt-2">
                                {loading ? (
                                    <center>
                                        <div className="spinner-border" role="status"></div>
                                    </center>
                                ) : (
                                    <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                                )}
                                <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTransaction