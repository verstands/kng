/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboad = () => {
  return (
    <div className="container">
      
      <div className="content-wrapper">
          <div className="container">
            
          <div className="row mt-5">
          <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/dashboad" >
                    <div className="card-body">
                      <span><b>HOME </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-home-circle fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/entrer">
                    <div className="card-body">
                      <span><b>DXB ABS </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-log-in fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/sortir"> 
                    <div className="card-body ">
                      <span><b>FIH ABS </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-log-out fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                <Link to="/detteClient">
                    <div className="card-body ">
                      <span><b>DETTE  </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-wallet fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/conteneur">
                    <div className="card-body">
                      <span><b> CONTENEUR </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-archive fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/compte" >
                    <div className="card-body">
                      <span><b> MON COMPTE </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-user-circle fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/cloture">
                    <div className="card-body">
                      <span><b>CLOTURE </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-x fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/Parametre">
                    <div className="card-body ">
                      <span><b> PARAMETRES </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-cog fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
                  <Link to="/profileUser">
                    <div className="card-body ">
                      <span><b> PROFILE </b></span><br/>
                      <i className="menu-icon tf-icons bx bx-user fs-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Dashboad