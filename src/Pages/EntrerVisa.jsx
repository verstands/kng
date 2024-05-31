/* eslint-disable no-unused-vars */
import { React } from "react";

const EntrerVisa = () =>{
    return (
        <>
        <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Créer une demande de visa</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings"method="POST" >
                            <div className="row">
                            <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">NUMERO</label>
                                    <input className="form-control" readOnly type="text" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">NOM</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">POSTNOM</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">PRENOM</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organization" className="form-label">DATE DE NAISSANCE</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="phoneNumber">NATIONALITE</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="zipCode" className="form-label">SEXE</label>
                                    <select id="country"  className="select2 form-select">
                                        <option value="">Selectionner le sex</option>
                                        
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="language" className="form-label">PASSEPORT</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">ADRESSE</label>
                                    <input id="organization" name="" className="form-control" cols="10" rows="2"/>
                                </div><div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">NUMERO TELEPHONE</label>
                                    <input id="organization" name="" className="form-control" cols="10" rows="2"/>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="row">
                                    <div className="col-6 col-lg-6">
                                        <button type="reset" className="btn btn-primary w-100">Enregistrer</button>
                                    </div>
                                    <div className="col-6 col-lg-6">
                                        <button type="reset" className="btn btn-secondary w-100">Annuler</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}

export default EntrerVisa