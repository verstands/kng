import React, { useEffect, useState } from 'react'
import { getVille } from '../actions/PaysAction';

const AddTransaction = () => {
    const [etatData, setetatData] = useState([]);
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        getVille().then((membre) => {
            setetatData(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const handleToggleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <div className='container mt-4'>
                <div class="card mb-4">
                    <h5 class="card-header">Faire une transaction</h5>
                    <div class="card-body">

                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <form id="formAccountSettings" method="POST" onsubmit="return false">
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label for="timeZones" class="form-label">Type de transaction</label>
                                    <select id="country" class="select2 form-select">
                                        <option value="1">Entrer</option>
                                        <option value="0">Sorti</option>
                                    </select>
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="firstName" class="form-label">NOM EMETEUR</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="lastName" class="form-label">NOM RECEPETEUR</label>
                                    <input class="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value=""
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
                                        value=""
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
                                    <select id="country" class="select2 form-select">
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
                                    <select id="country" class="select2 form-select">
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
                                        value=""
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
                                        onChange={handleToggleForm} 
                                    />
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Dette</label>
                                </div>
                            </div>
                            {
                                !showForm && (
                                    <div className='row'>
                                        <div class="mb-3 col-md-6">
                                            <label for="timeZones" class="form-label">MOMontantTIF</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="organization"
                                                name="organization"
                                                value=""
                                            />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="timeZones" class="form-label">Type dette</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="organization"
                                                name="organization"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            <div class="mt-2">
                                <button type="submit" class="btn btn-primary me-2">Enregistrer</button>
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