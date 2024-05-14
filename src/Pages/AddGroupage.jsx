import React, { useRef, useState } from 'react';
import { postConteneur } from '../actions/ConteneurAction';
import { useDispatch } from 'react-redux';

const AddGroupage = () => {
    const [conteneur, setConteneur] = useState('');
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();




    function generateUniqueNumber() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 10000);
        const uniqueNumber = `${timestamp}${randomNumber}`;
        setConteneur(uniqueNumber);
    }

    // eslint-disable-next-line no-unused-vars
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSubmitEnvoie = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            nom_conteneur: form.current[0].value,
            date_creation: form.current[2].value,
            numero: form.current[1].value,

        };
        await dispatch(postConteneur(formData))
            .then(() => {
                setLoading(false);
                form.current.reset();
            })
            .catch(() => {
                
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Creer un Groupage : </h5>
                    <div className="card-body"></div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings" ref={form} onSubmit={handleSubmitEnvoie}>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        autoFocus
                                    />

                                    <label htmlFor="numero" className="form-label">Numero</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="numero"
                                        name="numero"
                                        value={conteneur}
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    
                                    <label htmlFor="nom" className="form-label">Date de création</label>
                                    <input type="date" className="form-control"  id="date_creation" name="date_creation" autoFocus />

                                    <label></label>
                                    <button type="button" className="btn btn-secondary w-100 mt-4" onClick={generateUniqueNumber}>
                                        Générer Numéro Unique
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                {loading ? (
                                    <div className="spinner-border mr-4" role="status"></div>
                                ) : (
                                    <button type="submit" className="btn btn-primary me-2">
                                        <i className='bx bx-plus'></i> Enregistrer
                                    </button>
                                )}
                                <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddGroupage;
