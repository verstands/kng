import React from 'react'

const Adddette = () => {
  return (
    <>
        <div className='container mt-4'>
            <div class="card mb-4">
                <h5 class="card-header">Modifié le client : </h5>
                <div class="card-body">

                </div>
                <hr class="my-0" />
                <div class="card-body">
                    <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div class="row">
                            <div class="mb-3 col-md-12">
                                <label for="firstName" class="form-label">Montant</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    id="firstName"
                                    name="firstName"
                                    value=""
                                    autofocus
                                />
                            </div>
                            <div class="mb-3 col-md-12">
                                <label for="timeZones" class="form-label">MOTIF</label>
                                <textarea id="organization" name="" class="form-control" cols="10" rows="2"></textarea>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
                            <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Adddette