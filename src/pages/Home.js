import React, { Component } from "react";
import SpecialDealsCarousel from "./SpecialDeals/specialDealCarousel";
import Product from "./Product/homeContainer/productContainer";
import Latest from "./Product/homeContainer/latestContainer";
import Detail from "../pages/Product/productDetail/ProductDetail";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="mt-4">
          <Detail />
          <Latest />
          
          <SpecialDealsCarousel/>
          <SpecialDealsCarousel/>
          
          
        </div>
      </>
    );
  }
}
