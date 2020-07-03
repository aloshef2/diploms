/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)
  console.log(user)
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };


  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <div key="mail">
          <a href="/login" className="btn btn-warning">Вход</a>
        </div>
        <li key="app">
          <a href="/register">Регистрация</a>
        </li>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        <li key="history">
          <a href="/history">История</a>
        </li>
        {user.userData && user.userData.isAdmin ?  
        <li key="dashboard/index">
        <a href="/dashboard/index">админка</a>
      </li>
        : null}
        

        <li key="profile">
          <a href={`/profile`}>профиль</a>
        </li>

        <li key="logout">
          <a onClick={logoutHandler}>Выход</a>
        </li>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

