import React, { useEffect, useRef, useState } from "react";
import { getProfile, puttUser } from "../actions/Login.action";
import { useDispatch } from "react-redux";

const Profil = () => {
  const [profile, setprofile] = useState([]);
  const form = useRef();
const dispatch = useDispatch();

useEffect(() => {
    getProfile().then((membre) => {
        setprofile(membre);
    }).catch((error) => {
        console.log(error);
    });
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        nom:  form.current[0].value,
        postnom: form.current[1].value,
        email:  form.current[2].value,
    };
  
  await dispatch(puttUser(formData))
        .then(() => {
            form.current.reset();
            setLoading(false);
        })
        .catch(() => {
            
        })
        .finally(() => {
            setLoading(false);
        });
};

  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Mon profile : </h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form id="formAccountSettings" ref={form} onSubmit={handleSubmit}>
              <div className="row d-flex">
                <div className="col-md-6">
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">
                        Nom
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="nom"
                        name="nom"
                        value={profile.nom}
                        onChange={(e) => setprofile({ ...profile, nom: e.target.value })}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">
                        Prenom
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="nom"
                        name="nom"
                        value={profile.postnom}
                        onChange={(e) => setprofile({ ...profile, postnom: e.target.value })}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="nom"
                        name="nom"
                        autoFocus
                        value={profile.email}
                        onChange={(e) => setprofile({ ...profile, email: e.target.value })}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">
                        
                      </label>
                      <input
                        className="form-control"
                        type="hidden"
                        id="nom"
                        name="nom"
                        autoFocus
                        value={profile.id}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  
                </div>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">
                  <i className="bx bx-edit"></i> Modifier
                </button>

                <button type="reset" className="btn btn-outline-secondary">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
