import React, { useEffect, useState } from 'react'
import { getBalanceKinshasa, getClientCompteur, getbalanceDubai2 } from '../actions/CompteAction';
import { getCounrDepotDoubai, getCounrRetraitDoubai } from '../actions/EntreAction';
import { getCounrDepotKinshasa, getCounrRetraitKinshasa } from '../actions/SortieAction';

const Compte = () => {
    const [balanceKin, setbalanceKin] = useState(0);
    const [balanceDubain, setbalanceDubai] = useState(0);
    const [clientCompteur, setclientCompteur] = useState(0);
    const [depot, setDepot] = useState(0);
    const [retrait, setretrait] = useState(0);
    const [retraitK, setretraitK] = useState(0);
    const [depotK, setdepotK] = useState(0);

    useEffect(() => {
        getBalanceKinshasa().then((membre) => {
            setbalanceKin(membre); 
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getbalanceDubai2().then((membre) => {
            setbalanceDubai(membre); 
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getClientCompteur().then((membre) => {
            setclientCompteur(membre); 
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getCounrDepotDoubai().then((membre) => {
            setDepot(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getCounrRetraitDoubai().then((membre) => {
            setretrait(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getCounrRetraitKinshasa().then((membre) => {
            setretraitK(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getCounrDepotKinshasa().then((membre) => {
            setdepotK(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                    <div class="col-lg-12 mb-4 order-0">
                        <div class="card">
                            <div class="d-flex align-items-end row">
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary"><i className='bx bx-user'></i> Mon compte</h5>

                                    </div>
                                </div>
                                <div class="col-sm-5 text-center text-sm-left">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Reste Dubai</span>
                                <h3 class="card-title mb-2">{balanceDubain} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Dubai Entrer</span>
                                <h3 class="card-title mb-2">{depot} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Dubai Sorti</span>
                                <h3 class="card-title mb-2">{retrait} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Reste Kinshasa</span>
                                <h3 class="card-title mb-2">{balanceKin} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Kinshasa Entrer</span>
                                <h3 class="card-title mb-2">{depotK} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Kinshasa Sorti</span>
                                <h3 class="card-title mb-2">{retraitK} $</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Nombre de client</span>
                                <h3 class="card-title mb-2">{clientCompteur}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex align-items-start justify-content-between">
                                    <div class="avatar flex-shrink-0">
                                        <img
                                            src="../assets/img/icons/unicons/chart-success.png"
                                            alt="chart success"
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <span class="fw-semibold d-block mb-1">Sorti special</span>
                                <h3 class="card-title mb-2">0</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compte