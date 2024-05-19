import React, { useState } from 'react';
import { getLogin } from '../actions/Login.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(getLogin(formData))
      .then(() => {
        navigate('/dashboad');
      })
      .catch(() => {
        // Gérer l'échec de la connexion ici si nécessaire
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <div className="container">
     <br />
    
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-body">
              
              <img src='ab.jpg' width="100%" height=""/>
              <form id="formAuthentication" onSubmit={handleSubmit} className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">MOT DE PASSE</label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me"> Souviens-toi de moi </label>
                  </div>
                </div>
                <div className="mb-3">
                  {loading ? (
                    <center>
                      <div class="spinner-border" role="status"></div>
                    </center>
                  ) : (
                    <button className="btn btn-primary d-grid w-100" type="submit">Se connecter</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
