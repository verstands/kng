import React, { useEffect, useState } from 'react'
import { getEntreDetail } from '../actions/EntreAction';
import { useParams, Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { getDepenseDetail } from '../actions/DepenseAction';

const DepenseUpdate = () => {
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true)

    let { id } = useParams();
    useEffect(() => {
        getDepenseDetail(id).then((membre) => {
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
                    <h5 class="card-header">Modifier une depense</h5>
                    <div class="card-body">
                        
                        <p className='text-danger'>Date : {dateFormat(etatData.created_at, 'dd-mmm-yyyy')}</p>
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <form id="formAccountSettings" method="POST" onsubmit="return false">
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label for="firstName" class="form-label">MONTANT</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={etatData.montant}
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="lastName" class="form-label">MOTIF</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={etatData.motif}
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="email" class="form-label">VILLE</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={etatData.ville_id}
                                        placeholder=""
                                    />
                                </div>
                                <div class="mt-2">
                                    <button type="submit" class="btn btn-primary me-2"><i className='bx bx-edit'></i> Modifier</button>
                                    <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepenseUpdate