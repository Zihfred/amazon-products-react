import React from "react";
import ProductList from "../ProductList";
import SearchBar from "../SearchBar";
import Menu from "../Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import queryString from "query-string";
import { connect } from "react-redux";
import {
    getProducts,
    filterProducts,
    selectCategory
} from "./actions";
import Spinner from "../common/Spinner";

class AppContainer extends React.Component {
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
        console.log(this.props)
        if(this.props.loading){
            return  <Spinner isLoading={this.props.loading} />
        }
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
                        />
                    </Col>
                </Row>
                <ProductList />
            </Container>
        );
    }
}

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
