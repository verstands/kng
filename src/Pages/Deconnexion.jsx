import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const Deconnexion = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('data');
        navigate('/'); 
    }, [navigate]); 
    
    return (
        <div>
            <center>
                <Spinner />  
            </center> 
        </div>
    );
}

export default Deconnexion;
