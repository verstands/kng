import React from 'react'

const Cloture = () => {
    const Cloture = () => {
        alert('salut')
    }
    return (
        <>
            <div className='container mt-4'>
                <div class="card mb-4">
                    <h5 class="card-header">Cloture</h5>
                    <div class="card-body">

                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <form id="formAccountSettings" onSubmit={Cloture} method="POST" onsubmit="return false">
                            <div class="row">
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Balance</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Entrer Dubai</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Sorti Dubai</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Entrer Kinshasa</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Sorti Kishasa</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Depense</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Conteneur</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Dette partenaire</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                                <div class="mb-3 col-md-4">
                                    <label for="firstName" class="form-label">Dette Client</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        autofocus
                                    />
                                </div>
                            </div>
                            <div class="mt-2">
                                <button type="submit" class="btn btn-primary me-2"> Cloture</button>
                                <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cloture