import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from './../../config/menuconfig';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    createMenu = (menuList) => {
        return menuList.map((elem) => {
            if(elem.children){
                return (
                    <SubMenu key={elem.path}>
                        { this.createMenu(elem.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={elem.path}>
                    {elem.title}
                </Menu.Item>
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
                <Menu>
                    {this.state.list}
                </Menu>

            </div>
        )
    }
}

