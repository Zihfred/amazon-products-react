import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    const { menuItems, handleClickMenu } = this.props;
    if (!menuItems) return "";
    console.log(menuItems);
    return (
      <Navbar>
        <Nav>
          {menuItems.map(menuItem => (
            <Link
              key={menuItem}
              to={`/?category=${((menuItem))}`}
            >
              <Nav.Link
                onClick={() => handleClickMenu((menuItem))}
              >
                {menuItem}
              </Nav.Link>
            </Link>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
