import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import CatalogPage from "./views/Catalog/CatalogPage";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import UploadProductPage from './views/ProductPage/UploadProductPage';
import UploadBrendPage from './views/brendPage/UploadBrendPage';
import GetBrendPage from './views/brendPage/GetBrendPage';
import RulesPage from "./views/RulesPage/RulesPage";
import PayPage from "./views/PayPage/PayPage";
import PayVariblsPage from "./views/PayVariblsPage/PayVariblsPage";
import payCashInformation from "./views/Information/payCashInformation";
import payBankInformation from "./views/Information/payBankInformation";
import guaranteePage from "./views/Information/guaranteePage";
import requryProductPage from "./views/Information/requerProductPage";
import deliveryInformationPage from "./views/Information/deliveryInformationPage";
import deliveryPage from "./views/DevileryPage/DeliveryPage";
import CreditCards from "./views/CreditCard/CreditCardPage";
import CategoryUploadPage from "./views/CategoryPage/CategoryUploadPage";
import CategoryGet from "./views/CategoryPage/CategoryGet";
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import UsersListPage from "./views/UserListPage/UserListPage"
import CartPage from './views/CartPage/CartPage';
import FavouritePage from "./views/FavouritePage/FavouritePage";
import HistoryPage from './views/HistoryPage/HistoryPage';
import Dashboard from './views/DashboardIndex/DashboardIndex';
import GetProductPage from './views/ProductPage/GetProductPage';
import ProfilePage from "./views/ProfilePage/ProfilePage";
import Erorr404 from "./views/Eror404/Erorr404";


import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


function App() {
  return (
    
        <Switch>
          <Route exact path="/roboshop/:category" component={Auth(LandingPage, null)} />
          <Route exact path="/roboshop" component={Auth(LandingPage, null)} />
          <Route exact path="/" component={Auth(CatalogPage, null)} />
          <Route exact path="/rules" component={Auth(RulesPage, null)} />
          <Route exact path="/payvaribls" component={Auth(PayVariblsPage, null)} />
          <Route exact path="/paycash" component={Auth(payCashInformation, null)} />
          <Route exact path="/paybank" component={Auth(payBankInformation, null)} />
          <Route exact path="/guarantee" component={Auth(guaranteePage, null)} />
          <Route exact path="/requry" component={Auth(requryProductPage, null)} />
          <Route exact path="/deliveryInformation" component={Auth(deliveryInformationPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/:productId" name="product" component={Auth(DetailProductPage, null)} />
          <Route exact path="/cart" component={Auth(CartPage, true)} />
          <Route exact path="/delivery" component={Auth(deliveryPage, true)} />
          <Route exact path="/pay" component={Auth(PayPage, true)} />
          <Route exact path="/creditcard" component={Auth(CreditCards, true)} />
          <Route exact path="/favourite" component={Auth(FavouritePage, true)} />
          <Route exact path="/profile" component={Auth(ProfilePage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/dashboard/index" component={Auth(Dashboard, true)}/>
          <Route exact path="/dashboard/users/getUsers" component={Auth(UsersListPage, true)}/>
          <Route exact path="/dashboard/brend/upload" component={Auth(UploadBrendPage, true)}/>
          <Route exact path="/dashboard/category/get" component={Auth(CategoryGet, true)}/>
          <Route exact path="/dashboard/category/upload" component={Auth(CategoryUploadPage, true)}/>
          <Route exact path="/dashboard/brend/get" component={Auth(GetBrendPage, true)}/>
          <Route exact path="/dashboard/product/get" component={Auth(GetProductPage, true)} />
          <Route exact path="/dashboard/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/*" component={Auth(Erorr404,null)} />
        </Switch>
    
  );
}

export default App;
