import React from "react";
import { Row, Col } from "react-bootstrap";
import AllFoods from "../components/orders/AllFoods/AllFoods";
import SearchOrder from "../components/orders/searchOrders/SearchOrder";
import SelectedProducts from "../components/orders/selectedProducts/SelectedProducts";
const Orders = () => {
  return (
    <div className="orders">
      <Row>
        <Col md={2} style={{ paddingLeft: 0 }}>
          <SearchOrder />
        </Col>
        <Col md={7} style={{ padding: 0 }}>
          <AllFoods />
        </Col>
        <Col md={3} style={{ padding: "0 0 0 10px" }}>
          <SelectedProducts />
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
