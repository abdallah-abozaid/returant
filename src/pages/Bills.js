import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import OrderCard from "../components/Bills/OrderCard";

const Bills = () => {
  const [allData, setallData] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      setload(true);
      const res = await fetch("/data/Orders.JSON");
      const data = await res.json();
      setallData(data);
      setload(false);
    };
    fetching();
  }, []);
  const deleteBill = (id) => {
    const newItems = allData.filter((item) => {
      return item.id !== id;
    });
    setallData(newItems);
  };
  return (
    <div className="Bills p-3 pt-5">
      {load && <h1>تحميل</h1>}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {!load &&
          allData.map((item) => (
            <OrderCard key={item.id} item={item} deleteBill={deleteBill} />
          ))}
      </Row>
      {!load && !allData.length && (
        <h2 className="text-center">لا يوجد طلبات بعد ..!</h2>
      )}
    </div>
  );
};

export default Bills;
