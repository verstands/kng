import React from 'react'

const AddGroupage = () => {
  return (
    <>
        <div className='container mt-4'>
            <div class="card mb-4">
                <h5 class="card-header">Creer un Groupage : </h5>
                <div class="card-body">

                </div>
                <hr class="my-0" />
                <div class="card-body">
                    <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div class="row">
                            <div class="mb-3 col-md-12">
                                <label for="firstName" class="form-label">Nom</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value=""
                                    autofocus
                                />
                            </div>
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary me-2"><i className='bx bx-plus'></i> Enregistrer</button>
                            <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddGroupage