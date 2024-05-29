import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  let profileData = localStorage.getItem("data");
  profileData = JSON.parse(profileData);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme d-none d-xl-block"
          >
            <a href="" className="app-brand-link">
              <img src={`../public/ab.jpg`} width="100%" height="" alt="Logo" />
              <br />
              <br />
              <br />
              <br />
            </a>
            <div className="menu-inner-shadow"></div>
            <ul className="menu-inner py-1">
              <li
                className={`menu-item ${
                  location.pathname === "/dashboad" ? "active" : ""
                }`}
              >
                <Link to="/dashboad" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/entrer" ? "active" : ""
                }`}
              >
                <Link to="/entrer" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-log-in"></i>
                  <div data-i18n="Analytics">DXB ABS</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/sortir" ? "active" : ""
                }`}
              >
                <Link to="/sortir" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-log-out"></i>
                  <div data-i18n="Analytics">FIH ABS</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/detteClient" ? "active" : ""
                }`}
              >
                <Link to="/detteClient" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-wallet"></i>
                  <div data-i18n="Analytics">Dette</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/conteneur" ? "active" : ""
                }`}
              >
                <Link to="/conteneur" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-archive"></i>
                  <div data-i18n="Analytics">Conteneur</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/compte" ? "active" : ""
                }`}
              >
                <Link to="/compte" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-user-circle"></i>
                  <div data-i18n="Analytics">Mon compte</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/cloture" ? "active" : ""
                }`}
              >
                <Link to="/cloture" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-x"></i>
                  <div data-i18n="Analytics">Cloture</div>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/visa" ? "active" : ""
                }`}
              >
                <Link to="/visa" className="menu-link">
                  <i className="menu-icon bx bx-credit-card"></i>
                  <div data-i18n="Analytics">Visa</div>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  location.pathname === "/Parametre" ? "active" : ""
                }`}
              >
                <Link to="/Parametre" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-cog"></i>
                  <div data-i18n="Analytics">Parametre</div>
                </Link>
              </li>
            </ul>
          </aside>
          <div className="layout-page">
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <button
                  className="nav-item nav-link px-0 me-xl-4 btn"
                  
                >
                  <i className="bx bx-menu bx-sm"></i>
                </button>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search fs-4 lh-0"></i>
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search..."
                      aria-label="Search..."
                    />
                  </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item lh-1 me-3">
                    <a
                      className="github-button"
                      href=""
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {profileData.postnom} {profileData.nom}
                      </span>
                    </a>
                  </li>

                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <i
                          className="bx bx-user-circle"
                          style={{ fontSize: 40 }}
                        ></i>
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <i
                                  className="bx bx-user-circle"
                                  style={{ fontSize: 40 }}
                                ></i>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">
                                {profileData.postnom} {profileData.nom}
                              </span>
                              <small className="text-muted">
                                Adminstrateur
                              </small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profileUser">
                          <i className="bx bx-user me-2"></i>
                          <span className="align-middle">Mon profile</span>
                        </Link>
                      </li>

                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link to="/deconnextion" className="dropdown-item">
                          <i className="bx bx-power-off me-2"></i>
                          <span className="align-middle">Se deconnecter</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="content-wrapper">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
