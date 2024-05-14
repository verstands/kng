import React from 'react'

const Adddette = () => {
  return (
    <>
        <div className='container mt-4'>
            <div className="card mb-4">
                <h5 className="card-header">Modifié le client : </h5>
                <div className="card-body">

                </div>
                <hr className="my-0" />
                <div className="card-body">
                    <form id="formAccountSettings" method="POST" onSubmit="return false">
                        <div className="row">
                            <div className="mb-3 col-md-12">
                                <label htmlFor="firstName" className="form-label">Montant</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="firstName"
                                    name="firstName"
                                    value=""
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label htmlFor="timeZones" className="form-label">MOTIF</label>
                                <textarea id="organization" name="" className="form-control" cols="10" rows="2"></textarea>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
                            <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Adddette