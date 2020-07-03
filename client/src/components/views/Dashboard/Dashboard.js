import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import './Components/sb-admin-2.min.css';
 
function DashboardNav() {
  return (
      <div>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/roboshop">
        <div className="sidebar-brand-text mx-3">Админка</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
        <a className="nav-link" href="/dashboard/index">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>панель управления</span></a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            магазин
        </div>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-boxes"></i>
            <span>продукты</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="/dashboard/product/get">все</a>
            <a className="collapse-item" href="/dashboard/product/upload">добавить</a>
            </div>
        </div>
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFree" aria-expanded="true" aria-controls="collapseFree">
            <i className="fas fa-copyright"></i>
            <span>категории</span>
        </a>
        <div id="collapseFree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="/dashboard/category/get">все</a>
            <a className="collapse-item" href="/dashboard/category/upload">добавить</a>
            </div>
        </div>
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTwo">
            <i class="far fa-address-book"></i>
            <span>производители</span>
        </a>
        <div id="collapseTree" className="collapse" aria-labelledby="headingTree" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="/dashboard/brend/get">все</a>
            <a className="collapse-item" href="/dashboard/brend/upload">добавить</a>
            </div>
        </div>
        </li>

        

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
        Оснавные
        </div>
        

        <li className="nav-item">
        <a className="nav-link" href="/dashboard/users/getUsers">
            <i className="fas fa-fw fa-table"></i>
            <span>Пользователи</span></a>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />

        </ul>
      </div>
  );
}

export default DashboardNav;
