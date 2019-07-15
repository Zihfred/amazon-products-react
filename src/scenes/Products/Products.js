import React from "react";
import "../../App.css";
import ProductList from "../../components/ProductsList/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Menu from "../../components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import queryString from "query-string";
import { connect } from "react-redux";
import {
  getProducts,
  filterProducts,
  selectCategory
} from "../../actions/Products";
import Spinner from "../../components/Spinner/Spinner";

class Products extends React.Component {
  state = {
    searchInputText: ""
  };

  handleChangeInput = e => {
    const value = e.target.value;

    let category;
    if (this.props.category == "undefined") {
      category = "";
    } else category = this.props.category;

    this.props.history.push(
      `?search=${value}&category=${encodeURIComponent(category)}`
    );

    this.setState({ searchInputText: value });
    this.props.filterProducts(value, this.props.category);
  };

  handleClickMenu = selectedCategory => {
    this.props.history.push(
      `?search=${this.state.searchInputText}&category=${selectedCategory}`
    );

    this.props.selectCategory(selectedCategory);
    this.props.filterProducts("",selectedCategory);
    this.setState({ searchInputText: "" });
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    let searchText = queryParams.search;

    if (!searchText) searchText = null;
    let category = decodeURI(queryParams.category) === "undefined"
      ? null
      : decodeURI(queryParams.category);

    this.props.getProducts(searchText, category);
    this.setState({ searchInputText: queryParams.search || "" });
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <SearchBar
              onChange={this.handleChangeInput}
              inputValue={this.state.searchInputText}
            />
            <Spinner isLoading={this.props.loading} />
            <Menu
              handleClickMenu={this.handleClickMenu}
              inputText={this.state.searchInputText}
              menuItems={this.state.categories}
            />
          </Col>
        </Row>
        <ProductList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  filteredProducts: state.products,
  loading: state.loading,
  category: state.category
});

const mapDispatchToProps = {
  getProducts: getProducts,
  filterProducts: filterProducts,
  selectCategory: selectCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
