import React, { useEffect, useRef, useState } from 'react'
import { getConteneur } from '../actions/ConteneurAction';
import { useDispatch } from 'react-redux';
import { postClient } from '../actions/ClientAction';

const AffecterUser = () => {
    const [dataDette, setdataDette] = useState([]);
    const [isLoading, setloading] = useState(true);
    const dispatch = useDispatch();
    const form = useRef();

    useEffect(() => {
        getConteneur().then((membre) => {
            setdataDette(membre); 
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSubmitEnvoie = async (e) => {
        e.preventDefault();
        setloading(true);
        const formData = {
            nom_client: form.current[0].value,
            telephone: form.current[1].value,
            marchandise: form.current[2].value,
            qte: form.current[3].value,
            montant: form.current[4].value,
            id_conteneur: form.current[5].value,
        };
        await dispatch(postClient(formData))
            .then(() => {
                setloading(false);
                form.current.reset();
            })
            .catch(() => {
                
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <div className='container mt-4'>
            <div class="card mb-4">
                <h5 class="card-header">Affecter un utilisateur dans unn groupage : </h5>
                <div class="card-body">

                </div>
                <hr class="my-0" />
                <div class="card-body">
                    <form id="formAccountSettings" ref={form} method="POST" onSubmit={handleSubmitEnvoie}>
                        <div class="row">
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Nom client</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Telephone</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    id="firstName"
                                    name="firstName"
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Marchandise</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Qte</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    id="firstName"
                                    name="firstName"
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Montant</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    id="firstName"
                                    name="firstName"
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="firstName" class="form-label">Groupage</label>
                                <select class="form-control" type="number">
                                    {
                                        dataDette.map((dt) => {
                                            return(
                                                <option value={dt.id}>{dt.nom_conteneur}</option>   
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="mt-2">
                        {isLoading ? (
                            <div className="spinner-border mr-4" role="status"></div>
                        ) : (
                            <button type="submit" class="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
                            )}
                            <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AffecterUser