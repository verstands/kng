/* eslint-disable no-unused-vars */
import { React } from "react";

const SortieVisa = () =>{
    return (
        <>
        <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Créer une sortie de visa</h5>
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
                                    <label htmlFor="timeZones" className="form-label">NOM AGENT</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">MONTANT</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">MOTIF</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        placeholder=""
                                    />
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

export default SortieVisa