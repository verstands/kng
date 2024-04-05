import React, { useEffect, useState } from 'react'
import { getEntreDetail } from '../actions/EntreAction';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';

const EntreDetail = () => {
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true)

    let { id } = useParams();
    useEffect(() => {
        getEntreDetail(id).then((membre) => {
            setetatData(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <div className='container mt-4'>
                <div class="card mb-4">
                    <h5 class="card-header">Detail du trasaction</h5>
                    <div class="card-body">
                      Matricule : {etatData.matricule}
                      <p className='text-danger'>Date : {dateFormat(etatData.created_at, 'dd-mmm-yyyy')}</p>
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <form id="formAccountSettings" method="POST" onsubmit="return false">
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label for="firstName" class="form-label">NOM EMETEUR</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={etatData.nom_emateur}
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
                                        value={etatData.nom_recepteur}
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
                                        value={etatData.matricule}
                                        
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
                                            value={etatData.telephone}

                                        />
                                    </div>
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="address" class="form-label">PAYS PROVENANCE</label>
                                    <input 
                                        type="text" 
                                        id='pj'
                                        className='form-control'
                                        value={etatData.pays_provenance}

                                        />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="zipCode" class="form-label">PAYS DESTINATEUR</label>
                                    <input 
                                        type="text" 
                                        id='pj'
                                        className='form-control'
                                        value={etatData.pays_destinateut}

                                        />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="language" class="form-label">MONTANT</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="organization"
                                        name="organization"
                                        value={etatData.montant}
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="timeZones" class="form-label">MOTIF</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="organization"
                                        name="organization"
                                        value={etatData.motif}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EntreDetail