import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {connect} from "react-redux";


class Menu extends React.Component {
  render() {
    const { handleClickMenu } = this.props;
      let menuItems = [...new Set(this.props.products.map(item => item["bsr_category"]))];

    return (
      <Navbar>
        <Nav>
          {menuItems.map(menuItem => (
            <Link
              key={menuItem}
              to={`/?category=${menuItem}`}
              className="nav-link"
              onClick={() => handleClickMenu(menuItem)}
            >
              {menuItem}
            </Link>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) =>({
    products: state.products,
});

export default connect(mapStateToProps,null)(Menu);
