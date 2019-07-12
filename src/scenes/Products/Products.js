import React from "react";
import "../../App.css";
import ProductList from "../../components/ProductsList/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Menu from "../../components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../API/API";
import queryString from "query-string";

class Products extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    category: "",
    searchInputText: ""
  };

  handleChangeInput = e => {
    const value = e.target.value;
    let category;
    if (this.state.category == "undefined") {
      category = "";
    } else category = this.state.category;
    this.props.history.push(
      `?search=${value}&category=${encodeURIComponent(category)}`
    );
    this.setState({ searchInputText: value });
    this.filterAfterLoadingData(value, this.state.category);
  };

  filterAfterLoadingData = (searchText, category) => {
    let products = [...this.state.products];

    if (searchText && category !== "undefined" && category !== null) {
      searchText = searchText.trim().toLowerCase();
      console.log("Search text and category");
      products = products.filter(oneProduct => {
        console.log(searchText);
        return (
          oneProduct["bsr_category"] === category &&
          oneProduct.name.toLowerCase().includes(searchText)
        );
      });
    } else if (searchText) {
      console.log("Search text");
      searchText = searchText.trim().toLowerCase();
      products = products.filter(oneProduct => {
        return oneProduct.name
          .trim()
          .toLowerCase()
          .includes(searchText);
      });
    } else if (category !== null && category !== "undefined") {
      console.log("Search  category");
      products = products.filter(oneProduct => {
        return oneProduct["bsr_category"] === category;
      });
    }

    this.setState({ filteredProducts: products });
  };

  handleClickMenu = selectedCategory => {
    this.props.history.push(
      `?search=${this.state.searchInputText}&category=${selectedCategory}`
    );
    if (!selectedCategory) return 0;
    let products = [...this.state.products];
    products = products.filter(
      oneProduct => oneProduct["bsr_category"] === selectedCategory
    );
    this.setState(
      { filteredProducts: products, category: selectedCategory,searchInputText:'' },
      () => {
        return this.filterAfterLoadingData(
          this.state.searchInputText,
          selectedCategory
        );
      }
    );
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    API.getProducts()
      .then(products => {
        let replacedProducts = products.products.map(item => {
          return {
            ...item,
            bsr_category: item["bsr_category"].replace(/\&/g, "and")
          };
        });

        let categories = [...new Set(replacedProducts.map(item => item["bsr_category"]))];

        this.setState({
          products: replacedProducts,
          filteredProducts: replacedProducts,
          categories: categories,
          category: decodeURI(queryParams.category) || null,
          searchInputText: queryParams.search || ''
        });
      })
      .then(() => {
        this.filterAfterLoadingData(
          this.state.searchInputText,
          this.state.category
        );
      });
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
            <Menu
              handleClickMenu={this.handleClickMenu}
              inputText={this.state.searchInputText}
              menuItems={this.state.categories}
            />
          </Col>
        </Row>
            <ProductList products={this.state.filteredProducts} />


      </Container>
    );
  }
}

export default Products;
