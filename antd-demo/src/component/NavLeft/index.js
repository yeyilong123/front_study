import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from './../../config/menuconfig';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    createMenu = (menuList) => {
        return menuList.map((elem) => {
            if(elem.children){
                return (
                    <SubMenu key={elem.path} title={<span><Icon type={elem.icon}></Icon>{elem.title}</span>}>
                        { this.createMenu(elem.children) }
                    </SubMenu>
                )
            }
            return (
                <link to={elem.path}>
                    <Menu.Item key={elem.path}>
                        {elem.title}
                    </Menu.Item>
                </link>
                
            )
        })
    }

    componentWillMount(){

        let list = this.createMenu(menuList);
        this.setState({
            list
        })
    }

    render() {
        return (
            <div>
                <Menu theme="dark" mode="inline" defaultOpenKeys={['/admin/student']}>
                    {this.state.list}
                </Menu>

            </div>
        )
    }
}

