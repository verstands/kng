import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            navigate('/dashboad');
        }
    }, [navigate]);

    return (
        <center>
            <div className="container-xxl container-p-y">
                <div className="misc-wrapper">
                    <h2 className="mb-2 mx-2">Page non trouvée :(</h2>
                    <p className="mb-4 mx-2">Oops! 😖 L'URL demandée n'a pas été trouvée sur ce serveur.</p>
                    <button onClick={() => navigate('/')} className="btn btn-primary">Retour dans le dashboard</button>
                    <div className="mt-3">
                        <img
                            src="../assets/img/illustrations/page-misc-error-light.png"
                            alt="page-misc-error-light"
                            width="500"
                            className="img-fluid"
                            data-app-dark-img="illustrations/page-misc-error-dark.png"
                            data-app-light-img="illustrations/page-misc-error-light.png"
                        />
                    </div>
                </div>
            </div>
        </center>
    );
};

export default Page404;
