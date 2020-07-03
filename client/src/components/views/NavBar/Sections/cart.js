import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)


    return (
      <Menu mode={props.mode}>
        <Menu.Item key="cart">
            <Badge  style={{ right: "-30px", top: "10px" }}>
              <a href="/cart" style={{ color:'#667777' , transform: "translateY(-10px)"}}>
                <Icon type="shopping-cart" style={{ fontSize: 30, position: "absolute"}} />
              </a>
            </Badge>
        </Menu.Item>
      </Menu>
      
      
    )
}

export default withRouter(RightMenu);

