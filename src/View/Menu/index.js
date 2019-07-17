import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Menu = ({ handleClickMenu, products }) => {
  if (!products.length) {
    return null;
  }

  let menuItems = [...new Set(products.map(item => item["bsr_category"]))];

  menuItems.unshift("All");

  return (
    <Navbar>
      <Nav>
        {menuItems.map(menuItem => (
          <a
            key={menuItem}
            className="nav-link"
            onClick={() => handleClickMenu(menuItem)}
          >
            {menuItem}
          </a>
        ))}
      </Nav>
    </Navbar>
  );
};

Menu.propTypes = {
  handleClickMenu: PropTypes.func,
  products: PropTypes.array
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  null
)(Menu);
