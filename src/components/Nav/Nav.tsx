import { isTryStatement } from "typescript";
import {Header, Menu} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';

//tabs
const menuItems = [
    {
        name: "album",
        position: null,
    },
    {
        name: "photos",
        psoition: null,
    }
];

const Nav = () => {

    const renderMenuItems = (item: any) =>{
        return(
            <Menu.Item
                position = {item.position}
                key = {item.name}
                name = {item.name}
                as = {NavLink}
                to = {`/${item.name}`}
            />
        );
    }

    return(
        <Menu tabular>
            <Menu.Item>
                <Header as = 'h3' icon = 'camera retro' floated = 'right' />
            </Menu.Item>
            {
                menuItems.map(item => {
                    return renderMenuItems(item);
                })
            }
        </Menu>
    )
}

export default Nav