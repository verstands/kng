import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    let profileData = localStorage.getItem('data')
    profileData = JSON.parse(profileData);
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                       
                            <a href="index.html" class="app-brand-link">
                                <img src='ab.jpg' width="100%" height=""/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </a>
                        
                        <div class="menu-inner-shadow"></div>
                        <ul class="menu-inner py-1">
                            <li className={`menu-item ${location.pathname === '/dashboad' ? 'active' : ''}`}>
                                <Link to="/dashboad" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-home-circle"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/entrer' ? 'active' : ''}`}>
                                <Link to="/entrer" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-log-in"></i>
                                    <div data-i18n="Analytics">DXB ABS</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/sortir' ? 'active' : ''}`}>
                                <Link to="/sortir" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-log-out"></i>
                                    <div data-i18n="Analytics">FIH ABS</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/detteClient' ? 'active' : ''}`}>
                                <Link to="/detteClient" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-wallet"></i>
                                    <div data-i18n="Analytics">Dette</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/conteneur' ? 'active' : ''}`}>
                                <Link to="/conteneur" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-archive"></i>
                                    <div data-i18n="Analytics">Conteneur</div>
                                </Link>
                            </li>
                            
                            <li className={`menu-item ${location.pathname === '/compte' ? 'active' : ''}`}>
                                <Link to="/compte" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-user-circle"></i>
                                    <div data-i18n="Analytics">Mon compte</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/cloture' ? 'active' : ''}`}>
                                <Link to="/cloture" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-x"></i>
                                    <div data-i18n="Analytics">Cloture</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${location.pathname === '/Parametre' ? 'active' : ''}`}>
                                <Link to="/Parametre" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-cog"></i>
                                    <div data-i18n="Analytics">Parametre</div>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <div class="layout-page">

                        <nav
                            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i class="bx bx-menu bx-sm"></i>
                                </a>
                            </div>

                            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <div class="navbar-nav align-items-center">
                                    <div class="nav-item d-flex align-items-center">
                                        <i class="bx bx-search fs-4 lh-0"></i>
                                        <input
                                            type="text"
                                            class="form-control border-0 shadow-none"
                                            placeholder="Search..."
                                            aria-label="Search..."
                                        />
                                    </div>
                                </div>

                                <ul class="navbar-nav flex-row align-items-center ms-auto">
                                    <li class="nav-item lh-1 me-3">
                                        <a
                                            class="github-button"
                                            href="https://github.com/themeselection/sneat-html-admin-template-free"
                                            data-icon="octicon-star"
                                            data-size="large"
                                            data-show-count="true"
                                            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                                        ><span style={{fontWeight : "bold"}}>{profileData.postnom} {profileData.nom}</span></a
                                        >
                                    </li>

                                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div class="avatar avatar-online">
                                                <i className='bx bx-user-circle' style={{fontSize : 40}}></i>
                                            </div>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar avatar-online">
                                                <i className='bx bx-user-circle' style={{fontSize : 40}}></i>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <span class="fw-semibold d-block">{profileData.nom} {profileData.postnom}</span>
                                                            <small class="text-muted">Adminstrateur</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <i class="bx bx-user me-2"></i>
                                                    <span class="align-middle">Mon profile</span>
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <div class="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <Link to="/deconnextion" class="dropdown-item" href="auth-login-basic.html">
                                                    <i class="bx bx-power-off me-2"></i>
                                                    <span class="align-middle">Se deconnecter</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="content-wrapper">
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout