import React from "react";
import { Col, Card, Accordion } from "react-bootstrap";
import "./OrderCard.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
const OrderCard = (props) => {
  return (
    <Col className="OrderCard">
      <Card>
        <div className={props.item.state === 0 ? "HeavyTime" : "Time"}>
          <p>{props.item.time}</p>
          <p>باقي {props.item.timeRemain} </p>
        </div>
        <Card.Body>
          <Card.Title>{props.item.BillNumber}</Card.Title>
          <div className="card-text">
            <span className="desc">
              <span>{props.item.FoodName}</span>
              <span>{props.item.amount}x</span>
            </span>
            <Accordion defaultActiveKey={["1", "0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className={
                    !props.item.addions.length ? "NoAddions" : "ExistAddions"
                  }
                >
                  <span className="outer"></span>
                  <span className="px-2">الإضافات:</span>
                </Accordion.Header>
                <Accordion.Body className="addions">
                  {!props.item.addions.length && <p>لا إضافات</p>}
                  {props.item.addions &&
                    props.item.addions.map((item) => (
                      <div key={item.id}>
                        <BiMessageSquareAdd />
                        <p key={item.id}>{item.addion}</p>
                      </div>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  className={
                    !props.item.commint.length ? "NoAddions" : "ExistAddions"
                  }
                >
                  <span className="outer"></span>
                  <span className="px-2">الملاحظات:</span>
                </Accordion.Header>
                <Accordion.Body>
                  {!props.item.commint.length && <p>لا ملاحظات</p>}
                  {props.item.commint && <p>{props.item.commint}</p>}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <button
            className="close"
            onClick={() => {
              props.deleteBill(props.item.id);
            }}
          >
            إنهاء <IoMdDoneAll />
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrderCard;
