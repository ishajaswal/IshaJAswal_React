import React, { Component } from 'react';
import ProductList from './ProductList';

interface State {}

class Navbar extends Component<{}, State> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
        </div>
      </nav>
        );
    }
}

export default Navbar;
