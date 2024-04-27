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
                <div class="card mb-4">
                    <h5 class="card-header">Faire une transaction</h5>
                    <div class="card-body">

                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <form id="formAccountSettings" ref={form} method="POST" onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label for="timeZones" class="form-label">Type de transaction</label>
                                    <select id="country" class="select2 form-select">
                                        <option value="0">Selectionnez le type de transaction</option>
                                        <option value="1">Entrer</option>
                                        <option value="2">Sorti</option>
                                        <option value="2">Special</option>
                                    </select>
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="firstName" class="form-label">NOM EMETEUR</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="email" class="form-label">NOM RECEPETEUR</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="email"
                                        placeholder=""
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="organization" class="form-label">MATRICULE</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="organization"
                                        name="organization"
                                        value={generateMatricule()}
                                        readOnly
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label class="form-label" for="phoneNumber">TELEPHONE</label>
                                    <div class="input-group input-group-merge">
                                        <span class="input-group-text">RDC (+243)</span>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            class="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="address" class="form-label">PAYS PROVENANCE</label>
                                    <select id="country"  class="select2 form-select">
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
                                <div class="mb-3 col-md-6">
                                    <label for="zipCode" class="form-label">PAYS DESTINATEUR</label>
                                    <select id="country"  class="select2 form-select">
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
                                <div class="mb-3 col-md-6">
                                    <label for="language" class="form-label">MONTANT</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="organization"
                                        name="organization"
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="timeZones" class="form-label">MOTIF</label>
                                    <textarea id="organization" name="" class="form-control" cols="10" rows="2"></textarea>
                                </div>
                            </div>
                            <div className=' col-md-12'>

                                <div class="form-check form-switch">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                        checked={showForm}
                                        onChange={toggleForm}
                                    />
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Dette</label>
                                </div>
                            </div>
                            {
                                showForm && (
                                    <div className='row'>
                                        <div class="mb-3 col-md-6">
                                            <label for="timeZones" class="form-label">Montant</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="organization"
                                                name="organization"
                                            />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="timeZones" class="form-label">Type dette</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="organization"
                                                name="organization"
                                            
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            <div class="mt-2">
                                {loading ? (
                                    <center>
                                        <div className="spinner-border" role="status"></div>
                                    </center>
                                ) : (
                                    <button type="submit" class="btn btn-primary me-2">Enregistrer</button>
                                )}
                                <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTransaction