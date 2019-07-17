import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import ProductList from "../ProductList";
import SearchBar from "../SearchBar";
import Menu from "../Menu";
import {
  getProducts,
  filterProducts,
  selectCategory
} from "../../ducks/appContainerDuck";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";

class AppContainer extends React.Component {
  state = {
    searchInputText: ""
  };

  getProductsAndURLParams() {
    const queryParams = queryString.parse(this.props.location.search);

    let searchText = queryParams.search;

    if (!searchText) searchText = "";
    console.log(queryParams.category);
    let category = queryParams.category
      ? decodeURI(queryParams.category)
      : null;

    this.props.getProducts(searchText, category);
    this.setState({ searchInputText: queryParams.search || "" });
  }

  handleChangeInput = e => {
    const value = e.target.value;

    let category;

    if (this.props.category) {
      category = this.props.category;
    } else category = "";

    this.props.history.push(
      `?search=${value}&category=${encodeURIComponent(category)}`
    );

    this.setState({ searchInputText: value });
    this.props.filterProducts(value, this.props.category);
  };

  handleClickMenu = selectedCategory => {
    console.log(selectedCategory);

    this.props.history.push(
      `?search=${this.state.searchInputText}&category=${selectedCategory}`
    );

    this.props.selectCategory(selectedCategory);
    this.props.filterProducts(this.state.searchInputText, selectedCategory);
  };

  componentDidMount() {
    this.getProductsAndURLParams();
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return <Spinner isLoading={loading} />;
    }

    return (
      <Container className="App">
        <Row>
          <Col>
            <SearchBar
              onChange={this.handleChangeInput}
              inputValue={this.state.searchInputText}
            />
            <Menu handleClickMenu={this.handleClickMenu} />
          </Col>
        </Row>
        <ProductList />
      </Container>
    );
  }
}

AppContainer.propTypes = {
  products: PropTypes.array,
  filteredProducts: PropTypes.array,
  loading: PropTypes.bool,
  category: PropTypes.string,
  getProducts: PropTypes.func,
  filterProducts: PropTypes.func,
  selectCategory: PropTypes.func
};

const mapStateToProps = state => ({
  products: state.products.products,
  filteredProducts: state.products.products,
  loading: state.products.loading,
  category: state.products.category
});

const mapDispatchToProps = {
  getProducts: getProducts,
  filterProducts: filterProducts,
  selectCategory: selectCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
