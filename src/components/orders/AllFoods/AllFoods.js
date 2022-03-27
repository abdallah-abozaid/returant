import React, { useEffect, useState } from "react";
import classes2 from "../searchOrders/SearchOrder.module.css";
import classes from "./AllFoods.module.css";
import { InputGroup, FormControl, Row, Col, Card } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ActionsSelected } from "../../../Store";

const AllFoods = () => {
  const Items = useSelector((state) => state.selectedItems);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const AddItemsToSelectedList = (item) => {
    dispatch(ActionsSelected.addItem(item));
  };
  const location = useLocation();
  const [Foods, setFoods] = useState([]);
  const [FoodsAppear, setFoodsAppear] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      setload(true);
      const res = await fetch("/data/Foods.JSON");
      const data = await res.json();
      const selectedFood = data.filter((item) => {
        return item.title.includes(search);
      });
      setFoods(selectedFood);
      setFoodsAppear(selectedFood);
      setload(false);
    };
    fetching();
  }, [search]);
  useEffect(() => {
    const param = new URLSearchParams(location.search);
    if (param.get("category") === "AllCategories") {
      setFoodsAppear(Foods);
    } else {
      const selected = Foods.filter((item) => {
        return item.category === param.get("category");
      });
      const selectedFood = selected.filter((item) => {
        return item.title.includes(search);
      });
      setFoodsAppear(selectedFood);
    }
  }, [location.search, search]);
  const searchHandle = (e) => {
    setsearch(e.target.value);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={classes2.searchIcon}>
          <BsSearch />
        </InputGroup.Text>
        <FormControl
          className={classes2.searchInput}
          placeholder="فئه البحث هنا"
          aria-label="searchInput"
          onChange={searchHandle}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className={classes.allFoods}>
        {load && <h5>جاري التحميل ..</h5>}

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {Foods &&
            FoodsAppear.map((item) => (
              <Col key={item.id}>
                <Card className={classes.card}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className={classes["card-body"]}>
                    <div className={classes["card-text"]}>
                      <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                      </div>
                      <p className={classes.description}>{item.description}</p>
                      {!Items.find((Item) => {
                        return Item.id === item.id;
                      }) && (
                        <button
                          onClick={() => {
                            AddItemsToSelectedList(item);
                          }}
                          className={classes.btnAdd}
                        >
                          إختيار
                        </button>
                      )}
                      {Items.find((Item) => {
                        return Item.id === item.id;
                      }) && (
                        <button className={classes.btnAdd2}>تم إضافته</button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default AllFoods;
