import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const { menuItems,handleClickMenu } = this.props;
        console.log(menuItems)
        if (!menuItems) return '';
        return(
            <Navbar>
                <Nav>
                {menuItems.map(menuItem => <Nav.Link  onClick={()=>handleClickMenu(menuItem)} key={menuItem}>{menuItem}</Nav.Link>)}
                </Nav>
            </Navbar>
        )
    }
}

export default Menu;
